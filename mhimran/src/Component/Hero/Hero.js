import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import heroImage from '../Assets/hero-image.png';
// import bgImg from '../Assets/bg-img.png'
import './hero.css'

const Hero = () => {
    return (
        <div className="hero__main">
            <div className='container max-w-screen-xl mx-auto lg:py-24 md:py-16 sm:py-16'>
                <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4">
                    <div className="hero__left flex items-center">
                        <div className="hero__left__main">
                            <h3 className='text-lime-500 text-2xl'>Hi, I am</h3>
                            <h1 className='text-gray-900 text-7xl font-bold'>Mahmud<br></br> Hasan Imran</h1>
                            <div className="details mt-3">
                                <h3 className='text-2xl font-semibold text-lime-500'>Front End Developer</h3>
                                <div className='text-gray-900 text-lg'>
                                    <p className='inline'>Web Developer</p>
                                    <GoPrimitiveDot className='inline mx-3 text-lime-500'></GoPrimitiveDot>
                                    <p className='text-gray-900 inline'>WordPress Expert</p>
                                    <GoPrimitiveDot className='inline mx-3 text-lime-500'></GoPrimitiveDot>
                                    <p className='text-gray-900 inline'>Computer Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero__right">
                        <img className='w-full' src={heroImage} alt="heroImage" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;