import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <h4 className='text-center'>To create a ticket, select a relevant topic</h4>
                <div className='col-4 mt-5'>
                    <div>
                        <h5><i class="fa-solid fa-plus"></i> Account Opening</h5>
                        <ul style={{listStyleType:"none"}}>
                            <li><a href="#" style={{ textDecoration: 'none' , opacity:"0.7"}} >Resident individual</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Minor</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Non Resident Indian (NRI)</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Company, Partnership, HUF and LLP</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Glossary</a></li>
                        </ul>
                    </div>

                    <div className='mt-5'>
                        <h5>Funds</h5>
                        <ul style={{listStyleType:"none"}}>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Add money</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Withdraw money</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Add bank accounts</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>eMandates</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-4 mt-5'>
                <div>
                        <h5><i class="fa-solid fa-user"></i> Your Zerodha Account</h5>



                        <ul style={{listStyleType:"none"}}>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Your Profile</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Account modification</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Nomination</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>
                            Transfer and conversion of securities</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Console</h5>
                        <ul style={{listStyleType:"none"}}>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Portfolio</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Corporate actions</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Funds statement</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Reports</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Profile</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Segments</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-4 mt-5'>
                <div>
                        <h5>Kite</h5>
                        <ul style={{listStyleType:"none"}}>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>IPO</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Trading FAQs</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Margin Trading Facility(MTF) and Margins</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Charts and orders</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>Alerts and Nudges</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', opacity:"0.7" }}>General</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5>Coin</h5>
                        <ul style={{listStyleType:"none"}}>
                            <li><a href="#" style={{ textDecoration: 'none' , opacity:"0.7"}}>Understanding mutual funds and coins</a></li>
                            <li><a href="#" style={{ textDecoration: 'none' , opacity:"0.7"}}>Coin app</a></li>
                            <li><a href="#" style={{ textDecoration: 'none' , opacity:"0.7"}}>Coin web</a></li>
                            <li><a href="#" style={{ textDecoration: 'none' , opacity:"0.7"}}>Transactions  and reports</a></li>
                            <li><a href="#" style={{ textDecoration: 'none' , opacity:"0.7"}}>National Pension Scheme (NPS)</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;