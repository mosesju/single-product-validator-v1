import Head from 'next/head'
import Image from 'next/image'
import styles from '../public/styles/Home.module.css'
import Link from 'next/link'
import Script from 'next/script'

import { useForm } from "react-hook-form";
import { createClient } from '@supabase/supabase-js'
import { Router } from 'next/router';
import { useRouter } from 'next/router'

// Local shit
import coloredBackground from '../public/assets/images/colored-background.png'
import RefCodeButton from './components/RefCodeButton'
import Carousel from './components/Carousel'
import EmailSubmit from './components/EmailSubmit'
import CheckoutButton from './components/CheckoutButton'
import NavBar from './components/Navbar/NavBar'
import MenuTitle from './components/Menu/MenuTitle'
import MenuItem from './components/Menu/MenuItem'
import IGFollow from './components/IGFollow'


export default function Home() {


    const router = useRouter();
    const supabaseUrl = 'https://fvgexbvyzbRWebwvywxfpq.supabase.co'
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

    
    

    const { register, handleSubmit } = useForm();

    const onSubmit = async (formData) => {
        const supabaseClient = createClient(supabaseUrl, supabaseKey)
        console.log(supabaseClient);


        const { data, error } = await supabaseClient
        .from('Product Test')
        .insert([
            {
                email: formData.email,
            },
        ])

        router.push(`/out-of-stock`)

    }
    return (
        <div className={styles.container}>
        <Head>
        <title>Cookies on Crack</title>
            <meta name="description" content="Warm hot cookies delivered in Berlin" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bebas+Neue"></link>
        </Head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
        <NavBar />
        <main className={styles.main}>
        <section className="section-content padding-y bg">
            <div className="container">

            <article className="card">
                <div className="card-body">
                    <div className="row">
                        <main className="col-md-6">
                            <Carousel />
                        </main>
                        <aside className="col-md-6">
                            <div className='d-flex justify-content-center'>
                                <h1 className={`title ${styles.gradientText} BebasNeue`}>Finger Lickin&apos; Addictin&apos;</h1>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <h2 className={`${styles.gradientText}`}>Try quittin&apos; you crackhead</h2>
                            </div>
                            {/* <div className='d-flex justify-content-center'>
                                <CheckoutButton />
                            </div> */}
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <MenuTitle title='Menu'/>
                                    <MenuItem item='Freebase Strawberry Cheesecake Cookie' />
                                    <MenuItem item='Berghain Backroom Snickerdoodle' />
                                    <MenuItem item='Relapse Raisin Cookie' />
                                    <MenuItem item='Comedown Caramel Cookie' />
                                    <MenuItem item='Crackhead Chocolate Chip' />
                                    <MenuItem item='Box of Surprises' />
                                </div>  
                                
                            </div>
                        </aside>
                    </div> 
                </div> 
            </article>
            <IGFollow />
            <article className="card mt-5">
                <div className="card-body">
                    <div className="row">
                    <p className='lead'>
                        Somewhere deep in the Peruvian Rainforest, our farmers harvest the ingredients we need for your Cookies on Crack. Next our smugglers prepare our almost reliable smuggling routes across South America, the Atlantic and Europe to deliver the cookies. Then our plugs get them to you in Berlin. Hidden in between containers and cheeks we get them to you fresh and warm.  Enjoy your Cookies... and the rest of your night out or the end of your night.
                    </p> 
                    </div> 
                </div> 
            </article>
            
            </div> 
        </section>
        </main>

        <footer className="section-footer border-top padding-y">
            <div className="container d-flex justify-content-center">
            <p>
                <Link href="/terms-conditions">
                    Terms and conditions
                </Link>
            </p>
            </div>
            <div className="container d-flex justify-content-center">
                <p className="float-md-right"> 
                &copy; Copyright 2022 All rights reserved
            </p>
            </div>
        
        </footer>


        </div>
    )
}
