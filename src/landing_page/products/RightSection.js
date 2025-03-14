import React from 'react';

function RightSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( <>
    <div className='container p-5'>
            <div className='row'>
            <div className='col-6 mt-5'>
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <a href={tryDemo} style={{textDecoration:"none"}} >Try demo<i class="fa-solid fa-arrow-right"></i> </a>
                    <a href={learnMore} style={{textDecoration:"none"}} className='mx-3'>Learn more<i class="fa-solid fa-arrow-right"></i> </a>
                    <div className='mt-3'>
                    <img src={googlePlay}/>
                    <img src={appStore} className='mx-3'/>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={imageURL} style={{width:"75%"}}></img>
                </div>
                
            </div>
        </div>
    </> );
}

export default RightSection;