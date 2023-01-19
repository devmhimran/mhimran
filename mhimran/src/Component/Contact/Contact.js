import { Button, Input, Textarea } from '@material-tailwind/react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hmo98vn', 'template_zwwodm9', form.current, 'NBm1Am8HA6NeOIEUY')
            .then((result) => {
                console.log(result.text);
                toast.success('Successfully Send!')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div id='contact' className='contact'>
            <div className="container mx-auto max-w-screen-xl lg:py-24 md:py-16 py-16">
                <div className="contact__heading">
                    <h1 className='text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 lg:text-left text-center dark:text-white montserrat'>Contact</h1>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 lg:text-left text-center">
                    <div className="contact__left lg:mr-6 mr-0 flex items-center">
                        <div className="contact__left__main lg:p-0 p-4">
                            <p className='dark:text-gray-400 inter'>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>

                            <div className="contact__detail mt-6 mb-3">
                                <h3 className='text-xl font-bold dark:text-white montserrat'>Email</h3>
                                <p className='dark:text-gray-400 inter'>mahmud.bubt.150@gmail.com</p>
                            </div>
                            <div className="contact__detail mb-3">
                                <h3 className='text-xl font-bold dark:text-white montserrat'>Facebook</h3>
                                <p className='dark:text-gray-400 inter'>fb/devmhimran01</p>
                            </div>
                            <div className="contact__detail mb-3">
                                <h3 className='text-xl font-bold dark:text-white montserrat'>LinkedIn</h3>
                                <p className='dark:text-gray-400 inter'>Li/devmhimran</p>
                            </div>
                        </div>

                    </div>
                    <div className="contact__right lg:ml-6 ml-0 flex justify-center">
                        <form className='w-10/12' ref={form} onSubmit={sendEmail}>
                            <div className="w-full lg:w-11/12 my-5 inter">
                                <Input className='dark:text-gray-400' label="Your Name" name="user_name" required/>
                            </div>
                            <div className="w-full lg:w-11/12 my-5 inter">
                                <Input label="Your Email" className='dark:text-gray-400' name="user_email" required/>
                            </div>
                            <div className="w-full lg:w-11/12 my-5 inter">
                                <Textarea label="Message" className='dark:text-gray-400' name="message" required />
                            </div>
                            <div className="w-full lg:w-11/12 my-3 inter">
                                <button className='button__main' type='submit'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Contact;