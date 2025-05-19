import { HeroAbout } from "@/client/components/about/HeroAbout";
import { QuienesSomos } from "@/client/components/about/QuienesSomos";
import { HistoriaEmpresa } from "@/client/components/about/HistoriaEmpresa";
import { Sucursales } from "@/client/components/about/Sucursales";
import { CtaAbout } from "@/client/components/about/CtaAbout";
import { MisionVision } from "@/client/components/home/MisionVision";
import { Valores } from "@/client/components/home/Valores";
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