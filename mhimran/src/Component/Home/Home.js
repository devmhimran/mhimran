import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import NavMenu from '../NavMenu/NavMenu';
import MySkill from '../MySkill/MySkill';
const Home = () => {
    return (
        <div className=''>
            <NavMenu></NavMenu>
            <Hero></Hero>
            <About></About>
            <MySkill></MySkill>
        </div>
    );
};

export default Home;