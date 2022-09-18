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

const NavMenu = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                 
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href='#skill' className="flex items-center">Skill</a>
            </Typography>
            <Typography
                as="li"
                 
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href='#about' className="flex items-center">About</a>
            </Typography>
            <Typography
                as="li"
                 
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href='#portfolio' className="flex items-center">Portfolio</a>
            </Typography>
            <Typography
                as="li"
                 
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href='#contact' className="flex items-center">Contact</a>
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
            <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="/"
                        variant="small"
                        className="mr-4 cursor-pointer py-1.5 font-normal"
                    >
                        <span><img className='lg:w-36 md:w-32 w-32' src={devMhImranLogo} alt="devmhimran-logo" /></span>
                    </Typography>
                    <div className="hidden lg:block">{navList}</div>
                    <a className='hidden lg:inline-block border-2 border-[#262524] w-24 text-center py-1 rounded-md text-[#262524] hover:text-white hover:bg-[#262524] ease-in duration-200' href={devmhimranResume} download='mahmud-hasan-resume.pdf'><span>Resume</span></a>
                    {/* <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                        <a href={devmhimranResume} download='mahmud-hasan-resume.pdf'><span>Resume</span></a>
                    </Button> */}
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
                                className="h-6 w-6"
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
                                className="h-6 w-6"
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
                <MobileNav open={openNav}>
                    {navList}
                    <a className='lg:hidden inline-block border-2 border-[#262524] w-full lg:w-full text-center py-1 rounded-md text-[#262524] hover:text-white hover:bg-[#262524] ease-in duration-200' href={devmhimranResume} download='mahmud-hasan-resume.pdf'><span>Resume</span></a>
                    {/* <Button variant="gradient" size="sm" fullWidth className="mb-2" to="../Assets/mahmud-hasan-resume.pdf" target="_blank" download>
                        <a href={devmhimranResume} download='mahmud-hasan-resume.pdf'><span>Resume</span></a>
                    </Button> */}
                </MobileNav>
            </Navbar>
        </div>
    );
};

export default NavMenu;