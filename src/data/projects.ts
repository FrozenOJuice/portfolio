import type { ImageMetadata } from 'astro';
import omrImage from '../assets/projects/omr-exam-review.png';
import every168Image from '../assets/projects/every168-calendar.png';
import tradexImage from '../assets/projects/tradex-replay.png';

export interface Project {
  id: string;
  name: string;
  context: string;
  description: string;
  technologies: string[];
  highlightsTitle: string;
  highlights: string[];
  image: ImageMetadata;
  imageAlt: string;
  caption: string;
  credit?: { label: string; url: string };
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'omr-system',
    name: 'OMR System',
    context: 'University capstone · Team of six',
    description:
      'An exam management system connecting paper exams to digital grading. Built collaboratively at UBC Okanagan, it combines optical mark recognition, instructor review, and Canvas LMS integration.',
    technologies: ['Angular', 'FastAPI', 'Go / OpenCV', 'PostgreSQL'],
    highlightsTitle: 'My contributions',
    highlights: [
      'Authentication, password recovery, and account management.',
      'Canvas course and roster integration, grade release, and student result links.',
      'Exam templates, sections, and scanned answer-key workflows.',
    ],
    image: omrImage,
    imageAlt:
      'OMR exam review showing a scanned bubble sheet, detected answers, and grade controls with synthetic student records.',
    caption: 'Original application capture with seeded demonstration records.',
    credit: {
      label: 'Built by Team 15',
      url: 'https://github.com/FrozenOJuice/omr-project/blob/main/CONTRIBUTORS.md',
    },
    sourceUrl: 'https://github.com/FrozenOJuice/omr-project',
  },
  {
    id: 'every168',
    name: 'Every168',
    context: 'Independent project · Calendar & fitness',
    description:
      'A full-stack application for planning the week and recording training. I developed the calendar, workout tracking, and account workflows, with a focus on keeping planned activity and completed results distinct.',
    technologies: ['TypeScript', 'Next.js', 'Express', 'PostgreSQL'],
    highlightsTitle: 'Engineering focus',
    highlights: [
      'Timezone-aware scheduling and connected workout tracking.',
      'Account-scoped access across calendar and fitness data.',
      'Safe retries and revision checks for reliable updates.',
    ],
    image: every168Image,
    imageAlt:
      'Every168 weekly calendar showing scheduled work, learning, and workouts using synthetic demonstration data.',
    caption: 'Calendar week view. Genuine application capture with synthetic data.',
    sourceUrl: 'https://github.com/FrozenOJuice/Every168',
  },
  {
    id: 'tradex',
    name: 'TradeX',
    context: 'Personal project · Private source',
    description:
      'A futures-market analysis workspace for exploring historical data, Replay, and Backtesting. I built it to connect market-data workflows with AI-assisted investigation in one application.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AI integration'],
    highlightsTitle: 'Engineering focus',
    highlights: [
      'Historical Replay and Backtesting on a shared market-data pipeline.',
      'Point-in-time data boundaries that keep future observations out of earlier analysis.',
      'AI-assisted workflows with structured evidence and validation.',
    ],
    image: tradexImage,
    imageAlt:
      'TradeX historical Replay interface with a candlestick chart, market levels, volume, and playback controls.',
    caption:
      'Local Replay interface with historical market data. This capture shows the software, not verified trading results.',
  },
];
