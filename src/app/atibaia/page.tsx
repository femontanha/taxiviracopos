import SectionIntroduction from "@/components/sectionIntroduction";
import SectionFocus from "@/components/sectionFocus";
import SectionMoreInformation from "@/components/sectionMoreInformation";
import SectionContact from "@/components/sectionContact";
import styles from "@/app/page.module.css";
import type { Metadata } from "next";
 
export const metadata: Metadata = {
  title: 'Taxi Viracopos - Atibaia | Taxi Viracopos | Taxi para executivos e viagens',
  description: 'Taxi para Atibaia, viracopos para Atibaia, Atibaia para viracopos taxi, promoção',
  openGraph: {
    title: 'Taxi Viracopos - Atibaia | Taxi Viracopos | Taxi para executivos e viagens',
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
      <SectionIntroduction name="Atibaia" />
      <SectionFocus />
      <SectionMoreInformation distance="84km / 1:30 hs" />
      <SectionContact />
    </main>
  );
}
