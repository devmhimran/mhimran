import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import NavMenu from '../NavMenu/NavMenu';
import MySkill from '../MySkill/MySkill';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Wordpress from '../Wordpress/Wordpress';
const Home = () => {
    return (
        <div className=''>
            <NavMenu></NavMenu>
            <Hero></Hero>
            <About></About>
            <MySkill></MySkill>
            <Wordpress></Wordpress>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <hr className='dark:text-gray-400' />
            <Footer></Footer>
        </div>
    );
};

export default Home;