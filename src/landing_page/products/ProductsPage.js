import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Universe from './Universe';

function ProductsPage() {
    return ( <>
    <Navbar />
    <Hero />
    <div className='container p-5'>
    <LeftSection imageURL="/media/images/kite.png" productName="Kite" productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' tryDemo='' learnMore='' googlePlay='/media/images/googlePlayBadge.svg' appStore='/media/images/appstoreBadge.svg'  />

    <RightSection imageURL="/media/images/console.png" productName="Console" productDescription='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.' tryDemo='' learnMore='' googlePlay='/media/images/googlePlayBadge.svg' appStore='/media/images/appstoreBadge.svg' />

    <LeftSection  imageURL="/media/images/coin.png" productName="Coin" productDescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.' tryDemo='' learnMore='' googlePlay='/media/images/googlePlayBadge.svg' appStore='/media/images/appstoreBadge.svg'/>

    <RightSection imageURL="/media/images/kiteconnect.png" productName="Kite Connect API" productDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.' tryDemo='' learnMore='' googlePlay='/media/images/googlePlayBadge.svg' appStore='/media/images/appstoreBadge.svg' />

    <LeftSection imageURL="/media/images/varsity.png" productName="Varsity mobile" productDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' tryDemo='' learnMore='' googlePlay='/media/images/googlePlayBadge.svg' appStore='/media/images/appstoreBadge.svg' />
    </div>
    <h5 className='text-center p-5'>Want to know more about our technology stack? Check out the <a href='#' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h5>
    <Universe />
    <div className='text-center'>
    <button className='btn btn-primary p-3 mb-5'>Sign up for free</button>
    </div>
    <Footer />
    </> );
}

export default ProductsPage;