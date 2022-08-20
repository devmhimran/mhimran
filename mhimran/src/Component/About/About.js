import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <div className="about__main container max-w-screen-xl mx-auto lg:py-24 md:py-16 sm:py-16">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4">
                    <div className="about__heading">
                        <h1 className='text-5xl font-bold'>About Me</h1>
                        <p>Hi ! Myself Mahmud Hasan Imran, a passionate web developer. I develop web application using MERN Stack Development. My core skill is based on PHP, Javascript & Wordpress and I love to do most of the things using Javascript and React Js. I love to make solution using web development. I have graduated with a bachelor's degree in Computer Science & Engineering from Bangladesh University of Business and Technology (BUBT) at Dhaka, Bangladesh in 2022. I'm available for any job opportunity that suits my interest.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;