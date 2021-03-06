import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { RWebShare } from "react-web-share";

import styles from '../public/styles/OutOfStock.module.css'
import RefCodeButton from './components/RefCodeButton';

function OutOfStock() {
    const router = useRouter()
    const {item, quantity, refCode} = router.query
    const [refMessage, setRefMessage] = useState('');

    useEffect(()=>{
        const message = "Share this code to Buy one Get one"
        const messageString = message.concat(' - ', refCode)
        setRefMessage(messageString)
    },[])
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
                <div className='d-flex justify-content-center'>
                    <div className='col-md-8'>
                        <h1 className='gradientText'>We got your Order of {quantity} {item} Cookies</h1>
                        <h2 >We will begin Delivery at 7am and 7pm through May 3.</h2>
                        <h3 className="alert alert-danger" role="alert">Pay with Cash on Delivery</h3>
                        {/* <h2>Sorry! We're updating our content</h2> */}
                        <p className="lead">We will call when we your Cookies are ready</p>
                        <p className='lead'>
                        Somewhere deep in the Peruvian Rainforest, our farmers harvest the ingredients we need for your Cookies on Crack. Next our smugglers prepare our almost reliable smuggling routes across South America, the Atlantic and Europe to deliver the cookies. Then our plugs get them to you in Berlin. Hidden in between containers and cheeks we get them to you fresh and warm.  Enjoy your Cookies... and the rest of your night out or the end of your night.

                        </p>
                        <div>
                        <RefCodeButton />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default OutOfStock;