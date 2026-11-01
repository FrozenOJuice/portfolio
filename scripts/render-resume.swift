// Run on macOS with: npm run resume:preview
// Produces static preview assets; the original PDF is never modified.
import AppKit
import CryptoKit
import Foundation
import PDFKit

struct ResumePage: Codable {
    let image: String
    let text: String
}

struct ResumePreview: Codable {
    let sourceSha256: String
    let pages: [ResumePage]
}

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let source = root.appendingPathComponent("public/Portfolio_Resume.pdf")
let output = root.appendingPathComponent("src/assets/resume", isDirectory: true)
let manifest = root.appendingPathComponent("src/data/resume-preview.json")
let data = try Data(contentsOf: source)
guard let document = PDFDocument(data: data), !document.isLocked, document.pageCount > 0 else {
    fatalError("The resume must be a readable, unlocked PDF.")
}
try FileManager.default.createDirectory(at: output, withIntermediateDirectories: true)
var pages: [ResumePage] = []

for index in 0..<document.pageCount {
    guard let page = document.page(at: index) else { fatalError("Missing PDF page.") }
    let bounds = page.bounds(for: .cropBox)
    let scale: CGFloat = 3
    guard let bitmap = NSBitmapImageRep(
        bitmapDataPlanes: nil,
        pixelsWide: Int(ceil(bounds.width * scale)),
        pixelsHigh: Int(ceil(bounds.height * scale)),
        bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true,
        isPlanar: false, colorSpaceName: .deviceRGB,
        bytesPerRow: 0, bitsPerPixel: 0
    ), let graphics = NSGraphicsContext(bitmapImageRep: bitmap) else {
        fatalError("Could not create the resume preview canvas.")
    }
    let context = graphics.cgContext
    context.setFillColor(NSColor.white.cgColor)
    context.fill(CGRect(x: 0, y: 0, width: bitmap.pixelsWide, height: bitmap.pixelsHigh))
    context.scaleBy(x: scale, y: scale)
    context.translateBy(x: -bounds.minX, y: -bounds.minY)
    page.draw(with: .cropBox, to: context)
    guard let png = bitmap.representation(using: .png, properties: [:]) else {
        fatalError("Could not encode the resume preview.")
    }
    let filename = String(format: "page-%02d.png", index + 1)
    try png.write(to: output.appendingPathComponent(filename))
    // PDF text extraction can detach decorative bullet glyphs from their lines.
    let text = (page.string ?? "").components(separatedBy: .newlines)
        .filter { $0.trimmingCharacters(in: .whitespaces) != "●" }
        .joined(separator: "\n")
    pages.append(ResumePage(image: filename, text: text))
}

// Remove old pages when a replacement resume has fewer pages.
let expected = Set(pages.map(\.image))
for file in try FileManager.default.contentsOfDirectory(at: output, includingPropertiesForKeys: nil) {
    if file.lastPathComponent.hasPrefix("page-"), file.pathExtension == "png", !expected.contains(file.lastPathComponent) {
        try FileManager.default.removeItem(at: file)
    }
}
let hash = SHA256.hash(data: data).map { String(format: "%02x", $0) }.joined()
let encoder = JSONEncoder()
encoder.outputFormatting = [.prettyPrinted, .sortedKeys, .withoutEscapingSlashes]
try encoder.encode(ResumePreview(sourceSha256: hash, pages: pages)).write(to: manifest)
print("Rendered \(pages.count) resume page(s); the PDF is unchanged.")
