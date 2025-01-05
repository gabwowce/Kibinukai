import Image from 'next/image';
import boltIcon from '@/public/assets/bolt-logo.png';
import { FaTimes } from 'react-icons/fa';

export default function News() {
    return (
        <section aria-label="News" className='flex items-center justify-end bg-white py-2'>
            <p className='flex-1 text-center xs:text-xs'>
                Dabar mes ir 
                <span className='px-2'>
                    <Image 
                        src={boltIcon} 
                        alt="Bolt food icon" 
                        className="inline-block w-[65px] md:w-[100px]  h-auto"
                    /> 
                </span> 
                programėlėje
            </p>
            <button className='inline-block pr-4'>
                <FaTimes 
                    className="text-black hover:text-primary" 
                    size={15} 
                />
            </button>
        </section>
    );
}
