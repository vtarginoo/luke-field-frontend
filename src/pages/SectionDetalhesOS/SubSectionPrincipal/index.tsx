import { Row, Col, Card, Space, Button } from "antd";
import {
  EditOutlined,
  UploadOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ordensDeServicoState } from "../../../state/atom";

const SubSectionPrincipal = () => {
  const { osNumero } = useParams();
  const ordensDeServico = useRecoilValue(ordensDeServicoState);
  const ordemDeServicoAtual = ordensDeServico.find((os) => os.OS === osNumero);

  return (
    <>
      <Row gutter={16}>
        {/*Primeira Coluna      */}
        <Col span={8}>
          <Card title="Informações do Solicitante">
            <Card title="Informações da Instalação">
              <Space direction="vertical">
                <div>
                  <UserOutlined />
                  Victor Targino
                </div>
                <div>
                  <PhoneOutlined />
                  21 996800927
                </div>
                <div>
                  <MailOutlined />
                  Victor.targino@conettec.com.br
                </div>
              </Space>
            </Card>
            <Card title="Informações do Cliente Solicitante">
              <Space direction="vertical">
                <div>
                  <UserOutlined />
                  Cliente Solicitante: Ticket Log
                </div>
              </Space>
            </Card>
          </Card>
        </Col>
        {/*Segunda Coluna       */}
        <Col span={8}>
          <Card title="Informações de Visita">
            {ordemDeServicoAtual ? (
              <Space direction="vertical">
                <div>
                  <UserOutlined />
                  Instalador: {ordemDeServicoAtual.Instalador}
                </div>
                <div>
                  <PhoneOutlined />
                  Posto: {ordemDeServicoAtual.Posto}
                </div>
                <div>
                  Data de Visita:{" "}
                  {ordemDeServicoAtual.Data_agendamento.toLocaleString()}
                </div>
              </Space>
            ) : (
              <div>Ordem de Serviço não encontrada</div>
            )}
          </Card>
        </Col>
        {/*Terceira Coluna       */}
        <Col span={8}>
          <Card>
            <Card
              title="Observações da OS"
              extra={
                <EditOutlined style={{ fontSize: 16, cursor: "pointer" }} />
              }
            >
              <Space direction="vertical">
                <div>
                  <EditOutlined />
                  <span style={{ cursor: "pointer" }}>
                    Clique aqui para editar
                  </span>
                </div>
              </Space>
            </Card>
            <Card title="Anexos importantes">
              <Button icon={<UploadOutlined />}>Anexar Item</Button>
            </Card>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SubSectionPrincipal;
