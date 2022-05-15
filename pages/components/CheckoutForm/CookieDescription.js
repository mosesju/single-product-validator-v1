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
        console.log(queryData)
        if(queryData == 'Relapse Raisin Cookie'){
            setCookieName('Relapse Raisin Cookie')
            setCookieDescription('Relapse raisin description')
            setCookieImage('https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/logo_final.jpg')
        } else if(queryData =='Freebase Strawberry Cheesecake Cookie') {
            setCookieName('Freebase Strawberry Cheesecake Cookie')
            setCookieDescription('Freebase description')
            setCookieImage('https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/logo_final.jpg')

        } else if (queryData == 'Berghain Backroom Snickerdoodle'){
            setCookieName('Berghain Backroom Snickerdoodle')
            setCookieDescription('Berghain description')
            setCookieImage('https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/logo_final.jpg')

        } else if (queryData == 'Crackhead Chocolate Chip'){
            setCookieName('Crackhead Chocolate Chip')
            setCookieDescription('Crackhead description')
            setCookieImage('https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/logo_final.jpg')

        } else if (queryData =='Comedown Caramel Cookie'){
            setCookieName('Comedown Caramel Cookie')
            setCookieDescription('Comedown description')
            setCookieImage('https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/logo_final.jpg')

        } else if (queryData =='Box of Surprises'){
            setCookieName('Box description')
            setCookieDescription('Variety description')
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