import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Cryptocard } from '../Cryptocard/Cryptocard';


export function Dashboard() {
    const [info, setInfo] = useState([]);



    useEffect(() => {
        async function fetchData () {
            let interactionAPI = await axios.get('https://api2.binance.com/api/v3/ticker/24hr');
            await setInfo(interactionAPI.data);
        }
        fetchData();
      }, []);



    return (
            <div>{info.map(c => {
                return (
                <Cryptocard symbol={c.symbol} priceChange={c.priceChange} />
                )
            })}</div>
    )
}