import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import NavMenu from '../NavMenu/NavMenu';

const Home = () => {
    return (
        <div className=''>
            <NavMenu></NavMenu>
            <Hero></Hero>
            <About></About>
        </div>
    );
};

export default Home;