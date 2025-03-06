"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineShoppingBag } from "react-icons/hi";
import styles from './nav.module.scss';
import { useCart } from '@/services/cartContext';

export default function NavMenu({ className, onClick, white }) {
    const pathname = usePathname();
    const { cart } = useCart(); // Gauta krepšelio informacija
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Suskaičiuojame kiek prekių yra krepšelyje

    return (
        <nav className={`hidden md:flex items-center gap-4 lg:gap-8 ${className}`}>
            <Link href="/" onClick={onClick}
                className={`${white ? styles["item-white"] : styles.item} ${pathname === '/' ? (white ? styles["active-white"] : styles.active) : ''}`}>
                Pagrindinis
            </Link>
            <Link href="/menu" onClick={onClick}
                className={`${white ? styles["item-white"]  : styles.item} ${pathname.startsWith('/menu') ? (white ? styles["active-white"]  : styles.active) : ''}`}>
                Meniu
            </Link>
            <Link href="/about" onClick={onClick}
                className={`${white ? styles["item-white"]  : styles.item} ${pathname === '/about' ? (white ? styles["active-white"]  : styles.active) : ''}`}>
                Apie mus
            </Link>
            <Link href="/contacts" onClick={onClick}
                className={`${white ? styles["item-white"]  : styles.item} ${pathname === '/contacts' ? (white ? styles["active-white"]  : styles.active) : ''}`}>
                Kontaktai
            </Link>

            {/* Krepšelio mygtukas */}
            <Link href="/orders" onClick={onClick}
                className={`${white ? styles["item-white"]  : styles.item} ${pathname === '/orders' ? (white ? styles["active-white"]  : styles.active) : ''} relative flex items-center`}>
                
                {/* Maišelio ikona */}
                <HiOutlineShoppingBag className='pb-1' size={30} />

                {/* Krepšelio prekių kiekis */}
                {cartItemCount > 0 && (
                    <span className="absolute -bottom-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {cartItemCount}
                    </span>
                )}
            </Link>
        </nav>
    );
}
