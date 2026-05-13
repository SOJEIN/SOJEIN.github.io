import React from 'react';

import { About } from './modules/about/About';
import { Contact } from './modules/contact/Contact';
import { Education } from './modules/education/Education';
import { Experience } from './modules/experience/Experience';
import { HomePage } from './modules/home/HomePage';
import { ProjectsPage } from './modules/projects/Projects';
import Layout from './shared/components/layout/Layout';

interface AppProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function App({ mode, toggleTheme }: AppProps) {
  return (
    <Layout mode={mode} toggleTheme={toggleTheme}>
      <HomePage />
      <About />
      <Experience />
      <Education />
      <ProjectsPage />
      <Contact />
    </Layout>
  );
}
