import { AppProps } from 'next/app'
import '../styles/index.css'
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
  <GoogleAnalytics trackPageViews />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
