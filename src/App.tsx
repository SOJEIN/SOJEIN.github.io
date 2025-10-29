import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './modules/home/HomePage';
import Layout from './shared/components/layout/Layout';
import { About } from './modules/about/About';
import { ProjectsPage } from './modules/projects/Projects';
import { Contact } from './modules/contact/Contact';

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
