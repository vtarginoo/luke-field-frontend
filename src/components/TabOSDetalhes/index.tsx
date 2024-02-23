import React from "react";
import { Tabs } from "antd";
import { useRecoilValue } from "recoil";
import { Link, useParams, useLocation } from "react-router-dom";
import { listaTabOSDetalhes } from "../../state/atomNav";

const { TabPane } = Tabs;

const TabOSDetalhes: React.FC = () => {
  const tabItems = useRecoilValue(listaTabOSDetalhes);
  const { osNumero } = useParams<{ osNumero: string }>();
  const location = useLocation();

  console.log("Current Path:", location.pathname);

  const pathSegments = location.pathname.split("/").filter(Boolean);
  console.log("Path Segments:", pathSegments);

  const currentTab = pathSegments.pop();
  console.log("Current Tab:", currentTab);
  return (
    <Tabs defaultActiveKey={location.pathname}>
      {tabItems.map((tab) => (
        <TabPane
          key={tab.key}
          tab={
            <Link to={`/ordens-de-servico/${osNumero}${tab.path}`}>
              {tab.label}
            </Link>
          }
        >
          {/* Conteúdo da guia aqui, se necessário */}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default TabOSDetalhes;
