import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

type Mode = 'light' | 'dark';

function Root() {
  const [mode, setMode] = useState<Mode>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', mode);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <React.StrictMode>
      <App mode={mode} toggleTheme={toggleTheme} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
