export const site = {
  name: 'Joel deHoog',
  title: 'Joel deHoog — Software Developer',
  description:
    'Joel deHoog, Software Developer and recent UBC Okanagan Computer Science graduate. Full-stack applications, backend systems, and AI integration.',
  email: 'joel.dehoog@gmail.com',
  github: 'https://github.com/FrozenOJuice',
  linkedin: 'https://www.linkedin.com/in/joel-dehoog-815230293/',
  // Replace the file in public/ when updating the resume, or set null to hide it.
  resume: '/Portfolio_Resume.pdf' as string | null,
};

export const skillGroups = [
  { title: 'Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'] },
  { title: 'Frontend', skills: ['Angular', 'React', 'Next.js'] },
  { title: 'Backend & data', skills: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL'] },
  { title: 'Integrations', skills: ['OpenCV', 'AI APIs'] },
];
