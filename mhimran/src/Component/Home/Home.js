import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import NavMenu from '../NavMenu/NavMenu';
import MySkill from '../MySkill/MySkill';
import Portfolio from '../Portfolio/Portfolio';
const Home = () => {
    return (
        <div className=''>
            <NavMenu></NavMenu>
            <Hero></Hero>
            <About></About>
            <MySkill></MySkill>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;