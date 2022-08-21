import { Button } from '@material-tailwind/react';
import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container mx-auto max-w-screen-xl lg:py-24 md:py-16 py-16">
                <div className="contact__heading">
                    <h1 className='text-3xl lg:text-5xl font-bold mb-4 lg:mb-6'>Contact</h1>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
                    <div className="contact__left lg:mr-6 mr-0 flex items-center">
                        <div className="contact__left__main">
                            <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                            <div className="contact-button mt-6">
                                <Button size="md"><a  href="mailto:mahmud.bubt.150@gmail.com">Contact Me </a></Button>
                            </div>
                        </div>
                    </div>
                    <div className="contact__right lg:ml-6 ml-0">
                        <div className="contact__detail mb-3">
                            <h3 className='text-2xl font-bold'>Email</h3>
                            <p>mahmud.bubt.150@gmail.com</p>
                        </div>
                        <div className="contact__detail mb-3">
                            <h3 className='text-2xl font-bold'>Facebook</h3>
                            <p>fb/devmhimran01</p>
                        </div>
                        <div className="contact__detail mb-3">
                            <h3 className='text-2xl font-bold'>LinkedIn</h3>
                            <p>Li/devmhimran</p>
                        </div>
                        <div className="contact__detail mb-3">
                            <h3 className='text-2xl font-bold'>Address</h3>
                            <p>Mirpur, Dhaka-1216, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;