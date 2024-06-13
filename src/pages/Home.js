import React, { useState } from 'react';
import Header from '../components/Home/Header';
import Banner from '../components/Home/Banner';
import Ecosystem from '../components/Home/Ecosystem';
import Products from '../components/Home/Product';
import Platform from '../components/Home/Platform';
import Footer from '../components/Home/Footer';

const Home = () => {
   
    return (
       <>
        <Header/>
        <Banner/>
        <Ecosystem/>
        <Products/>
        <Platform/>
        <Footer/>
       </>
    )
}

export default Home