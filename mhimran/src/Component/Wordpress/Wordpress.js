import React from 'react';
import whiteCanvas from '../Assets/devmhimran-white-canvas.png';
import elePack from '../Assets/devmhimran-ele-pack.png';

const Wordpress = () => {
    return (
        <div className='wordpress__section'>
            <div className="wordpress__theme bg-gray-100 dark:bg-[#262626]">
                <div className="container max-w-screen-xl mx-auto lg:py-24 md:py-16 py-16">
                    <div className="flex flex-wrap-reverse lg:flex-nowrap items-center mx-4 lg:mx-0">
                        <div className="wordpress__left mr-0 lg:mr-16 text-center lg:text-left">
                            <h1 className='text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 text-center lg:text-left dark:text-white'>White Canvas</h1>
                            <p className='text-gray-700 leading-7 dark:text-gray-400'>It's a WordPress starter blank theme. Its recommended 4 plugins, 
                                one click demo import, Elementor Website Builder,
                                Elementor Header & Footer Builder,
                                MouseWheel Smooth Scroll, We can upload pre made demo and
                                we can import demo by one click demo importer</p>
                        </div>
                        <div className="wordpress__right" data-aos="fade-left">
                            <img className='w-full mb-8 lg:mb-0 rounded' src={whiteCanvas} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wordpress__theme">
                <div className="container max-w-screen-xl mx-auto lg:py-24 md:py-16 py-16">
                    <div className="block lg:flex items-center mx-4 lg:mx-0">
                    <div className="wordpress__left"  data-aos="fade-right">
                            <img className='w-full mb-8 lg:mb-0 rounded' src={elePack} alt="" />
                        </div>
                        <div className="wordpress__right ml-0 lg:ml-16 text-center lg:text-left mb-6 lg:mb-0">      
                            <h1 className='text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 text-center lg:text-left dark:text-white'>ElePack</h1>
                            <p className='text-gray-700 leading-7 dark:text-gray-400'>Ele Pack Addons helps you to build your website easily and customizable with stunning design material. It is a elementor extension. We can extend elementor feature by this element. Its available in wordpress org.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wordpress;