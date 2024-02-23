import { Meta, StoryObj } from "@storybook/react";
import { withRecoilFlow } from "storybook-addon-recoil-flow/dist/decorator";
import FormNewOS from "../components/FormNewOS";

const meta: Meta = {
  title: "Componente/FormNewOS",
  component: FormNewOS,
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
