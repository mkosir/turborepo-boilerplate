import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from 'config-mui';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createEmotionCache } from 'utils-mui';

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Turborepo Boilerplate - App</title>
        <meta name="description" content="Turborepo boilerplate." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ textAlign: 'center', margin: '15px 0 30px' }}>
            <div style={{ fontSize: '22px', fontWeight: 'bold' }}>Turborepo Boilerplate - App</div>
          </div>
          {<Component {...pageProps} />}
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default App;
