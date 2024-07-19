import styles from "@/app/page.module.css";

const SectionIntroduction = ({ name }: { name: string; }) => (
    <section className={styles.section}>
        <h2 className={styles.subtitle}>{name}</h2>
        <p className={styles.paragraph}>
            Táxi para a cidade de <strong>{name}</strong>, temos larga experiência trabalhando nas cidades, conhecendo muito bem as ruas, hotéis e pontos turísticos mais conhecidos!
        </p>
    </section>
);

export default SectionIntroduction;
