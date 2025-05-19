import { HeroFarmacovigilancia } from "@/components/farmacovigilancia/HeroFarmacovigilancia";
import { QueEsFarmacovigilancia } from "@/components/farmacovigilancia/QueEsFarmacovigilancia";
import { ProcesoFarmacovigilancia } from "@/components/farmacovigilancia/ProcesoFarmacovigilancia";
import { ReportarEvento } from "@/components/farmacovigilancia/ReportarEvento";
import { CompromisoSeguridad } from "@/components/farmacovigilancia/CompromisoSeguridad";
import { LlamadoAccionFarmacovigilancia } from "@/components/farmacovigilancia/LlamadoAccionFarmacovigilancia";
import { Head } from "@inertiajs/react";

const FarmacovigilanciaPage = () => {
  return (
    <>
    <Head title="Farmacovigilancia" />
    <div className="bg-white">
      <HeroFarmacovigilancia />
      <QueEsFarmacovigilancia />
      <ProcesoFarmacovigilancia />
      <ReportarEvento />
      <CompromisoSeguridad />
      <LlamadoAccionFarmacovigilancia />
    </div>
    </>
  );
};

export default FarmacovigilanciaPage;

