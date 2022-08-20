import React from 'react';
import devMhImranImage from '../Assets/devmhimran-image.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="about__main container max-w-screen-xl mx-auto lg:py-24 md:py-16 sm:py-16">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
                    
                    <div className="about__image">
                        <img className='w-10/12 mr-auto rounded-lg' src={devMhImranImage} alt="" />
                    </div>

                    <div className="about__heading flex items-center">
                        <div className="about__heading__main">
                            <h1 className='text-5xl font-bold mb-6'>About Me</h1>
                            <p className='text-lg text-gray-600 font-light'>Hi ! Myself Mahmud Hasan Imran, a passionate web developer. I develop web application using MERN Stack Development. My core skill is based on PHP, Javascript and Wordpress and I love to do most of the things using Javascript and React Js. I love to make solution using web development. I have graduated with a bachelor's degree in Computer Science and Engineering from Bangladesh University of Business and Technology (BUBT) at Dhaka, Bangladesh in 2022. I'm available for any job opportunity that suits my interest.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;