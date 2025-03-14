import React from 'react';
import CreateTicket from './CreateTicket';
import Navbar from '../Navbar';
import Hero from './Hero';
import Footer from '../Footer';

function SupportPage() {
    return ( 
        <>
        <Navbar />
        <Hero />
        <CreateTicket />
        <Footer />
        </>
     );
}

export default SupportPage;