'use client'

import { useEffect } from 'react'

export default function PlausibleProvider() {
  useEffect(() => {
    // Dynamic import to avoid SSR issues
    import('@plausible-analytics/tracker').then(({ init }) => {
      init({
        domain: 'whatnextstudio.com', 
        endpoint: 'https://plausible.io/api/event',
        autoCapturePageviews: true, // Automatically track page views
        hashBasedRouting: false,
        captureOnLocalhost: false, // Set to true to test locally
        logging: true, // See logs in console
        bindToWindow: true // For Plausible verification tool
      })
    })
  }, [])

  return null
}