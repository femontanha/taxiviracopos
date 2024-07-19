import SectionContact from "@/components/sectionContact";
import styles from "../page.module.css";
import type { Metadata } from "next";
 
export const metadata: Metadata = {
  title: 'Taxi Viracopos - Aeroporto Guarulhos | Taxi Viracopos | Taxi para executivos e viagens',
  description: 'Taxi para Aeroporto de Guarulhos, viracopos para Aeroporto de Guarulhos, Aeroporto de Guarulhos para viracopos taxi, promoção',
  openGraph: {
    title: 'Taxi Viracopos - Aeroporto Guarulhos | Taxi Viracopos | Taxi para executivos e viagens',
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
        <h2 className={styles.subtitle}>Aeroporto de Guarulhos</h2>
        <p className={styles.paragraph}>
            Taxi para/do <strong>aeroporto de Guarulhos</strong>, temos larga experiência trabalhando em aeroportos. Aguardamos no desembarque com placa de identificação da empresa.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Foco Principal</h2>
        <ul className={styles.list}>
            <li>Recepcionar clientes que chegam ao aeroporto;</li>
            <li>Transportá-los à cidades do interior de São Paulo (empresas/hotéis/residências);</li>
            <li>Aguardamos em caso de retorno, cobrando somente hora parada.</li>
        </ul>
      </section>
      <SectionContact />
    </main>
  );
}
