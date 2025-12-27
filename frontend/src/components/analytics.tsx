// src/components/analytics.tsx
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('config', 'G-VGX9J1PKW1', { page_path: pathname })
    }
  }, [pathname])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-VGX9J1PKW1"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VGX9J1PKW1');
          `,
        }}
      />
    </>
  )
}