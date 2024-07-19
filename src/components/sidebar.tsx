import Link from 'next/link'
import styles from "./sidebar.module.css";

const PAGES = [
    { name: 'Aeroporto de Guarulhos', href: '/aeroporto-de-guarulhos' },
    { name: 'Aeroporto de Congonhas', href: '/aeroporto-de-congonhas' },
    { name: 'Araçatuba', href: '/aracatuba' },
    { name: 'Araraquara', href: '/araraquara' },
    { name: 'Atibaia', href: '/atibaia' },
    { name: 'Barretos', href: '/barretos' },
    { name: 'Bauru', href: '/bauru' },
    { name: 'Brotas', href: '/brotas' },
    { name: 'Campos do Jordão', href: '/campos-do-jordao' },
    { name: 'Indaiatuba', href: '/indaiatuba' },
    { name: 'Itu', href: '/itu' },
    { name: 'Jundiaí', href: '/jundiai' },
    { name: 'Marília', href: '/marilia' },
    { name: 'Ourinhos', href: '/ourinhos' },
    { name: 'Piracicaba', href: '/piracicaba' },
    { name: 'Poços de Caldas', href: '/pocos-de-caldas' },
    { name: 'Porto de Santos', href: '/porto-de-santos' },
    { name: 'Ribeirão Preto', href: '/ribeirao-preto' },
    { name: 'Salto', href: '/salto' },
    { name: 'São Carlos', href: '/sao-carlos' },
    { name: 'São José do Rio Preto', href: '/sao-jose-do-rio-preto' },
    { name: 'São José dos Campos', href: '/sao-jose-dos-campos' },
    { name: 'São Paulo', href: '/sao-paulo' },
    { name: 'Sorocaba', href: '/sorocaba' },
];

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <h2 className={styles.title}>Destinos</h2>
            <nav>
                <ul className={styles.list}>
                    {PAGES.map((page) => (
                        <li key={page.name}>
                            <Link href={page.href}>{page.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
