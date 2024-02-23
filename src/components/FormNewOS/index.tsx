import { Form, Select, DatePicker, Button } from "antd";

// Input, DatePicker

const FormNewOS: React.FC = () => (
  <>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Form>
        <Form.Item
          className="PsSelect"
          label="Prestador de Serviço"
          labelCol={{ span: 24 }}
          required
        >
          <Select>
            <Select.Option value="tec1">Cap Power</Select.Option>
            <Select.Option value="tec2">Globalterra</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          className="ClienteSelect"
          label="Cliente "
          labelCol={{ span: 24 }}
          required
        >
          <Select>
            <Select.Option value="cliente1">Ticket</Select.Option>
            <Select.Option value="cliente2">Vibra|BR</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          className="ClienteFSelect"
          label="Posto"
          labelCol={{ span: 24 }}
          required
        >
          <Select>
            <Select.Option value="clientef1">Posto Peixinho</Select.Option>
            <Select.Option value="clientef2">AutoPosto Bangkok</Select.Option>
            <Select.Option value="cliente3">Adicione...</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Data da Visita"
          className="ClienteFSelect"
          labelCol={{ span: 24 }}
          required
        >
          <DatePicker />
        </Form.Item>
      </Form>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "16px",
          position: "sticky",
          bottom: 0,
          textAlign: "right",
          zIndex: 1000,
        }}
      >
        <Button
          type="default"
          style={{ marginRight: "8px" }}
        >
          Cancelar
        </Button>
        <Button
          type="primary"
          style={{ marginRight: "8px" }}
        >
          Salvar e Abrir outra OS
        </Button>
        <Button type="primary">Salvar</Button>
      </div>
    </div>
  </>
);

export default FormNewOS;
