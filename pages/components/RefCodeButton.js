import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RWebShare } from "react-web-share";


export default function RefCodeButton() {

    useEffect(() =>{

    })

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
                <button className='btn-primary btn-block btn-lg' id="share-button">Share with your friends and get <strong>FREE COOKIES</strong></button>
            </RWebShare>
        </div>
    )
}
