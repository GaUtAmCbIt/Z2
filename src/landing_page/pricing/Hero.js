import React from 'react';

function Hero() {
    return ( <>
    <div className='container border-bottom text-center p-5'>
        <h2>Pricing</h2>
        <h5>Free equity investment and flat ₹20 traday and F&O trades</h5>
    </div>
    <div className='container p-5'>
        <div className='row'>
            <div className='col-4'>
                <img src='/media/images/pricing0.svg' style={{width:"70%"}} alt='pricing 0'></img>
                <h3>Free equity delivery</h3>
                <p className='text-small text-muted'> all equity delivery investments(NSE,BSE) are absolutely free - ₹0  brokerage</p>
            </div>
            <div className='col-4'>
            <img src='/media/images/intradayTrades.svg' style={{width:"70%"}} alt='pricing 20'></img>
                <h3>Intraday and F&O trades</h3>
                <p className='text-small text-muted'> Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4'>
            <img src='/media/images/pricing0.svg' style={{width:"70%"}} alt='pricing 0'></img>
                <h3>Free direct MF</h3>
                <p className='text-small text-muted'> All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    </div>
    </>);
}

export default Hero;