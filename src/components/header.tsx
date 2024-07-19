import Link from "next/link";

import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <h1 className={styles.title}>
                    <span>Táxi</span> Viracopos
                </h1>
            </Link>
            <h2 className={styles.subtitle}>Viagens executivas e comuns</h2>
            <p className={styles.text}>Viracopos, Guarulhos, Campinas, Indaiatuba e região</p>
        </header>
    );
}

export default Header;
