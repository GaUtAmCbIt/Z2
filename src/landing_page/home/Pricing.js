import React from 'react';

function Pricing() {
    return ( <>
    <div className="container">
        <div className='row p-5'>
            <div className='col-4'>
                <h1 className='mb-3'>Unbeatable pricing</h1>
                <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="#" style={{textDecoration:"none"}} >See pricing<i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className='col-8'>
                <div className='row mt-5'>
                    <div className='col-4'>
                        <img src='/media/images/pricing0.svg' style={{width:"45%"}}></img>
                        <p className='text-muted'>Free account
                        opening</p>
                    </div>
                    <div className='col-4'>
                    <img src='/media/images/pricing0.svg'  style={{width:"45%"}}></img>
                    <p className='text-muted'>Free equity delivery
                    and direct mutual funds</p>
                    </div>
                    <div className='col-4'>
                    <img src='/media/images/intradayTrades.svg'  style={{width:"45%"}}></img>
                    <p className='text-muted'> Intraday and
                    F&O</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </> );
}

export default Pricing;