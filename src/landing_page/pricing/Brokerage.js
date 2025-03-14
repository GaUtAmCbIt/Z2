import React from 'react';

function Brokerage() {
    return ( <>
    <div className='container p-5 border-top'>
        <div className='row'>
            <div className='col-6'>
                <h6 style={{color:"blue"}} className='text-center'>Brokerage calculator</h6>
                <ul className='text-muted text-small'>
                    <li>Call & Trade and RMS auto-squaredoff: Additional charges of ₹50 + GST per order</li>
                    <li>Digital contract notes will be sent via e-mail</li>
                    <li>Physical copies of  contract notes , if required   , shall be charged ₹20 per  contract note.Courier charges apply</li>
                    <li>for NRI account (non-PIS) , 0.5% or  ₹100  per executed order for equity(whichever is lower)</li>
                    <li>for NRI account (PIS) , 0.5% or  ₹200  per executed order for equity(whichever is lower) </li>
                    <li>If the account is in debit balance , any order  placed will be charged  ₹40 per executed    order instead  of ₹20 per executed order.</li>
                </ul>
            </div>
            <div className='col-6'>
                <h6 style={{color:"blue"}} className='text-center'>List of charges</h6>
            </div>
        </div>
    </div>
    </> );
}

export default Brokerage;