import { Meta, StoryObj } from "@storybook/react";
import { withRecoilFlow } from "storybook-addon-recoil-flow/dist/decorator";
import { IOrdemDeServico } from "../interfaces/IOrdemDeServico";
import OSTable from "../components/OSTable";

const meta: Meta<IOrdemDeServico> = {
  title: "Componente/OSTable",
  component: OSTable,
  decorators: [withRecoilFlow],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // Adicione argTypes conforme necessário
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}, // Adicione args conforme necessário
};
