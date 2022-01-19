import React, { useEffect, useState } from 'react';
import axios from 'axios';


export function Dashboard() {
    const [info, setInfo] = useState([]);



    useEffect(async () => {
        let interactionAPI = await axios.get('https://api2.binance.com/api/v3/ticker/24hr');
        await setInfo(interactionAPI.data);
      }, []);



    return (
            <div>{info.map(c => {
                return (
                <div>
                <p>{c.symbol}</p>
                <p>{c.priceChange}</p>
                </div>
                )
            })}</div>
    )
}