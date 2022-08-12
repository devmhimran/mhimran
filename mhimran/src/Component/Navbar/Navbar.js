import React from 'react';
import { Link } from 'react-router-dom';
import devmhimranLogo from '../Assets/devmhimran-logo.png';

const Navbar = () => {
    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='#skill'>Skill</Link></li>
        <li><Link to='#about'>About</Link></li>
        <li><Link to='#portfolio'>Portfolio</Link></li>
        <li><Link to='#blog'>Blog</Link></li>
    </>
    return (
        <div class="navbar text-white py-3">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                
                <Link to='/'><img className='w-8/12' src={devmhimranLogo} alt="devmhimranLogo" /></Link>
            </div>
            <div class="navbar-end hidden text-lg lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navLink}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;