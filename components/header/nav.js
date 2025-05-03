"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineShoppingBag } from "react-icons/hi";
import styles from './nav.module.scss';
import { useCart } from '@/context/cartContext';
import Cart from './Cart';

export default function NavMenu({ className, onClick, white, bag }) {
    const pathname = usePathname();
    const { cart } = useCart(); // Gauta krepšelio informacija
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Suskaičiuojame kiek prekių yra krepšelyje

    return (
        <nav className={`${className} flex items-center gap-4 lg:gap-8`}>
            <Link href="/" prefetch={false} onClick={onClick}
                className={`${white ? styles["item-white"] : styles.item} ${pathname === '/' ? (white ? styles["active-white"] : styles.active) : ''}`}>
                Pagrindinis
            </Link>
            <Link href="/menu" prefetch={false} onClick={onClick}
                className={`${white ? styles["item-white"]  : styles.item} ${pathname.startsWith('/menu') ? (white ? styles["active-white"]  : styles.active) : ''}`}>
                Meniu
            </Link>
            <Link href="/about" prefetch={false} onClick={onClick}
                className={`${white ? styles["item-white"]  : styles.item} ${pathname === '/about/' ? (white ? styles["active-white"]  : styles.active) : ''}`}>
                Apie mus
            </Link>
            <Link href="/contacts" prefetch={false} onClick={onClick}
                className={`${white ? styles["item-white"]  : styles.item} ${pathname === '/contacts/' ? (white ? styles["active-white"]  : styles.active) : ''}`}>
                Kontaktai
            </Link>

            {
                bag &&
                <Cart/>
            }

            
        </nav>
    );
}
