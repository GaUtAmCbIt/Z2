import React from 'react';
import LeftSection from './LeftSection';

function Hero() {
    return ( 
        <div className='container '>
            <div className='row text-center p-5 border-bottom'>
            <h1 className='mt-5'>Zerodha Products</h1>
            <h4 className='mb-4'>Sleek, modern, and intuitive trading platforms</h4>
            <p className='mb-5 '>Check out our  <a href='#' style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i> </a></p>
            </div>
        </div>
     );
}

export default Hero;