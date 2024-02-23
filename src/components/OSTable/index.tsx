import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { IOrdemDeServico } from "../../interfaces/IOrdemDeServico";
import { useRecoilValue } from "recoil";
import { ordensDeServicoState } from "../../state/atom";
import { Link } from "react-router-dom";

const columns: TableColumnsType<IOrdemDeServico> = [
  {
    title: "OS",
    dataIndex: "OS",
    sorter: (a, b) => (a.OS as string).localeCompare(b.OS as string),
    sortDirections: ["descend", "ascend"],
    render: (os: string) => (
      <Link to={`/ordens-de-servico/${os}/info-geral`}>{os}</Link>
    ),
  },
  {
    title: "Posto",
    dataIndex: "Posto",
    sorter: (a, b) => (a.Posto as string).localeCompare(b.Posto as string),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Instalador",
    dataIndex: "Instalador",
    sorter: (a, b) =>
      (a.Instalador as string).localeCompare(b.Instalador as string),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Data OS",
    dataIndex: "Data_criacao",
  },
  {
    title: "Data Visita",
    dataIndex: "Data_agendamento",
  },
  {
    title: "Status",
    dataIndex: "Status",
  },
];

const onChange: TableProps<IOrdemDeServico>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const OSTable: React.FC = () => {
  const OsList = useRecoilValue(ordensDeServicoState);

  return (
    <Table
      columns={columns}
      dataSource={OsList}
      onChange={onChange}
    />
  );
};

export default OSTable;
