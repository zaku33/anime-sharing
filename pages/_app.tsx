import '@/styles/globals.css'
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'next-themes';
import DefaultLayout from 'layout/default';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default MyApp;
