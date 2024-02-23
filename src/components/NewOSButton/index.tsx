import styled from "styled-components";
import React from "react";
import { Button } from "antd";
import { IButtonNewOS } from "../../interfaces/IButtonNewOS";

const StyledButton = styled(Button)<IButtonNewOS>`
  background-color: #263c81;
  color: #fff;
  transition: background-color 0.3s ease;
  margin-top: 3px;
  margin-bottom: 6px;

  &:hover {
    background-color: #3498db;
    cursor: pointer;
  }
`;

const NewOSButton: React.FC<IButtonNewOS> = ({
  collapsed,
  nomecompleto,
  nomecurto,
}) => (
  <StyledButton
    collapsed={collapsed}
    type="primary"
    nomecompleto="texto expandido"
    nomecurto="texto curto"
  >
    {collapsed ? nomecurto : nomecompleto}
  </StyledButton>
);

export default NewOSButton;
