"use client";
import Image from 'next/image';
import boltIcon from '@/public/assets/bolt-logo.png';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function News() {
    const [isVisible, setIsVisible] = useState(true);

    function handleClose() {
        setIsVisible(false);
    }

    if (!isVisible) return null; 

    return (
        <div aria-label="News" className='flex items-center justify-between bg-white py-2 px-4'>
            <p className='flex-1 text-center xs:text-xs'>
                Dabar mes ir 
                <span className='px-2'>
                    <Image 
                        src={boltIcon} 
                        alt="Bolt food icon" 
                        className="inline-block w-[75px] h-auto"
                    /> 
                </span> 
                programėlėje!
            </p>
            <button onClick={handleClose} className='inline-block'>
                <FaTimes 
                    className="text-black hover:text-primary transition-colors" 
                    size={15} 
                />
            </button>
        </div>
    );
}
