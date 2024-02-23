import { Navigate, Outlet, useParams } from "react-router-dom";
import ContentLocal from "../../components/ContentLocal";
import { useRecoilValue } from "recoil";
import { ordensDeServicoState } from "../../state/atom";
import TabOSDetalhes from "../../components/TabOSDetalhes";

const SectionDetalhesOS = () => {
  const { osNumero } = useParams(); // Obtém o número da OS dos parâmetros da URL
  const ordensDeServico = useRecoilValue(ordensDeServicoState);

  // Verifica se a OS existe no átomo
  const osDetails = ordensDeServico.find((os) => os.OS === osNumero);

  if (!osDetails) {
    // Se a OS não existir, redireciona para a lista de ordens-de-servico
    return <Navigate to="/ordens-de-servico" />;
  }

  return (
    <>
      <div>
        <ContentLocal
          pagetitle={osDetails.OS}
          statusTag={osDetails.Status}
        >
          <TabOSDetalhes />

          <Outlet />
        </ContentLocal>
      </div>
    </>
  );
};

export default SectionDetalhesOS;
