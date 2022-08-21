import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import NavMenu from '../NavMenu/NavMenu';
import MySkill from '../MySkill/MySkill';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
const Home = () => {
    return (
        <div className=''>
            <NavMenu></NavMenu>
            <Hero></Hero>
            <About></About>
            <MySkill></MySkill>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;