import { Theme, SxProps } from '@mui/material/styles';

export const headerStyle: Record<string, SxProps<Theme>> = {
  appBar: {
    backgroundColor: '#0d1117',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 4)',
  },

  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  linkButton: {
    color: '#ffffff',
    textTransform: 'none',
    '&.active': {
      borderBottom: '2px solid #00bcd4',
    },
    '& :hover': {
      color: '#00bcd4',
      transition: '0.3s',
    },
  },
};
