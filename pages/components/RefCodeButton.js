import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RWebShare } from "react-web-share";

import styles from '../../public/styles/OutOfStock.module.css'



export default function RefCodeButton() {
    // const [refCode, setRefCode] = useState('00000');

    // useEffect(() =>{
    //     setRefCode('00001')
    //     // var result           = '';
    //     // var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    //     // var charactersLength = characters.length;
    //     // for ( var i = 0; i < length; i++ ) {
    //     //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //     // }
    //     // console.log(result)
    //     // setRefCode(result);
    // },[])

    return (
        <div>
            <RWebShare
                data={{
                    text: 'Finger Lickin\' Addicitn\'. One of your friends is trying to get you hooked... fuck it, give in.',
                    url: "https://cookiesoncrack.com/checkout?refCode=zbg02",
                    title: "Cookies on Crack",
                }}
                // onClick={() => console.log("shared successfully!")}
            >
                <button className='btn btn-outline-primary btn-block btn-lg' id="share-button">Share this for a Buy One Get One Offer</button>
            </RWebShare>
        </div>
    )
}
