import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import DashboardLayout from "../../components/dashboard/dashboardLayout";
import ResumoTab from "../../components/tabs/ResumoTab";
import ContatosTab from "../../components/tabs/ContatosTab";
import LigacoesTab from "../../components/tabs/LigacoesTab";
import MensagensTab from "../../components/tabs/MensagensTab";
import HistoricoTab from "../../components/tabs/HistoricoTab";
import YouTubeTab from "../../components/tabs/YouTubeTab";
import GaleriaTab from "../../components/tabs/GaleriaTab";
import LocalizacaoTab from "../../components/tabs/LocalizacaoTab";
import WhatsAppTab from "../../components/tabs/WhatsAppTab";
import InstagramTab from "../../components/tabs/InstagramTab";
import TinderTab from "../../components/tabs/TinderTab";
import AplicativosTab from "../../components/tabs/AplicativosTab";
import CameraTab from "../../components/tabs/CameraTab";
import EscutaTab from "../../components/tabs/EscutaTab";
import AccountTab from "../../components/tabs/AccountTab";
import DevicesTab from "../../components/tabs/DevicesTab";
import PlansTab from "../../components/tabs/PlansTab";

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [route, setRoute] = useState<string>("resumo");
0
  useEffect(() => {
    var { dashboard } = router.query;
    setRoute(dashboard.toString().toLowerCase());
  }, [router.query]);

  function switchPage() {
    switch (route) {
      case "resumo":
        return <ResumoTab />;
      case "contatos":
        return <ContatosTab />;
      case "ligacoes":
        return <LigacoesTab />;
      case "mensagens":
        return <MensagensTab />;
      case "historico":
        return <HistoricoTab />;
      case "youtube":
        return <YouTubeTab />;
      case "aplicativos":
        return <AplicativosTab />;
      case "galeria":
        return <GaleriaTab />;
      case "localizacao":
        return <LocalizacaoTab />;
      case "whatsapp":
        return <WhatsAppTab />;
      case "instagram":
        return <InstagramTab />;
      case "tinder":
        return <TinderTab />;
      case "camera":
        return <CameraTab />;
      case "escuta":
        return <EscutaTab />;
      case "dispositivos":
        return <DevicesTab />;
      case "conta":
        return <AccountTab />;
      case "planos":
        return <PlansTab />;
      default:
        return <ResumoTab />;
    }
  }

  return <DashboardLayout>{switchPage()}</DashboardLayout>;
};

export default DashboardPage;
