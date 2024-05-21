import * as React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react"

import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '@tech/theme/createEmotionCache';
import { SnackbarProvider } from '@tech/components/snackbar/context';
import { useTheme } from '@tech/hooks/use-theme';
import { darkTheme, lightTheme } from '@tech/theme';


const MuiPickersUtilsProvider = dynamic(() =>
  import('@tech/providers/muiPickersUltils.provider').then(
    (m) => m.MuiPickersUtilsProvider
  )
);

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props;

  const getLayout = Component.getLayout || ((page) => page);

  const { themeMode } = useTheme();
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider>
            <CssBaseline />
            <SnackbarProvider>
              {getLayout(<Component {...pageProps} />)}
            </SnackbarProvider>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type MyAppProps = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};
