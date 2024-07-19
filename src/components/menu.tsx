import Link from 'next/link'
import styles from "./menu.module.css";

const PAGES = [
    { name: 'Home', href: '/' },
    { name: 'Tipos de pagamento', href: '/tipos-de-pagamento' },
    { name: 'Promoções', href: '/promocoes' },
    { name: 'Contato', href: '/contato' },
];

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.list}>
                {PAGES.map((page) => (
                    <li key={page.name}>
                        <Link href={page.href}>{page.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;
