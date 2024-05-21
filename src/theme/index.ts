import { Roboto_Mono } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/x-date-pickers/locales';

export const fontTheme = Roboto_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Roboto', 'Arial', 'sans-serif'],
});

export const lightTheme = createTheme(
  {
    palette: {
      mode: 'light',
      primary: {
        main: '#eefff6',
        light: '#eefff6',
        dark: '#0f1214',
        contrastText: '#0f1214',
      },
      secondary: {
        main: '#2D3D43',
        light: '#EEFFF6',
        dark: '#0f1214',
        contrastText: '#EEFFF6',
      },
      error: {
        dark: '#DE2E2E',
        main: '#F26344',
        light: '#FAE1DD',
        contrastText: '#EEFFF6',
      },
      success: {
        main: '#14AE5C',
        light: '#DCF3E7',
        dark: '#0b703a',
        contrastText: '#EEFFF6',
      },
      warning: {
        dark: '#DE9E2E',
        main: '#EFAD33',
        light: '#FAF5DD',
        contrastText: '#EEFFF6',
      },
      info: {
        dark: '#0A1B23',
        main: '#0057FF',
        light: '#DDF1FA',
        contrastText: '#EEFFF6',
      },
      text: {
        primary: '#EEFFF6',
        secondary: '#0f1214',
        disabled: '#757575',
      }
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
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#0f1214',
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: '#0f1214',
            backgroundColor: '#fff',
            border: '1px solid #2D3D4310',
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFFFFF',
            border: '1px solid #2D3D4310',
            '& .MuiTypography-root': {
              color: '#0f1214',
            },
          }
        }
      },
      MuiButtonBase:{
        styleOverrides:{
          root:{
            color: '#0f1214',
          }
        }
      }
    },
  },
  ptBR
);

export const darkTheme = createTheme(
  {
    palette: {
      mode: 'dark',
      primary: {
        main: '#121212',
        light: '#333333',
        dark: '#000000',
        contrastText: '#EEFFF6',
      },
      secondary: {
        main: '#1E1E1E',
        light: '#333333',
        dark: '#000000',
        contrastText: '#EEFFF6',
      },
      error: {
        dark: '#DE2E2E',
        main: '#F26344',
        light: '#FAE1DD',
        contrastText: '#EEFFF6',
      },
      success: {
        main: '#14AE5C',
        light: '#DCF3E7',
        dark: '#0b703a',
        contrastText: '#EEFFF6',
      },
      warning: {
        dark: '#DE9E2E',
        main: '#EFAD33',
        light: '#FAF5DD',
        contrastText: '#EEFFF6',
      },
      info: {
        dark: '#0A1B23',
        main: '#0057FF',
        light: '#DDF1FA',
        contrastText: '#EEFFF6',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#CCCCCC',
        disabled: '#757575',
      }
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
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#EEFFF6'
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: '#0f1214',
            backgroundColor: '#fff',
            border: '1px solid #2D3D43',
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFFFFF',
            border: '1px solid #2D3D43',
            '& .MuiTypography-root': {
              color: '#0f1214',
            },
          }
        }
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: '#0f1214 !important' ,
          }
        }
      }
    },
  },
  ptBR
);