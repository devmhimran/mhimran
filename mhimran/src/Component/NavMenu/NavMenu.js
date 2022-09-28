import React from 'react';
import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import devMhImranLogo from '../Assets/devmhimran-logo-dark.png';
import devmhimranResume from '../Assets/mahmud-hasan-resume.pdf';
import { BsSun } from 'react-icons/bs';
import { HiOutlineMoon } from 'react-icons/hi';

const NavMenu = () => {
    const [openNav, setOpenNav] = useState(false);
    const [icon, setIcon] = useState(false);
    const [theme, setTheme] = useState('light');
    
    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[theme]);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const handleTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log(theme)
        setIcon(!icon);
    }

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"

                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href='#skill' className="flex items-center dark:text-gray-400">Skill</a>
            </Typography>
            <Typography
                as="li"

                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href='#about' className="flex items-center dark:text-gray-400">About</a>
            </Typography>
            <Typography
                as="li"

                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href='#portfolio' className="flex items-center dark:text-gray-400">Portfolio</a>
            </Typography>
            <Typography
                as="li"

                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href='#contact' className="flex items-center dark:text-gray-400">Contact</a>
            </Typography>
            {/* <Typography
                as="li"
                 
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to='/' className="flex items-center">Skill</Link>
            </Typography> */}
        </ul>
    );
    return (
        <div className='py-4'>
            <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 dark:bg-[#1f1f1f]">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="/"
                        variant="small"
                        className="mr-4 cursor-pointer py-1.5 font-normal"
                    >
                        <span><img className='lg:w-36 md:w-32 w-32 dark:invert' src={devMhImranLogo} alt="devmhimran-logo" /></span>
                    </Typography>
                    <div className="hidden lg:block">{navList}</div>
                    <div className='flex items-center'>
                        <a className='hidden lg:inline-block button__main' href={devmhimranResume} download='mahmud-hasan-resume.pdf'><span>Resume</span></a>
                        {
                            icon ? <span onClick={handleTheme}><HiOutlineMoon className='ml-3 text-xl cursor-pointer dark:text-gray-400 hidden lg:inline-block'></HiOutlineMoon></span> :
                                <span onClick={handleTheme}><BsSun className='ml-3 text-xl cursor-pointer hidden lg:inline-block'></BsSun></span>
                        }
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6 dark:text-gray-400"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav} className='fit'>
                    {navList}
                    {/* <a className='lg:hidden inline-block border-2 border-[#262524] w-full lg:w-full text-center py-1 rounded-md text-[#262524] hover:text-white hover:bg-[#262524] ease-in duration-200' href={devmhimranResume} download='mahmud-hasan-resume.pdf'><span>Resume</span></a> */}

                    <div className=''>
                        {
                            icon ? <span onClick={handleTheme}><HiOutlineMoon className='ml-3 text-xl text-black my-3 cursor-pointer dark:text-gray-400'></HiOutlineMoon></span> :
                                <span onClick={handleTheme}><BsSun className='ml-3 text-xl text-black my-3 cursor-pointer dark:text-gray-400'></BsSun></span>
                        }
                        <a className='lg:hidden inline-block button__main w-full' href={devmhimranResume} download='mahmud-hasan-resume.pdf'><span>Resume</span></a>
                    </div>
                </MobileNav>
            </Navbar>
        </div>
    );
};

export default NavMenu;