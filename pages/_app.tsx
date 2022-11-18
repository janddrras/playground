import type { AppProps } from 'next/app'
import Layout from '../components/layouts/Layout'
import './globals.css'
// import './tw-globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
