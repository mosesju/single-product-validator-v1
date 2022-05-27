import Image from "next/image"
import Link from "next/link"

export default function IGFollow() {
    const ig = 'https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/instagram.png?t=2022-05-27T09%3A52%3A33.924Z'
    const igLink = 'https://www.instagram.com/cookiesoncrack_pop_up/'
    // const myLoader = ({ src, width, quality }) => {
    //     return `https://fvgexbvyzbrwwvywxfpq.supabase.co/storage/v1/object/public/product-test-public/cookie-test/instagram.png?t=2022-05-27T09%3A52%3A33.924Z`
    //   }
    return(
            <Link href={ igLink }>
                <div className="row">
                    <div className="col-md-1">
                        <Image
                            // loader={ myLoader }
                            src={ ig } 
                            alt="IG Follow"
                            width = { 200 }
                            height= { 200 } 
                            layout="intrinsic"
                        />
                    </div>
                    <div className="col-md-4">
                        <h3>Check out our Instagram!</h3> 
                    </div>       
                </div>
            </Link>
        
    )
}