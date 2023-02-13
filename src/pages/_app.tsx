import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/templates/Layout/Layout';
import { wrapper } from '../redux/rootReducer';

declare global {
  interface Window {
    kakao: any;
  }
}

// const store = configureStore()

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(App);