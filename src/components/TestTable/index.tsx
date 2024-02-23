import React, { useState } from "react";
import { Table, Button, Select, Upload, message } from "antd";
import {
  PlusOutlined,
  UploadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { UploadFile } from "antd/lib/upload/interface";

const { Option } = Select;

interface TestData {
  key: number;
  testName: string;
  status?: string;
  comprovacao?: UploadFile;
  motivoFalha?: string;
}

const TestTable: React.FC = () => {
  const [data, setData] = useState<TestData[]>([]);
  const [count, setCount] = useState(1);

  const handleAddRow = () => {
    const newData: TestData[] = [
      ...data,
      {
        key: count,
        testName: `Teste ${count}`,
      },
    ];

    setData(newData);
    setCount(count + 1);
  };

  const handleStatusChange = (value: string, record: TestData) => {
    const newData = data.map((item) => {
      if (item.key === record.key) {
        return {
          ...item,
          status: value,
          motivoFalha: value === "Falhou" ? undefined : item.motivoFalha,
        };
      }
      return item;
    });

    setData(newData);
  };

  const handleComprovacaoChange = (info: UploadFile, record: TestData) => {
    if (info) {
      if (info.status === "done") {
        const newData = data.map((item) => {
          if (item.key === record.key) {
            return {
              ...item,
              comprovacao: info,
            };
          }
          return item;
        });

        setData(newData);
      } else if (info.status === "error") {
        message.error(`${info.name} falhou ao ser enviado.`);
      }
    }
  };

  const handleDeleteRow = (key: number) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const columns = [
    {
      title: "Test Name",
      dataIndex: "testName",
      key: "testName",
      render: (text: string, record: TestData) => (
        <>
          {text}
          <Button
            type="link"
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteRow(record.key)}
          >
            Excluir
          </Button>
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text: string, record: TestData) => (
        <Select
          style={{ width: 120 }}
          value={text}
          onChange={(value) => handleStatusChange(value, record)}
        >
          <Option value="Sucesso">Sucesso</Option>
          <Option value="Falhou">Falhou</Option>
        </Select>
      ),
    },
    {
      title: "Comprovação",
      dataIndex: "comprovacao",
      render: (record: TestData) => (
        <Upload
          showUploadList={false}
          customRequest={({ onSuccess }) => {
            // Your custom upload logic here
            setTimeout(() => {
              onSuccess && onSuccess({});
            }, 0);
          }}
          onChange={(info) =>
            info.file && handleComprovacaoChange(info.file, record)
          }
        >
          <Button icon={<UploadOutlined />}>Enviar</Button>
        </Upload>
      ),
    },
    {
      title: "Motivo de Falha",
      dataIndex: "motivoFalha",
      render: (text: string, record: TestData) =>
        record.status === "Falhou" && (
          <Select
            style={{ width: 120 }}
            value={text}
            onChange={(value) =>
              setData(
                data.map((item) =>
                  item.key === record.key
                    ? { ...item, motivoFalha: value }
                    : item
                )
              )
            }
          >
            <Option value="Problema no Hardware">Problema no Hardware</Option>
            <Option value="Erro de Software">Erro de Software</Option>
            <Option value="Outro">Outro</Option>
          </Select>
        ),
    },
  ];

  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
      />
      <Button
        type="dashed"
        onClick={handleAddRow}
        icon={<PlusOutlined />}
        style={{ marginTop: 16 }}
      >
        Adicionar Linha
      </Button>
    </>
  );
};

export default TestTable;
