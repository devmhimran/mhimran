import React from 'react';
import devMhImranImage from '../Assets/devmhimran-image.jpg'

const About = () => {
    return (
        <div className='about container mx-auto' id='about'>
            <div className="about__main max-w-screen-xl mx-auto lg:py-24 md:py-16 py-16">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
                    
                    <div className="about__image">
                        <img className='lg:w-10/12 w-96 mx-auto lg:mr-auto rounded-lg' src={devMhImranImage} alt="" />
                    </div>

                    <div className="about__heading lg:text-left text-center flex items-center">
                        <div className="about__heading__main">
                            <h1 className='text-3xl lg:text-5xl font-bold mb-4 lg:mb-6'>About Me</h1>
                            <p className='text-base lg:text-lg text-gray-700 font-light leading-8 p-4 lg:p-0'>Hi! I Mahmud Hasan Imran, am a passionate web developer. I develop web applications using MERN Stack Development. My core skill is based on Javascript, React JS, Node Js, PHP, and WordPress and I love to do most things using Javascript and React Js. My vision is to upgrade the UX experience in websites. The most website doesn't have a well-optimized user experience, which is why they lose traffic. I think can solve this problem and I will try to do my best. I love to make solutions using web development. I graduated with a bachelor's degree in Computer Science and Engineering from the Bangladesh University of Business and Technology (BUBT) in Dhaka, Bangladesh in 2022. I'm available for any job opportunity that suits my interest.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;