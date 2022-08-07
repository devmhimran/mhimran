import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

const Hero = () => {
    return (
        <div className='container mx-auto py-60'>
            <div class="grid grid-cols-2 gap-4">
                <div className="hero__left">
                    <h3 className='text-sky-400 text-2xl'>Hi, I am</h3>
                    <h1 className='text-white text-7xl font-bold'>Mahmud<br></br> Hasan Imran</h1>
                    <div className="details mt-3">
                        <h3 className='text-2xl font-semibold text-sky-400'>Front End Developer</h3>
                        <div className='text-white text-lg'>
                            <p className='inline'>Web Developer</p>
                            <GoPrimitiveDot className='inline mx-3'></GoPrimitiveDot>
                            <p className='text-white inline'>WordPress Expert</p>
                            <GoPrimitiveDot className='inline mx-3'></GoPrimitiveDot>
                            <p className='text-white inline'>Computer Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;