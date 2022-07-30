import { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import { wrapper } from '../store/store';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/styles/global.scss';

import Layout from '@/components/Layout';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
