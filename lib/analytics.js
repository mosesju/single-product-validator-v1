export const pageview = (url) => {
    if (window && window.gtag) {
        window.gtag('config',  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ) 
    }
}

export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}