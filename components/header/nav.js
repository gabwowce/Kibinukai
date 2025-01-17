import Link from 'next/link';
import styles from './nav.module.scss';

export default function NavMenu({className, onClick, setActiveRoute, activeRoute}){
    return(
        <nav className={`${className}`}>
            <Link
                href="/"
                onClick={() => {
                setActiveRoute('/');
                onClick && onClick();
                }}
                className={`${styles.item} ${activeRoute === '/' ? styles.active : ''}`}
            >
                Pagrindinis
            </Link>
            <Link
                href="/menu"
                onClick={() => {
                setActiveRoute('/menu');
                onClick && onClick();
                }}
                className={`${styles.item} ${activeRoute === '/menu' ? styles.active : ''}`}
            >
                Meniu
            </Link>
            <Link
                href="/about"
                onClick={() => {
                setActiveRoute('/about');
                onClick && onClick();
                }}
                className={`${styles.item} ${activeRoute === '/about' ? styles.active : ''}`}
            >
                Apie mus
            </Link>
            <Link
                href="/contacts"
                onClick={() => {
                setActiveRoute('/contacts');
                onClick && onClick();
                }}
                className={`${styles.item} ${activeRoute === '/contacts' ? styles.active : ''}`}
            >
                Kontaktai
            </Link>
        </nav>
    );
}