import { HeroHome } from "@/components/home/HeroHome";
import { Filosofia } from "@/components/home/Filosofia";
import { MisionVision } from "@/components/home/MisionVision";
import { Valores } from "@/components/home/Valores";
import { LlamadoAccion } from "@/components/home/LlamadoAccion";
import { QuienesSomos } from "@/components/about/QuienesSomos";
import { HistoriaEmpresa } from "@/components/about/HistoriaEmpresa";
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