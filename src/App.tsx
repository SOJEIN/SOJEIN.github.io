import React, { Suspense, lazy } from 'react';

import { HomePage } from './modules/home/HomePage';
import Layout from './shared/components/layout/Layout';

const About = lazy(() => import('./modules/about/About').then((m) => ({ default: m.About })));
const Experience = lazy(() =>
  import('./modules/experience/Experience').then((m) => ({ default: m.Experience })),
);
const Education = lazy(() =>
  import('./modules/education/Education').then((m) => ({ default: m.Education })),
);
const Certifications = lazy(() =>
  import('./modules/certifications/Certifications').then((m) => ({ default: m.Certifications })),
);
const ProjectsPage = lazy(() =>
  import('./modules/projects/Projects').then((m) => ({ default: m.ProjectsPage })),
);
const Contact = lazy(() =>
  import('./modules/contact/Contact').then((m) => ({ default: m.Contact })),
);

const SectionFallback = () => (
  <div style={{ minHeight: '40vh' }} aria-hidden="true" />
);

interface AppProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function App({ mode, toggleTheme }: AppProps) {
  return (
    <Layout mode={mode} toggleTheme={toggleTheme}>
      <HomePage />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Experience />
        <Education />
        <Certifications />
        <ProjectsPage />
        <Contact />
      </Suspense>
    </Layout>
  );
}
