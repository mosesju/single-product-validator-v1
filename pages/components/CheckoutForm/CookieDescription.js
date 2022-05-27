import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../../../public/styles/Home.module.css'
import CookieOption from './CookieOption'

export default function CookieDescription({ query }) {
    const [queryData, setQueryData] = useState('')
    const [cookieName, setCookieName] = useState('');
    const [cookieDescription, setCookieDescription] = useState('');
    const [cookieImage, setCookieImage] = useState('https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/logo_final.jpg')
    const setPageText = () =>{
    // This function will take the cookie name, and determine which name + description to use
    // for the various cookies using a switch statement
        if(queryData == 'Relapse Raisin Cookie'){
            setCookieName('Relapse Raisin Cookie')
            setCookieDescription('Ever almost quit? Well, that won\'t last. Relapse with our raisin cookies')
            setCookieImage('https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/logo_final.jpg')
        } else if(queryData =='Freebase Strawberry Cheesecake Cookie') {
            setCookieName('Freebase Strawberry Cheesecake Cookie')
            setCookieDescription('Warning. Highly addictive and may be planted by CIA')
            setCookieImage('https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/strawberrycheesecakesandwich3.jpg')

        } else if (queryData == 'Berghain Backroom Snickerdoodle'){
            setCookieName('Berghain Backroom')
            setCookieDescription('Have a wild weekend? Get peed on? This cookie feels you. It\'s at Berghain every weekend.')
            setCookieImage('https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/nutellasandwich.jpg')

        } else if (queryData == 'Crackhead Chocolate Chip'){
            setCookieName('Crackhead Chocolate Chip')
            setCookieDescription('The cookie that started it all. Have one too many and wake up under a bridge.')
            setCookieImage('https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/whatsinthisccokie.jpg')

        } else if (queryData =='Comedown Caramel Cookie'){
            setCookieName('Comedown Caramel Cookie')
            setCookieDescription('When you\'re coming down after a wild weekend')
            setCookieImage('https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/logo_final.jpg')

        } else if (queryData =='Box of Surprises'){
            setCookieName('Box description')
            setCookieDescription('No preference? Just get the box')
            setCookieImage('https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/logo_final.jpg')

        } 
        else {
            setCookieName('Cookies on Crack')
            setCookieDescription('Do you like cookies? Do you like crack? Try out creations guaranteed to satisfy your itch. Get them before we sell out… ')
            setCookieImage('https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/logo_final.jpg')

        }
    }
    
    useEffect(()=>{
        setQueryData(query);
        setPageText()
    })
    return(
        <div>
            <h4 className={`card-title ${styles.gradientText}`}>{ cookieName }</h4>
            {/* <h6>&euro;20 for 12 cookies</h6> */}
            {/* Do I need to write a load function? */}
            <Image 
                src={ cookieImage } 
                width={ 1470 } 
                height={ 920 }
                layout="responsive"
                alt={ cookieName }
            />
            <p className="lead">
                { cookieDescription }
            </p>
        </div>
    )
}