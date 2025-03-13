"use client";

import { useState } from 'react';
import Logo from '../ui/logo';
import SocialMedia from '../ui/socialMedia';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavMenu from "./nav";
import Cart from './Cart';

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
                    {/* Desktop navigation - visible only on large screens */}
                    <div className="hidden md:block">
                        <NavMenu bag onClick={closeMenu} />
                    </div>
                </div>
            </div>
            <Cart forMobile size="35" className="absolute md:hidden top-[90px] right-[30px] bg-outrageous-orange-300 rounded-full p-1" />
            {/* Mobile navigation - visible only when isOpen is true */}
            {isOpen && (
                <div className="md:hidden w-full bg-[#FFE4B8] z-50">
                    <NavMenu
                        className="flex flex-col items-center gap-4 py-4" 
                        onClick={closeMenu}
                    />
                </div>
            )}
        </section>
    );
}
