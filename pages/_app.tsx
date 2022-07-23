import '@/styles/global.css';
import '@/styles/global.scss';
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
