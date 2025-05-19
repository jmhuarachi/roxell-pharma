import { HeroFarmacovigilancia } from "@/client/components/farmacovigilancia/HeroFarmacovigilancia";
import { QueEsFarmacovigilancia } from "@/client/components/farmacovigilancia/QueEsFarmacovigilancia";
import { ProcesoFarmacovigilancia } from "@/client/components/farmacovigilancia/ProcesoFarmacovigilancia";
import { ReportarEvento } from "@/client/components/farmacovigilancia/ReportarEvento";
import { CompromisoSeguridad } from "@/client/components/farmacovigilancia/CompromisoSeguridad";
import { LlamadoAccionFarmacovigilancia } from "@/client/components/farmacovigilancia/LlamadoAccionFarmacovigilancia";
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

