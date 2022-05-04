import '../public/styles/globals.css'
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return(

    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-QQSKJ4XVVX"></Script>
      <Script id="google-analytics" strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
  
          gtag('config', 'G-QQSKJ4XVVX');
        `}
        
      </Script>
      <Component {...pageProps} />
    </>
  )
  
  
}

export default MyApp
