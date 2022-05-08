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
import CheckoutForm from './components/CheckoutForm/CheckoutForm'
import getQueryParams from '../utils/getQueryParams'



function CheckoutPage() {
    
    const [refMessage, setRefMessage] = useState('Cookies on Crack - ');
    const [refCode, setRefCode] = useState('00001');

    const [refLink, setRefLink] = useState('');

    const router = useRouter();

    // const supaBaseClient = subabase();

    const { register, handleSubmit } = useForm();
    const onSubmit = async (formData) => {
        

        const { data, error } = await supabaseClient
        .from('Product Test')
        .insert([
            {
                item: formData.product, 
                price: formData.price,
                quantity: formData.quantity,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                address: formData.address,
                city: formData.city,
                notes: formData.notes,
                discountCode: formData.discountCode,
                refCode: refCode,
                item: formData.item
            },
        ])

        router.push({
            pathname: '/out-of-stock', 
            query: {
                item: formData.product,
                quantity: formData.quantity,
                refCode: refCode
            }
        })

    }
    // const getQueryParams = (formData) => {
    //     const router = useRouter()
    //     console.log(router.query)
    // }

    useEffect(()=>{
        {getQueryParams()}
        const refNum = makeid(5);
        setRefCode(refNum)
        const message = "Send this code to Buy one Get one"
        const messageString = message.concat(' - ', refNum)
        // console.log(typeof(messageString))
        setRefMessage(messageString)
    }, [])

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
        
        <main className={styles.main}>
            <div className='container'>
                {/* <CheckoutForm /> */}
                <getQueryParams />
                if item false, then render the component with cookie selection. Else render the other one
                {/* <form className="needs-validation" onSubmit={ handleSubmit(onSubmit) }>
                    <CheckoutForm />
                    <div className="row">    
                        <div className="col-md-7">
                            <h4 className={`mb-3 ${styles.gradientText}`}>Delivery Information</h4>
                            
                                <div className="row">
                                    <div className="col-md-6 mb-3 ">
                                    
                                        <label htmlFor="firstName">First name</label>
                                        <input {...register("firstName", { required: true, maxLength: 20 })} className="form-control"/>

                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="lastName">Last name</label>
                                        <input {...register("lastName", { required: true, maxLength: 20 })} className="form-control" />
                                        
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        {...register("email", { required: true, maxLength: 40})} 
                                        className="form-control"
                                        placeholder="you@example.com"
                                    />
                                    
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address">Address</label>
                                    <input className="form-control" id="address" placeholder="Hauptstrasse 12"  {...register("address", { required: true, maxLength: 30 })}/>
                                    
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" placeholder="Apartment or suite" />
                                </div>

                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="state">City</label>
                                        <input type="text" className="form-control" id="city" placeholder="" required="" {...register("city", { required: true, maxLength: 20 })}/>
                                    </div>
                                    
                                </div>
                                <div >
                                    <label htmlFor="notes">Notes</label>
                                    <input type="text" className="form-control" id="notes" placeholder="" required="" {...register("notes", { required: false})}/>
                                </div>
                                <div className={styles.buttonSpacing}>
                                    <div className='d-flex justify-content-center'>
                                        <input className="btn btn-primary btn-lg " type="submit" value="Continue to checkout"/>
                                    </div>
                                </div>
                                
                        </div>
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-body">
                                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                                        <Image src={CookiesLogo} layout='fill'/>
                                    </div>
                                    <h4 className="card-title">Cookies on Crack</h4>
                                    <h6>&euro;20 for 12 cookies</h6>
                                    <p className="lead">
                                        Do you like cookies? Do you like crack? Then we got the perfect blend of both for you! Try out our different creations guaranteed to satisfy that itch. Soft and fresh we have something to fulfill every need of yours. Get them before we sell out… 
                                    </p>
                                    <div className={styles.selectorSpacing}>
                                        <select className="form-select d-block w-100" id="country" {...register("quantity")}>
                                            <option value="12">The Ounce (&euro;20 for 20 cookies)</option>
                                            <option value="3">The 8 Ball  (&euro;7 for 3 cookies)</option>
                                            <option value="6">The Quarter (&euro;12 for 6 cookies)</option>
                                            <option value="18">The Plug (&euro;30 for 18 cookies)</option>
                                            <option value="24">The Brick (&euro;36 for 24 cookies)</option>
                                        </select> 
                                    </div>
                                    <div className={styles.selectorSpacing}>
                                        <select className="form-select d-block w-100" id="country" {...register("item")}>
                                            <option value="Strawberry Cheesecake">Freebase Strawberry Cheesecake Cookie</option>
                                            <option value="Oatmeal Raisin">Berghain Backroom Snickerdoodle</option>
                                            <option value="Snicker Doodle">Relapse Raisin Cookie</option>
                                            <option value="Caramel">Comedown Caramel Cookie</option>
                                            <option value="Chocolate Chip">Crackhead Chocolate Chip</option>
                                            <option value="Surprise Me">Surprise Me! Variety Pack</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="state">Use a Referral code to Buy One Get One</label>
                                        <input type="text" className="form-control" {...register("discountCode")} />
                                        <div className={styles.buttonSpacing}>
                                            <RefCodeButton />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                       
                    
                    </div>
                </form> */}
            </div>
        </main>    
    </div>
  );
}

export default CheckoutPage; 