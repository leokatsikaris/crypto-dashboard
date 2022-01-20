import React from 'react';


export function Cryptocard({symbol, priceChange}) {

    return (
            <div>
            <p>{symbol}</p>
            <p>{priceChange}</p>
            </div>
    )
}