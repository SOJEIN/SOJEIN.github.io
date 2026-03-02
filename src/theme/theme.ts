// Theme tokens — consumed via CSS custom properties in index.css
// These are kept for reference and potential JS usage
export const themeTokens = {
  light: {
    bgPrimary: '#fafafa',
    bgSecondary: '#ffffff',
    textPrimary: '#0f0f0f',
    textSecondary: '#4b5563',
    accent: '#6366f1',
    accentSecondary: '#8b5cf6',
  },
  dark: {
    bgPrimary: '#0a0a14',
    bgSecondary: '#111120',
    textPrimary: 'rgba(255, 255, 255, 0.9)',
    textSecondary: 'rgba(255, 255, 255, 0.5)',
    accent: '#6366f1',
    accentSecondary: '#8b5cf6',
  },
} as const;
