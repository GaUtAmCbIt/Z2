import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from "../OpenAccount";

function PricingPage() {
    return ( <>
    <Navbar />
    <Hero />
    <OpenAccount />
    <Brokerage />
    <Footer />
    </> );
}

export default PricingPage;