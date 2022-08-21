import { IconButton } from '@material-tailwind/react';
import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import heroImage from '../Assets/hero-image.png';
import { GrFacebookOption } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import './hero.css'

const Hero = () => {
    return (
        <div className="hero__main">
            <div className='container max-w-screen-xl mx-auto h-screen pt-44 mt-[-115px]'>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 container mx-auto">
                    <div className="hero__left flex lg:items-center justify-center">
                        <div className="hero__left__main lg:text-left md:text-center text-center">
                            <h3 className='text-cyan-500 text-2xl'>Hi, I am</h3>
                            <h1 className='text-gray-900 lg:text-6xl md:text-5xl text-4xl font-bold'>Mahmud<br></br> Hasan Imran</h1>
                            <div className="details mt-3">
                                <h3 className='text-2xl font-semibold text-cyan-500 mb-3'>Front End Developer</h3>
                                <div className='lg:text-lg text-base'>
                                    <p className='text-gray-900 lg:inline block my-1 lg:my-0'>Web Developer</p>
                                    <GoPrimitiveDot className='lg:inline mx-3 text-cyan-500 hidden'></GoPrimitiveDot>
                                    <p className='text-gray-900 lg:inline block my-1 lg:my-0'>WordPress Expert</p>
                                    <GoPrimitiveDot className='lg:inline mx-3 text-cyan-500 hidden'></GoPrimitiveDot>
                                    <p className='text-gray-900 lg:inline block my-1 lg:my-0'>Computer Engineer</p>
                                </div>
                            </div>
                            <div className="social mt-4">
                                <a href="https://www.facebook.com/devmhimran01/">
                                    <span className='mr-3'>
                                        <IconButton color="green">
                                            <div className='text-2xl'>
                                                <GrFacebookOption></GrFacebookOption>
                                            </div>
                                        </IconButton>
                                    </span>
                                </a>
                                <a href="https://github.com/devmhimran">
                                    <span className='mr-3'>
                                        <IconButton color="green">
                                            <div className='text-2xl'>
                                                <AiFillGithub></AiFillGithub>
                                            </div>
                                        </IconButton>
                                    </span>
                                </a>
                                <a href="https://www.linkedin.com/in/devmhimran/">
                                    <span className='mr-3'>
                                        <IconButton color="green">
                                            <div className='text-2xl'>
                                                <FaLinkedinIn></FaLinkedinIn>
                                            </div>
                                        </IconButton>
                                    </span>
                                </a>
                                <a href="https://twitter.com/devmhimran">
                                    <span className='mr-3'>
                                        <IconButton color="green">
                                            <div className='text-2xl'>
                                                <BsTwitter></BsTwitter>
                                            </div>
                                        </IconButton>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hero__right">
                        <img className='w-96 lg:w-full mx-auto' src={heroImage} alt="heroImage" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;