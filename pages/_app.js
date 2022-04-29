import '../public/styles/globals.css'
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  const gTagUrl = "https://www.googletagmanager.com/gtag/js?id="
  gTagUrl.concat(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
  return(

    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script async src={gTagUrl}></Script>
      <Script id='google-analytics' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
        
      </Script>
      <Component {...pageProps} />
    </>
  )
  
  
}

export default MyApp
