import { atom } from "recoil";
import { INavItem } from "../interfaces/INavItem";
import { Avatar } from "antd";
import {
  HomeOutlined,
  PieChartOutlined,
  ContactsOutlined,
  TeamOutlined,
  CheckSquareOutlined,
  DollarOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ITabOsDetalhes } from "../interfaces/ITabOsDetalhes";

export const listaNavItens = atom<INavItem[]>({
  key: "listaNavItensState",
  default: [
    {
      key: 1,
      label: "Ordens de Serviço",
      icon: <HomeOutlined />,
      path: "/ordens-de-servico",
    },
    {
      key: 2,
      label: "Dashboard",
      icon: <PieChartOutlined />,
      path: "/ordens-de-servico",
    },
    {
      key: 3,
      label: "Clientes",
      icon: <ContactsOutlined />,
      path: "/ordens-de-servico",
    },
    {
      key: 4,
      label: "Instaladores",
      icon: <TeamOutlined />,
      path: "/ordens-de-servico",
    },
    {
      key: 5,
      label: "Checklists",
      icon: <CheckSquareOutlined />,
      path: "/ordens-de-servico",
    },
    {
      key: 6,
      label: "Financeiro",
      icon: <DollarOutlined />,
      path: "/ordens-de-servico",
    },
  ],
});

export const listaNavItensHeader = atom<INavItem[]>({
  key: "listaNavItensHeaderState",
  default: [
    {
      key: 1,

      icon: <BellOutlined />,
    },
    {
      key: 2,

      icon: (
        <Avatar
          size="large"
          icon={<UserOutlined />}
        />
      ),
    },
  ],
});

export const listaTabOSDetalhes = atom<ITabOsDetalhes[]>({
  key: "listaTabOSDetalhesState",
  default: [
    {
      key: "1",
      label: "Informações Gerais",
      path: "/info-geral",
    },
    {
      key: "2",
      label: "Teste",
      path: "/testes",
    },
    {
      key: "3",
      label: "Histórico",
      path: "/historico",
    },
  ],
});
