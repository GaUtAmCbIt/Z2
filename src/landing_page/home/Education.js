import React from 'react';
function Education() {
    return ( 
        <div className='container'>
            <div class='row p-4 '>
                <div class='col-6'>
                    <img src='/media/images/education.svg' alt='education image' style={{width:"65%"}}></img>
                </div>
                <div class='col-6 mt-5'>
                    <h1>Free and open market education</h1>
                    <p className='text-muted mt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="#" style={{textDecoration:"none"}} >Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='text-muted mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#" style={{textDecoration:"none"}} >TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>

        </div>
     );
}

export default Education;