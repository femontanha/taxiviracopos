import styles from "../page.module.css";
import type { Metadata } from "next";
 
export const metadata: Metadata = {
  title: 'Aceitamos Cartão | Taxi Viracopos | Taxi para executivos e viagens',
  description: 'Viracopos, Guarulhos, Campinas, Indaiatuba e região',
  openGraph: {
    title: 'Aceitamos Cartão | Taxi Viracopos | Taxi para executivos e viagens',
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
        <h2 className={styles.subtitle}>Tipos de pagamento</h2>
        <p className={styles.paragraph}>Aceitamos vários tipos de pagamentos</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Cartões</h2>
        <p className={styles.paragraph}>
            Visa, Mastercard, American Express, Soro Cred, Elo, Diners Club, Agiplan, Aura, Banes Card, Cabal, Mais!, Hipercard, Discover, Credz
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Dinheiro</h2>
        <p className={styles.paragraph}>Pagamento à vista</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Boleto Quinzenal</h2>
        <p className={styles.paragraph}>Somente empresas</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Pix</h2>
        <p className={styles.paragraph}>Pagamento à vista</p>
      </section>
    </main>
  );
}
