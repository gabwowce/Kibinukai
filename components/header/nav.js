"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './nav.module.scss';

export default function NavMenu({ className, onClick, white }) {
    const pathname = usePathname();

    return (
        <nav className={`${className}`}>
            <Link
                href="/"
                onClick={onClick}
                className={`${white ? styles["item-white"] : styles.item} ${pathname === '/' ? (white ? styles["active-white"] : styles.active) : ''}`}
            >
                Pagrindinis
            </Link>
            <Link
                href="/menu"
                onClick={onClick}
                className={`${white ? styles["item-white"]  : styles.item} ${pathname.startsWith('/menu') ? (white ? styles["active-white"]  : styles.active) : ''}`}
            >
                Meniu
            </Link>
            <Link
                href="/about"
                onClick={onClick}
                className={`${white ? styles["item-white"]  : styles.item} ${pathname === '/about' ? (white ? styles["active-white"]  : styles.active) : ''}`}
            >
                Apie mus
            </Link>
            <Link
                href="/contacts"
                onClick={onClick}
                className={`${white ? styles["item-white"]  : styles.item} ${pathname === '/contacts' ? (white ? styles["active-white"]  : styles.active) : ''}`}
            >
                Kontaktai
            </Link>
        </nav>
    );
}
