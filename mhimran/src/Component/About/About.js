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
                            <p className='text-base lg:text-lg text-gray-700 font-light leading-8 p-4 lg:p-0'>Hi ! Myself Mahmud Hasan Imran, a passionate web developer. I develop web application using MERN Stack Development. My core skill is based on PHP, Javascript and Wordpress and I love to do most of the things using Javascript and React Js. I love to make solution using web development. I have graduated with a bachelor's degree in Computer Science and Engineering from Bangladesh University of Business and Technology (BUBT) at Dhaka, Bangladesh in 2022. I'm available for any job opportunity that suits my interest.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;