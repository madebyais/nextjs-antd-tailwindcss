export const pageview = (url: string) => {
  if (process.env.GOOGLE_ANALYTICS_ENABLE) {
    // @ts-ignore
    window.gtag('config', process.env.GOOGLE_ANALYTICS_TRACKING_ID, {
      page_path: url
    })
  }
}

export const event = ({ action, params }: any) => {
  // @ts-ignore
  window.gtag('event', action, params)
}