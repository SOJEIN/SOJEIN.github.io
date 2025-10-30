import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { About } from './modules/about/About';
import { Contact } from './modules/contact/Contact';
import { HomePage } from './modules/home/HomePage';
import { ProjectsPage } from './modules/projects/Projects';
import Layout from './shared/components/layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
