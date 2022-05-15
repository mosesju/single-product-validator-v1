import { supabaseClient } from '../../../lib/supbaseClient'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import Image from 'next/image'
// Change this
import styles from '../../../public/styles/Home.module.css'
import { useState, useEffect } from 'react';

import CookieSelect from './CookieSelect';
import RefCodeButton from '../RefCodeButton';
import CookieDescription from './CookieDescription';



export default function CheckoutForm( { title } ) {
    const router = useRouter();
    const [queryParams, setQueryParams] = useState(false);
    const [cookieName, setCookieName] = useState('');
    const { register, handleSubmit } = useForm();
    // This checks the query params and sets the state to true if there is an item
    const checkQueryParams = () => {
        const query = router.query;
        if(query.item) {
            setQueryParams(true);
        } else {
            setQueryParams(false);
        }
    }
    const getQueryParams = () => {
        const query = router.query;
        if(query.item) {
            setCookieName(query.item)
            console.log(cookieName)
        }
        else {
            setCookieName('')
        }
    }
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
    useEffect(() => {
        checkQueryParams();
        getQueryParams();
    },[])

    return (
        <div>
            <form className="needs-validation" onSubmit={ handleSubmit(onSubmit) }>
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
                            
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <div style={{width: '100%', height: '100%', position: 'relative'}}>
                                    {/* <Image src={CookiesLogo} layout='fill'/> */}
                                </div>
                                <CookieDescription query={cookieName}/>
                                {queryParams ? null : <CookieSelect register={register}/>}
                                <div className={styles.selectorSpacing}>
                                    <select className="form-select d-block w-100" id="country" {...register("quantity")}>
                                        <option value="12">The Ounce (&euro;20 for 12 cookies)</option>
                                        <option value="3">The 8 Ball  (&euro;7 for 3 cookies)</option>
                                        <option value="6">The Quarter (&euro;12 for 6 cookies)</option>
                                        <option value="18">The Plug (&euro;30 for 18 cookies)</option>
                                        <option value="24">The Brick (&euro;36 for 24 cookies)</option>
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
                <div className={styles.buttonSpacing}>
                            <div className='d-flex justify-content-center'>
                                <input className="btn btn-primary btn-lg " type="submit" value="Continue to checkout"/>
                            </div>
                        </div>
            </form>
        </div>
    )
}