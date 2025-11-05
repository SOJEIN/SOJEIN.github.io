import { ThemeProvider, CssBaseline } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { darkTheme, theme as lightTheme } from './theme/theme';

type Mode = 'light' | 'dark';

function Root() {
  const [mode, setMode] = useState<Mode>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);
  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App mode={mode} toggleTheme={toggleTheme} />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
