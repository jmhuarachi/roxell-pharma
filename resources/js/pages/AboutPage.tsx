import { HeroAbout } from "@/components/about/HeroAbout";
import { QuienesSomos } from "@/components/about/QuienesSomos";
import { HistoriaEmpresa } from "@/components/about/HistoriaEmpresa";
import { Sucursales } from "@/components/about/Sucursales";
import { CtaAbout } from "@/components/about/CtaAbout";
import { MisionVision } from "@/components/home/MisionVision";
import { Valores } from "@/components/home/Valores";
import { Head } from "@inertiajs/react";

const AboutPage = () => {
  return (
    
      <>
      <Head title="Nosotros" />
      <div className="bg-white">
        <HeroAbout />
        <QuienesSomos />
        <HistoriaEmpresa />
        {/* <MisionVision /> */}
        <Valores />
        <Sucursales />
        <CtaAbout />
      </div>
      </>
  );
};

export default AboutPage;