import { Meta, StoryObj } from "@storybook/react";
import { withRecoilFlow } from "storybook-addon-recoil-flow/dist/decorator";
import NewOSButton from "../components/NewOSButton"; // Certifique-se de importar o tipo também
import { IButtonNewOS } from "../interfaces/IButtonNewOS";

const meta: Meta<IButtonNewOS> = {
  title: "Componente/NewOSButton",
  component: NewOSButton,
  decorators: [withRecoilFlow],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    collapsed: { control: "boolean" },
    nomecompleto: { control: "text" },
    nomecurto: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    collapsed: false,
    nomecompleto: "texto expandido",
    nomecurto: "texto curto",
  },
};
