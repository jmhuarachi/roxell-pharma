import { HeroHome } from "@/client/components/home/HeroHome";
import { Filosofia } from "@/client/components/home/Filosofia";
import { MisionVision } from "@/client/components/home/MisionVision";
import { Valores } from "@/client/components/home/Valores";
import { LlamadoAccion } from "@/client/components/home/LlamadoAccion";
import { QuienesSomos } from "@/client/components/about/QuienesSomos";
import { HistoriaEmpresa } from "@/client/components/about/HistoriaEmpresa";
import { Head } from "@inertiajs/react";

const HomePage = () => {
  return (
    <>
    <Head title="Inicio" />
    <div className="bg-white overflow-x-hidden">
      <HeroHome />
      <Filosofia />
      <QuienesSomos/>
      {/* <MisionVision /> */}
      <Valores />
      <HistoriaEmpresa/>
      <LlamadoAccion />
    </div>
    </>
    
    
  );
};

export default HomePage;