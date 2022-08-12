import React from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
    );
};

export default Home;