import SectionIntroduction from "@/components/sectionIntroduction";
import SectionFocus from "@/components/sectionFocus";
import SectionMoreInformation from "@/components/sectionMoreInformation";
import SectionContact from "@/components/sectionContact";
import styles from "@/app/page.module.css";
import type { Metadata } from "next";
 
export const metadata: Metadata = {
  title: 'Taxi Viracopos - Brotas | Taxi Viracopos | Taxi para executivos e viagens',
  description: 'Taxi para Brotas, viracopos para Brotas, Brotas para viracopos taxi, promoção',
  openGraph: {
    title: 'Taxi Viracopos - Brotas | Taxi Viracopos | Taxi para executivos e viagens',
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
      <SectionIntroduction name="Brotas" />
      <SectionFocus />
      <SectionMoreInformation distance="171km / 2:30 hs" />
      <SectionContact />
    </main>
  );
}
