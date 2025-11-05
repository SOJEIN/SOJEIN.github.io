import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Header from './Header';

interface LayoutProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Layout({ mode, toggleTheme }: LayoutProps) {
  return (
    <div className="layout" data-theme={mode}>
      {/* Pasamos mode y toggleTheme al Header */}
      <Header mode={mode} toggleTheme={toggleTheme} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
