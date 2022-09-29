import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import { getVersionInfo } from 'common/version/getVersionInfo';
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
        <meta name="version" content={getVersionInfo()} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box textAlign="center" mt={3} mb={5}>
            <Typography variant="title1">Turborepo Boilerplate - App</Typography>
            <Typography
              variant="caption"
              ml={0.5}
              sx={{ fontSize: 11, fontStyle: 'italic', color: theme.palette.grey[500] }}
            >
              {getVersionInfo()}
            </Typography>
          </Box>
          {<Component {...pageProps} />}
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default App;
