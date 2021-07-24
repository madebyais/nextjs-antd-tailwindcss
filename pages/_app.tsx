import '../styles/style.css'
import type { AppProps } from 'next/app'
import { NextRouter, useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import * as GoogleAnalytics from 'util/google-analytics'

function App({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter()

  useEffect(() => {
    const routerEventsChange = () => router.events.on('routeChangeComplete', GoogleAnalytics.pageview)

    routerEventsChange()
    return () => {
      routerEventsChange()
    }
  }, [router.events])

  return <Component {...pageProps} />
}
export default App
