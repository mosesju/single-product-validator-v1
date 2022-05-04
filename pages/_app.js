import '../public/styles/globals.css'
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return(

    <>
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
       </Script> */}
      {/* <Script async src={gTagUrl}></Script> 
      <Script id='google-analytics' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
        
      </Script> */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
                    `}
      </Script>
      <Component {...pageProps} />
    </>
  )
  
  
}

export default MyApp
