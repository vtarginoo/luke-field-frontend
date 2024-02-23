// NavBar.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import SideNavBar from "../components/SideNavBar";
import { withRecoilFlow } from "storybook-addon-recoil-flow/dist/decorator"; // Importe o decorator

const meta = {
  title: "Componente/SideNavBar",
  component: SideNavBar,
  decorators: [withRecoilFlow], // Adicione o decorator aqui antes de outros decorators
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof SideNavBar>; // Corrija a tipagem aqui

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "SideNavBar",
  },
};
