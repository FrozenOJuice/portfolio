import type { ImageMetadata } from 'astro';
import omrImage from '../assets/projects/omr-exam-review.png';
import every168Image from '../assets/projects/every168-calendar.png';
import tradexImage from '../assets/projects/tradex-replay.png';

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image: ImageMetadata;
  imageAlt: string;
  caption: string;
  caseImage?: ImageMetadata;
  caseImageAlt?: string;
  caseCaption?: string;
  credit?: { label: string; url: string };
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'omr-system',
    name: 'OMR System',
    description: 'Team capstone for exam grading; I worked on accounts and Canvas integration.',
    technologies: ['Angular', 'FastAPI', 'Go / OpenCV', 'PostgreSQL'],
    image: omrImage,
    imageAlt: 'OMR exam review showing a scanned bubble sheet, detected answers, and grade controls.',
    caption: 'OMR System exam review.',
    credit: {
      label: 'Team credits',
      url: 'https://github.com/FrozenOJuice/omr-project/blob/main/CONTRIBUTORS.md',
    },
    sourceUrl: 'https://github.com/FrozenOJuice/omr-project',
  },
  {
    id: 'every168',
    name: 'Every168',
    description: 'Calendar and fitness app for scheduling and workout tracking.',
    technologies: ['TypeScript', 'Next.js', 'Express', 'PostgreSQL'],
    image: every168Image,
    imageAlt: 'Every168 weekly calendar with scheduled work, learning, and workout reservations.',
    caption: 'Weekly planning in Every168, with a workout linked to its calendar reservation.',
    sourceUrl: 'https://github.com/FrozenOJuice/Every168',
  },
  {
    id: 'tradex',
    name: 'TradeX',
    description: 'Futures-market analysis with Replay, Backtesting, and AI-assisted workflows.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AI integration'],
    image: tradexImage,
    imageAlt: 'TradeX historical Replay interface with a candlestick chart, market levels, and playback controls.',
    caption: 'TradeX historical Replay workspace.',
  },
];
