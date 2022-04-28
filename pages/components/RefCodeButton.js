import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RWebShare } from "react-web-share";


export default function RefCodeButton() {
    const [refCode, setRefCode] = useState('00000');

    useEffect(() =>{
        setRefCode('00001')
        // var result           = '';
        // var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
        // var charactersLength = characters.length;
        // for ( var i = 0; i < length; i++ ) {
        //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
        // }
        // console.log(result)
        // setRefCode(result);
    },[])

    return (
        <div>
            <RWebShare
                data={{
                    text: "Cookies on Crack - Get your cookies delivered, tonight",
                    url: "http://localhost:3000/",
                    title: "Cookies on Crack",
                }}
                onClick={() => console.log("shared successfully!")}
            >
                {/* Share with your friends and get <strong>FREE COOKIES</strong> */}
                <button className='btn-primary btn-block btn-lg' id="share-button">{ refCode } </button>
            </RWebShare>
        </div>
    )
}
