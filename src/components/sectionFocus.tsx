import styles from "@/app/page.module.css";

const SectionFocus = () => (
    <section className={styles.section}>
        <h2 className={styles.subtitle}>Foco Principal</h2>
        <ul className={styles.list}>
            <li>Recepcionar clientes que chegam ao aeroporto;</li>
            <li>Transportá-los à cidades, empresas/hotéis/residências;</li>
            <li>Aguardamos em caso de retorno, cobrando somente hora parada.</li>
        </ul>
    </section>
)

export default SectionFocus;
