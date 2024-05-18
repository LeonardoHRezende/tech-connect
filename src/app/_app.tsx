import * as React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import type { AppProps } from 'next/app';


import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@tech/theme';
import createEmotionCache from '@tech/theme/createEmotionCache';
import { SnackbarProvider } from '@tech/components/snackbar/context';

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

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider>
          <CssBaseline />
          <SnackbarProvider>
            {getLayout(<Component {...pageProps} />)}
          </SnackbarProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type MyAppProps = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};
