import React from 'react';


function Team() {
    return ( 
        <>
        <div className='container p-5'>
            <div className='row'>
                <h2 className='text-center mb-5 '>People</h2>
                <div className='col-6 text-center'>
                    <img src='/media/images/gautam.jpg' alt='nithin kamath' style={{width:"50%",borderRadius:"100%"}} className='mb-5'></img>
                    <h4 className='text-center'>Gautam Priyadarshan Bal</h4>
                    <p className='text-muted text-center'>Founder, CEO</p>
                </div>
                <div className='col-6 mt-5'>
                    <p className='text-muted'>Gautam bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p className='text-muted' >
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p className='text-muted'>
                    Playing basketball is his zen.
                    </p>
                    <p className='text-muted'>
                    Connect on <a href="#" style={{textDecoration:"none"}}>Homepage </a> / <a style={{textDecoration:"none"}} href="#"> TradingQnA </a> / <a style={{textDecoration:"none"}}  href="#"> Twitter</a>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Team;