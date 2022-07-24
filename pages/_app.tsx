import { AppProps } from 'next/app';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { config } from '@fortawesome/fontawesome-svg-core';

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.scss';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
