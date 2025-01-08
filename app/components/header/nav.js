import Link from 'next/link';

export default function NavMenu({className, onClick, setActiveRoute, activeRoute}){
    return(
        <nav className={`${className}`}>
            <Link
                href="/"
                onClick={() => {
                setActiveRoute('/');
                onClick && onClick();
                }}
                className={`menu-item ${activeRoute === '/' ? 'active' : ''}`}
            >
                Pagrindinis
            </Link>
            <Link
                href="/menu"
                onClick={() => {
                setActiveRoute('/menu');
                onClick && onClick();
                }}
                className={`menu-item ${activeRoute === '/menu' ? 'active' : ''}`}
            >
                Meniu
            </Link>
            <Link
                href="/about"
                onClick={() => {
                setActiveRoute('/about');
                onClick && onClick();
                }}
                className={`menu-item ${activeRoute === '/about' ? 'active' : ''}`}
            >
                Apie mus
            </Link>
            <Link
                href="/contacts"
                onClick={() => {
                setActiveRoute('/contacts');
                onClick && onClick();
                }}
                className={`menu-item ${activeRoute === '/contacts' ? 'active' : ''}`}
            >
                Kontaktai
            </Link>
        </nav>
    );
}