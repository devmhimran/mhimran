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
        <div className="hero__area dark:hero__area__dark">
            <div className='container max-w-screen-xl mx-auto '>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 container mx-auto">
                    <div className="hero__left flex lg:items-center justify-center">
                        <div className="hero__left__main lg:text-left md:text-center text-center">
                            <h3 className='text-cyan-500 text-2xl inter'>Hi, I am</h3>
                            <h1 className='text-gray-900 lg:text-7xl md:text-5xl text-5xl font-bold dark:text-white montserrat'>Mahmud<br></br> Hasan <span className='nick__name'>Imran</span></h1>
                            <div className="details mt-3">
                                <h3 className='text-2xl font-semibold text-cyan-500 mb-3 dark:text-white montserrat'>Front End Developer</h3>
                                <div className='lg:text-lg text-base'>
                                    <p className='text-gray-900 lg:inline block my-1 lg:my-0 dark:text-white inter'>Web Developer</p>
                                    <GoPrimitiveDot className='lg:inline mx-3 text-cyan-500 hidden'></GoPrimitiveDot>
                                    <p className='text-gray-900 lg:inline block my-1 lg:my-0 dark:text-white inter'>WordPress Expert</p>
                                    <GoPrimitiveDot className='lg:inline mx-3 text-cyan-500 hidden'></GoPrimitiveDot>
                                    <p className='text-gray-900 lg:inline block my-1 lg:my-0 dark:text-white inter'>Computer Engineer</p>
                                </div>
                            </div>
                            <div className="social mt-5">
                                <a className='inline mr-3 px-2 py-1.5 text-white bg-[#1363DF] rounded-lg' href="https://www.facebook.com/devmhimran01/">
                                    <span className='text-xl'>
                                        <GrFacebookOption className='inline'></GrFacebookOption>
                                    </span>
                                </a>
                                <a className='inline mr-3 px-2 py-1.5 text-white rounded-lg bg-black' href="https://github.com/devmhimran">
                                    <span className='text-xl'>
                                        <AiFillGithub className='inline'></AiFillGithub>
                                    </span>
                                </a>
                                <a className='inline mr-3 px-2 py-1.5 text-white bg-[#2155CD] rounded-lg' href="https://www.linkedin.com/in/devmhimran/">
                                    <span className='text-xl'>
                                        <FaLinkedinIn className='inline'></FaLinkedinIn>
                                    </span>
                                </a>
                                <a className='inline mr-3 px-2 py-1.5 text-white bg-[#2FA4FF] rounded-lg ' href="https://twitter.com/devmhimran">
                                    <span className='text-xl'>
                                        <BsTwitter className='inline'></BsTwitter>
                                    </span>
                                </a>
                                
                                {/* <a href="https://github.com/devmhimran">
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
                                </a> */}
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