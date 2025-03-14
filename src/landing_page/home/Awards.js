import React from 'react';

function Awards() {
    return ( 
        <div className="container">
            <div className='row'>
                <div className="col-6 p-5 ">
                    <img src='/media/images/largestbroker.svg' className='mt-4' alt="largest-broker" style={{width:"75%"}} />
                </div>
                <div className="col-6 p-5">
                   <h1 className='mb-5 mt-5'>Largest stock broker in India</h1>
                   <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                   <ul>
                    <div className='row'>
                        <div className='col-6'>
                            <li>Futures and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                        </div>
                        <div className='col-6'>
                            <li>Stocks & IPO's</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds & Govt. Securities</li>
                        </div>
                    </div>

                   </ul>
                   <img src="/media/images/pressLogos.png" alt="press logos" style={{width:"85%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;