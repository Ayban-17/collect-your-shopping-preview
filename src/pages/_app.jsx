import '@/styles/tailwind.css'
import 'focus-visible'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
  return <Component {...pageProps}  />
}

export default appWithTranslation(App)