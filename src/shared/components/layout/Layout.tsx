import React from 'react';

import { BackToTop } from '../BackToTop';
import Footer from '../Footer';
import Header from './Header';

interface LayoutProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
  children: React.ReactNode;
}

export default function Layout({ mode, toggleTheme, children }: LayoutProps) {
  return (
    <div className="layout" data-theme={mode}>
      <Header mode={mode} toggleTheme={toggleTheme} />
      <main className="main-content">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
