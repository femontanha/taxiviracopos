import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata } from "next";
 
export const metadata: Metadata = {
  title: 'Taxi Viracopos para executivos e viagens',
  description: 'Viracopos, Guarulhos, Campinas, Indaiatuba e região',
  openGraph: {
    title: 'Taxi Viracopos para executivos e viagens',
    locale: 'pt_BR',
    type: 'article',
    url: 'https://taxiviracopos.taxi.br',
    siteName: 'Taxi Viracopos | Taxi para executivos e viagens | Viracopos, Guarulhos, Campinas, Indaiatuba e região',
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.img}
        src="/spin.jpg"
        width={1200}
        height={762}
        alt="Carro Chevrolet Spin prata"
      />
      <section className={styles.section}>
        <p className={styles.paragraph}>
          Preços especiais para empresas.
        </p>
        <p className={styles.paragraph}>
          Nós auxiliamos nossos clientes com nossa experiência em:
        </p>
      </section>
      
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Aeroportos</h2>
        <p className={styles.paragraph}>Levar e buscar passageiros nos aeroportos. Aeroporto de Guarulhos, Congonhas e Viracopos.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Exterior</h2>
        <p className={styles.paragraph}>Visitantes ou funcionários, nacionais ou estrangeiros.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Metrópole</h2>
        <p className={styles.paragraph}>Conhecimento das principais ruas de São Paulo/ Campinas e região.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Hotéis</h2>
        <p className={styles.paragraph}>Conhecimento dos principais Hotéis de toda Região.</p>
      </section>
    </main>
  );
}
