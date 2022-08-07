import React from 'react';
import Hero from '../Hero/Hero';
import NavBar from './NavBar';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <Hero></Hero>
        </div>
    );
};

export default Home;