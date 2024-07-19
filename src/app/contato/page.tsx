import SectionContact from "@/components/sectionContact";
import styles from "../page.module.css";
import type { Metadata } from "next";
 
export const metadata: Metadata = {
  title: 'Taxi Viracopos - Contato | Taxi Viracopos | Taxi para executivos e viagens',
  description: 'Viracopos, Guarulhos, Campinas, Indaiatuba e região',
  openGraph: {
    title: 'Taxi Viracopos - Contato | Taxi Viracopos | Taxi para executivos e viagens',
    locale: 'pt_BR',
    type: 'article',
    url: 'https://taxiviracopos.taxi.br',
    siteName: 'Taxi Viracopos | Taxi para executivos e viagens | Viracopos, Guarulhos, Campinas, Indaiatuba e região',
  },
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Contato</h2>
        <p className={styles.paragraph}>Obrigado por visitar Taxi Viracopos.</p>
        <p className={styles.paragraph}>Entre em contato conosco através de:</p>
      </section>
      <SectionContact />
    </main>
  );
}
