import { Meta, StoryObj } from "@storybook/react";
import HeaderLocal from "../components/HeaderLocal";
import { withRecoilFlow } from "storybook-addon-recoil-flow/dist/decorator";

const meta: Meta = {
  title: "Componente/HeaderLocal",
  component: HeaderLocal,
  decorators: [withRecoilFlow], // Adicione o decorator aqui antes de outros decorators
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#ff0000", // Exemplo de argumento (pode ser qualquer propriedade que você queira demonstrar)
  },
};
