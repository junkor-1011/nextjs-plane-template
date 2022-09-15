import '../styles/globals.css';
// import type { AppProps } from 'next/app';

import type { AppPropsWithLayout } from '@/lib/next/types';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
