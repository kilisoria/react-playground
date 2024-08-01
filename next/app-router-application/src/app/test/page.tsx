"use client"; // This is a client component 👈🏽

import { useEffect } from "react";


const Test = () => {
    useEffect(() => {
        console.log('ssss')
    }, []);

    return <>
        <h1>Testing features on Next v14 using App Router</h1>
        <div>
            <p>Checking...</p>
        </div>
    </>
};

export default Test;
