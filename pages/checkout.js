// import logo from './logo.svg';
import styles from '../public/styles/Checkout.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { createClient } from '@supabase/supabase-js'
import { Router } from 'next/router';

import RefCodeButton from './components/RefCodeButton'
import { RWebShare } from "react-web-share";



function CheckoutPage() {
    
    const [refMessage, setRefMessage] = useState('Cookies on Crack - ');
    const [refCode, setRefCode] = useState('00001');

    const [refLink, setRefLink] = useState('');

    const router = useRouter();
    const supabaseUrl = 'https://fvgexbvyzbrwwvywxfpq.supabase.co'
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
    

    const { register, handleSubmit } = useForm();
    const onSubmit = async (formData) => {
        const supabaseClient = createClient(supabaseUrl, supabaseKey)

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
                // state: formData.state,
                // country: formData.country,
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

    useEffect(()=>{
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
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>

        </Head>
        <main className={styles.main}>
            <form className="needs-validation" onSubmit={ handleSubmit(onSubmit) }>
                <div className="row">    
                    <div className="col-md-7">
                        <h4 className="mb-3">Delivery Information</h4>
                        
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
                                    {...register("email", { required: true, maxLength: 20, // pattern: 
                                        // {
                                        //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        //     message: "invalid email address"
                                        // } 
                                    })} 
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
                                {/* <div className="col-md-4 mb-3">
                                    <label htmlFor="state">State</label>
                                    <input type="text" className="form-control" id="state" {...register("state", { required: true, maxLength: 20 })} />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" className="form-control" id="country"  {...register("country", { required: true, maxLength: 20 })} />

                                </div> */}
                            </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <div style={{width: '100%', height: '100%', position: 'relative'}}>
                                    <Image src={CookiesLogo} layout='fill'/>
                                </div>
                                <h4 className="card-title">Cookie Crisps</h4>
                                <h6>&euro;20 for 12 cookies</h6>
                                <p className="card-text">Product Description</p>
                                <select className="form-select d-block w-100" id="country" {...register("quantity")}>
                                    <option value="3">3 Delicious Cookies (&euro;7)</option>
                                    <option value="6">6 Warm Cookies (&euro;12)</option>
                                    <option value="12">12 Gooey Cookies (&euro;20)</option>
                                    <option value="18">18 Scrumptious Cookies (&euro;30)</option>
                                    <option value="24">24 Rock you Socks off Cookies (&euro;36)</option>
                                </select> 
                                <select className="form-select d-block w-100" id="country" {...register("item")}>
                                    <option value="ChocolateChip">Chocolate Chip</option>
                                    <option value="OatmealRaisin">Oatmeal Raisin</option>
                                    <option value="SnickerDoodle">Snicker Doodle</option>
                                    <option value="Variety">Variety</option>
                                </select>
                                <label htmlFor="state">Enter your Referral Code <strong>(Both of you get free cookies)</strong></label>
                                <input type="text" className="form-control" {...register("discountCode")} />
                                <div>
                                    {/* <strong>Share this code with your friends!</strong> */}
                                    {/* <h5 >
                                        Your Referral Code <strong className={`${styles.gradientText}`}>{ makeid(5) }</strong> Share with friends and earn free cookies!
                                    </h5> */}
                                    {/* <RefCodeButton /> */}
                                    <div>
                                        <RefCodeButton />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <input className="btn btn-primary btn-lg btn-block" type="submit" value="Continue to checkout"/>
                
                </div>
            </form>
        </main>    
    </div>
  );
}

export default CheckoutPage; 