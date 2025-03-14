import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


function NotFound() {
    return ( 
        <>
        <Navbar />
        <div className='container'>
            <div class="row text-center p-5 mt-5">
                <h1>404,Not Found</h1>
                <p className='text-muted'>Sorry , the page you are looking for does not exist</p>
            </div>
        </div>
        <Footer />
        </>
     );
}

export default NotFound;