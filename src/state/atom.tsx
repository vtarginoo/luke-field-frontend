import { atom } from "recoil";
import { IOrdemDeServico } from "../interfaces/IOrdemDeServico";

export const ordensDeServicoState = atom<IOrdemDeServico[]>({
  key: "ordensDeServicoState",
  default: [
    {
      key: "1",
      OS: "123",
      Posto: "Posto 1",
      Instalador: "Instalador 1",
      Data_criacao: "2024-01-01",
      Data_agendamento: "2024-01-01",
      Status: "Open",
      Stage: 1,
    },
    {
      key: "2",
      OS: "456",
      Posto: "Posto 2",
      Instalador: "Instalador 2",
      Data_criacao: "2023-12-31",
      Data_agendamento: "2023-12-31",
      Status: "Closed",
      Stage: 4,
    },
    {
      key: "3",
      OS: "789",
      Posto: "Posto 3",
      Instalador: "Instalador 3",
      Data_criacao: "2023-12-31",
      Data_agendamento: "2023-12-31",
      Status: "In Progress",
      Stage:3
    },
  ],
});
