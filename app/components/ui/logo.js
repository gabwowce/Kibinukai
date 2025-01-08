import Image from "next/image";
import Link from 'next/link';
import logo from '@/public/assets/logo1.png';

export default function Logo() {
    return (
        <Link href="/">
            <Image 
                src={logo} 
                alt="Kibinukai logo" 
                className="w-[100px] md:w-[130px] h-auto"
            />
        </Link>
    );
}
