import Image from 'next/image'

import styles from '../../public/styles/Home.module.css'

export default function Carousel() {
    const CookiesLogo = 'https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/CookiesOnCrackLogo.png'
    const ChocoChip = 'https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/cc_final.jpg'
    const StrawberryCheesecake = 'https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/strawberry_final.jpg'
    return (
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                    {/* <img className="d-block w-100" src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="You before Cookies on Crack" /> */}
                    <Image 
                        src={ StrawberryCheesecake } 
                        alt="You after Cookies on Crack"
                        
                        width = { 1470 }
                        height= { 980 } 
                        layout="responsive"
                    />
                    <div className="container">
                        <div className="carousel-caption text-start">
                        {/* <h1 >You before Cookies on Crack &#128545;&#128520;</h1> */}

                            {/* <div className='d-flex justify-content-center'>
                                <h1 className={`${styles.gradientText}`}>You before Cookies on Crack</h1>
                                <h1> </h1>
                                <h1></h1>
                            </div> */}
                            {/* <p >Hungry, angry, not having it</p> */}
                            {/* <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p> */}
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                    <div className="d-block w-100">
                        <Image 
                            src={ ChocoChip } 
                            alt="You after Cookies on Crack"

                            width = { 1470 }
                            height= { 980 } 
                            layout="responsive"
                        />
                    

                        {/* <img className="bd-placeholder-img"/> */}
                        <div className="container">
                        <div className="carousel-caption">
                            {/* <h1 >You after Cookies on Crack &#128525;&#128526;</h1>
                            <p >Feeling Goooooood</p> */}
                            {/* <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p> */}
                        </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item active">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                    <Image 
                        src={ CookiesLogo } 
                        width = { 1470 }
                        height= { 980 } 
                        layout="responsive"
                    />
                    <div className="container">
                    <div className="carousel-caption text-end">
                        {/* <h1>One more for good measure.</h1>
                        <p>Some representative placeholder content for the third slide of this carousel.</p> */}
                        {/* <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p> */}
                    </div>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}