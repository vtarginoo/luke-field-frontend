import { Route, Routes } from "react-router-dom";
import PaginaBase from "../pages/PaginaBase";
import SectionListaOS from "../pages/SectionListaOS";
import SectionFormNewOS from "../pages/SectionFormNewOS";
import SectionDetalhesOS from "../pages/SectionDetalhesOS";
import SubSectionPrincipal from "../pages/SectionDetalhesOS/SubSectionPrincipal";
import SubSection2 from "../pages/SectionDetalhesOS/SubSection2";
import SubSection3 from "../pages/SectionDetalhesOS/SubSection3";

const Rotas = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<PaginaBase />}
      >
        <Route
          path="/ordens-de-servico"
          element={<SectionListaOS />}
        />

        <Route
          path="/ordens-de-servico/new"
          element={<SectionFormNewOS />}
        />

        <Route
          path="/ordens-de-servico/:osNumero"
          element={<SectionDetalhesOS />}
        >
          <Route
            path="/ordens-de-servico/:osNumero/info-geral"
            element={<SubSectionPrincipal />}
          ></Route>

          <Route
            path="/ordens-de-servico/:osNumero/testes"
            element={<SubSection2 />}
          ></Route>

          <Route
            path="/ordens-de-servico/:osNumero/historico"
            element={<SubSection3 />}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default Rotas;
