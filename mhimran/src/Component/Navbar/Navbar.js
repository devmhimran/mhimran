import React from 'react';
import { Link } from 'react-router-dom';
import devmhimranLogo from '../Assets/devmhimran-logo.png';
import { BsSun } from 'react-icons/bs';

const Navbar = () => {
    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='#skill'>Skill</Link></li>
        <li><Link to='#about'>About</Link></li>
        <li><Link to='#portfolio'>Portfolio</Link></li>
        <li><Link to='#blog'>Blog</Link></li>
        <button className='px-6 border-2 border-lime-500 rounded-md'>Resume</button>
    </>
    return (
        <div className="navbar text-white py-8">
            <div className="navbar-start">
            <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navLink}
                    </ul>
                </div>
                <Link to='/'><img className='w-8/12' src={devmhimranLogo} alt="devmhimranLogo" /></Link>
                
            </div>
            <div className="navbar-end hidden text-lg lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navLink}
                </ul>
                <span><BsSun></BsSun></span>              
            </div>
        </div>
    );
};

export default Navbar;