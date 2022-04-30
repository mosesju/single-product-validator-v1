import '../public/styles/globals.css'
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  const gTagUrl = "https://www.googletagmanager.com/gtag/js?id="
  gTagUrl.concat(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
  return(

    <>
      <Script
        src={ gTagUrl }
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
       </Script>
      {/* <Script async src={gTagUrl}></Script> 
      <Script id='google-analytics' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
        
      </Script> */}
      <Component {...pageProps} />
    </>
  )
  
  
}

export default MyApp
