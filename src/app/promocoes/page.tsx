import styles from "../page.module.css";
import type { Metadata } from "next";
 
export const metadata: Metadata = {
  title: 'Taxi Viracopos - Promoções | Taxi Viracopos | Taxi para executivos e viagens',
  description: 'Viracopos, Guarulhos, Campinas, Indaiatuba e região',
  openGraph: {
    title: 'Taxi Viracopos - Promoções | Taxi Viracopos | Taxi para executivos e viagens',
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
        <h2 className={styles.subtitle}>Promoções</h2>
        <p className={styles.paragraph}>Todas as promoções estão suspensas por enquanto.</p>
      </section>
    </main>
  );
}
