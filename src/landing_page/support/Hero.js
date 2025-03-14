import React from 'react';

function Hero() {
    return ( 
        <div className='supportHero'>
            <div className='supportLinks p-3 mt-4 mb-4'>
                <h4 className='p-2 ' style={{color:"white"}}>Support Portal</h4>
                <a href="#" style={{color:"white"}}>Track tickets</a>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h4 style={{color:"white"}} className='mb-3'>
                            Search for an answer or browse help topics to create a ticket
                        </h4>
                        <input 
                            placeholder='Eg: How do I activate F&O, why is my order getting rejected, etc.' 
                            style={{
                                width:"100%",
                                border:'none',
                                borderRadius:"5px",
                                padding:"8px",
                                marginBottom:"10px",
                                fontSize: "14px"
                            }} 
                            className='mb-2' 
                        />
                        <div className='helpLinks'>
                            <a href='' style={{color:"white", display: 'block', marginBottom: '5px'}}>Track account opening</a>
                            <a href='' style={{color:"white", display: 'block', marginBottom: '5px'}}>Track segment activation</a>
                            <a href='' style={{color:"white", display: 'block', marginBottom: '5px'}}>Intraday margins</a>
                            <a href='' style={{color:"white", display: 'block'}}>Kite user manual</a>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <h2 style={{color:"white"}} className='mt-4'>Featured</h2>
                        <ol style={{paddingLeft: "20px", marginTop: "0"}}>
                            <li><a href='' style={{color:"white"}}>Rights Entitlements listing in March 2025</a></li>
                            <li><a href='' style={{color:"white"}}>Surveillance measure on scrips - March 2025</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
