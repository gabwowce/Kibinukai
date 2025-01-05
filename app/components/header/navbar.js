import Image from 'next/image';
import logo from '@/public/assets/kibLogo.png';
import Link from 'next/link';

export default function Navbar() {
    return (
        <section className='flex items-center justify-between bg-lightYellow py-4'>
            <div className="container flex justify-between"> 
                <Link href="/">
                    <Image src={logo} alt="Kibinukai logo"/>
                </Link>
                <nav className="flex items-center gap-6"> 
                    <Link href="/" className="hover:text-primary transition-colors">
                        Pagrindinis
                    </Link>
                    <Link href="/menu" className="hover:text-primary transition-colors">
                        Meniu
                    </Link>
                    <Link href="/about" className="hover:text-primary transition-colors">
                        Apie mus
                    </Link>
                    <Link href="/contacts" className="hover:text-primary transition-colors">
                        Kontaktai
                    </Link>
                </nav>
            </div>
        </section>
    );
}