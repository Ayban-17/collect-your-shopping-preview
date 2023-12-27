import { Head, Html, Main, NextScript } from 'next/document'
import Script from "next/script";
export default function Document() {
  return (
    <Html className="h-full bg-gray-50 antialiased" lang="en">
      <Head>
            <script>tolstoyAppKey="7b783d6d-29f2-49e9-a1b2-0feb04a3315c"</script>
            <script src="https://widget.gotolstoy.com/widget/widget.js" defer></script>
      </Head>
      <body className="flex h-screen flex-col">
        <Main />
        <NextScript />
        <Script
          src="https://widget.gotolstoy.com/widget/widget.js"
          onError={() => setHasError(true)}
          onReady={() => setIsReady(true)}
        />
      </body>
    </Html>
  )
}
