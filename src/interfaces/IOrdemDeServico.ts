export interface IOrdemDeServico {
  key: React.Key;
  Data_criacao: Date | string;
  Data_agendamento: Date | string;
  OS: string;
  Posto: string;
  Instalador: string;
  Status: string;
  Stage: number;
}
