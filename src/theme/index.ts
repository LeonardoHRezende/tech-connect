import { Roboto_Mono } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/x-date-pickers/locales';

export const fontTheme = Roboto_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Roboto', 'Arial', 'sans-serif'],
});

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#14AE5C',
        light: '#00DC84',
        contrastText: '#EEFFF6',
      },
      secondary: {
        main: '#0A1B23',
        contrastText: '#EEFFF6',
      },
      error: {
        dark: '#DE2E2E',
        main: '#F26344',
        light: '#FAE1DD',
      },
      success: {
        main: '#14AE5C',
        light: '#DCF3E7',
      },
      warning: {
        main: '#EFAD33',
        light: '#FAF5DD',
      },
      info: {
        main: '#0057FF',
        light: '#DDF1FA',
      },
      text: {
        secondary: '#646464',
      },

    },
    typography: {
      fontFamily: fontTheme.style.fontFamily,
      fontSize: 14,
      h1: {
        fontSize: '2.285rem',
        lineHeight: '2.975rem',
      },
      h2: {
        fontSize: '1.714rem',
        lineHeight: '2.214rem',
      },
      h3: {
        fontSize: '1.5rem',
        lineHeight: '1.914rem',
      },
      h4: {
        fontSize: '1.25rem',
        lineHeight: '1.625rem',
      },
      h5: {
        fontSize: '1.142rem',
        lineHeight: '1.714rem',
      },
      body2: {
        fontSize: '0.875rem',
      },
      overline: {
        fontSize: '0.8rem',
        lineHeight: '1',
      },
      caption: {
        fontSize: '0.75rem',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            '& ::-webkit-scrollbar': {
              width: 9,
              backgroundColor: '#2d3d431A',
            },
            '& ::-webkit-scrollbar-track': {
              width: 9,
              backgroundColor: '#2d3d431A',
            },
            '& ::-webkit-scrollbar-thumb': {
              backgroundColor: '#2D3D43E0',
              borderRadius: 4,
            },
            '& ::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#2d3d43',
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            lineHeight: '0.85rem',
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: '#0A1B23',
            color: '#EEFFF6',
            fontSize: '0.9rem',
            padding: '8px 16px',
            borderRadius: 8,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            lineHeight: 1.3,
            boxShadow: 'none',
            borderRadius: 4,
            padding: '10px 16px',
            ':hover': {
              boxShadow: 'none',
            },
            textTransform: 'none',
          },
          sizeLarge: {
            padding: '16px 32px',
            borderRadius: 8,
          },
          sizeSmall: {
            padding: '8px 16px',
          },
          containedInherit: {
            fontWeight: 300,
          },
          outlinedSecondary: {
            fontWeight: 500,
          },
          containedSecondary: {
            backgroundColor: '#E8E8E8',
            color: '#2D3D43',
            ':hover': {
              backgroundColor: '#B0B0B0',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: 'none',
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: '24px 16px',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          sizeSmall: {
            fontSize: '0.75rem',
          },
          root: { borderRadius: 8, height: 24 },
          label: {
            padding: '0 16px',
          },
          colorError: {
            color: '#DB3A1A',
            backgroundColor: '#FAE1DD',
          },
          colorInfo: {
            color: '#2D3D43',
            backgroundColor: '#DCEFF6',
          },
          colorPrimary: {
            color: '#14AE5C',
            backgroundColor: '#DCF3E7',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: '0.8rem',
            color: '#757575',
            fontWeight: 700,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontWeight: 400,
            color: '#000000de',
            fontSize: '0.8rem',
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            padding: '32px 32px 24px',
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: '24px 32px',
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: '32px',
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            height: 8,
            borderRadius: 4,
          },
          colorPrimary: {
            backgroundColor: '#E3E3E3',
          },
        },
      },
    },
  },
  ptBR
);

export default theme;
