import styles from "@/app/page.module.css";

const SectionMoreInformation = ({ distance }: { distance: string; }) => (
    <section className={styles.section}>
        <h2 className={styles.subtitle}>Mais Informações</h2>
        <ul className={styles.list}>
            <li>Do aeroporto de viracopos para cidade tem: {distance}</li>
        </ul>
    </section>
);

export default SectionMoreInformation;
