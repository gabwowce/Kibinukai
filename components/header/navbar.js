"use client";

import { useState } from 'react';
import Logo from '../ui/logo';
import SocialMedia from '../ui/socialMedia';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavMenu from "./nav";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <section className="relative flex flex-col items-center justify-between bg-cream shadow-custom">
            <div className="container flex justify-between py-4"> 
                <Logo />
                <div className="flex items-center gap-4 font-semibold"> 
                    <SocialMedia forMobile />
                    <button
                        onClick={toggleMenu}
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                        className="block md:hidden text-outrageous-orange-400 text-2xl p-2 z-50"
                    >
                        {isOpen ? <FaTimes className='icon' /> : <FaBars className='icon' />}
                    </button>
                    <NavMenu 
                        className="hidden md:flex items-center gap-4 lg:gap-8"
                        onClick={closeMenu}
                    />
                </div>
            </div>
            {isOpen && (
                <div className='block md:hidden w-full bg-[#FFE4B8]'>
                    <NavMenu 
                        className="flex flex-col items-center gap-4 py-4" 
                        onClick={closeMenu}
                    />
                </div>
            )}
        </section>
    );
}
