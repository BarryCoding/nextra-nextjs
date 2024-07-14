import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      {/* 此次集中处理 SEO */}
      <Head>
        <meta name='msapplication-TileColor' content='#fff' />
        <meta name='theme-color' content='#fff' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta name='description' content='Make beautiful websites with Next.js & MDX.' />
        <meta name='og:description' content='Make beautiful websites with Next.js & MDX.' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content='https://nextra.site/og.jpeg' />
        <meta name='twitter:site:domain' content='nextra.site' />
        <meta name='twitter:url' content='https://nextra.site' />
        <meta name='og:title' content='Nextra' />
        <meta name='og:image' content='https://nextra.site/og.jpeg' />
        <meta name='apple-mobile-web-app-title' content='Nextra' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='icon' href='/favicon.png' type='image/png' />
        <link rel='icon' href='/favicon-dark.svg' type='image/svg+xml' media='(prefers-color-scheme: dark)' />
        <link rel='icon' href='/favicon-dark.png' type='image/png' media='(prefers-color-scheme: dark)' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
