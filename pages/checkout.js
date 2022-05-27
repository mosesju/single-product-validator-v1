// import logo from './logo.svg';
import styles from '../public/styles/Checkout.module.css'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Script from 'next/script'

import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { supabase } from '../lib/supbaseClient';

import RefCodeButton from './components/RefCodeButton'
import { RWebShare } from "react-web-share";
import { supabaseClient } from '../lib/supbaseClient'
import CheckoutFormUser from './components/CheckoutForm/CheckoutFormUser'
import { getQueryParams } from '../utils/getQueryParams'
// import getQueryParams from '../utils/getQueryParams'



function CheckoutPage() {
    
    const [refMessage, setRefMessage] = useState('Cookies on Crack - ');
    const [refCode, setRefCode] = useState('00001');

    const [refLink, setRefLink] = useState('');

    const router = useRouter();

    // const supaBaseClient = subabase();

    
    useEffect(()=>{
        const refNum = makeid(5);
        setRefCode(refNum)
        const message = "Send this code to Buy one Get one"
        const messageString = message.concat(' - ', refNum)
        // console.log(typeof(messageString))
        setRefMessage(messageString)
    }, [])

    useEffect(()=>{
        if(router.isReady) {
            // why can't I do this in the getQueryParams function
            const query = router.query
            console.log(query)
        }
    }, [router.isReady])

    function makeid(length) {
        var result           = '';
        var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const CookiesLogo = 'https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/CookiesOnCrackLogo.png'


  return (
    <div className={styles.container}>
        <Head>
            <title>Cookies on Crack</title>
            <meta name="description" content="Warm hot cookies delivered in Berlin" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>

        </Head>
        
        
        <main className={styles.main}>
            <div className='container'>
                {/* <CheckoutForm /> */}
                {/* <getQueryParams /> */}
                <CheckoutFormUser />
            </div>
        </main>    
    </div>
  );
}

export default CheckoutPage; 