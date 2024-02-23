import React from "react";
import { Tag } from "antd";

interface StatusTagProps {
  status?: string;
}

const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  let color = "";

  switch (status) {
    case "Open":
      color = "#169BD7";
      break;
    case "Success":
      color = "green";
      break;
    case "Not Concluded":
      color = "red";
      break;
    case "In Progress":
      color = "geekblue";
      break;
    // Adicione mais casos conforme necessário

    default:
      color = "grey";
  }

  // Renderizar a tag apenas se o status estiver presente
  return status ? <Tag color={color}>{status}</Tag> : null;
};

export default StatusTag;
