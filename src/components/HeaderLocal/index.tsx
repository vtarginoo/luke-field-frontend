import React from "react";
import styled from "styled-components";
import { Menu } from "antd";
import { useRecoilValue } from "recoil";
import { listaNavItensHeader } from "../../state/atomNav";

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  border-radius: 8px;
  z-index: 998 !important;
`;

const HeaderContent = styled.div`
  text-align: center;
  position: fixed;
  width: 95%;
  flex-direction: flex-end;
  z-index: 998 !important;
`;

const StyledMenu = styled(Menu)`
  justify-content: flex-end;
  position: relative;
  padding-right: 3rem;
`;

const HeaderLocal: React.FC = () => {
  const navItemsHeader = useRecoilValue(listaNavItensHeader);

  return (
    <StyledHeader>
      <HeaderContent>
        <StyledMenu
          mode="horizontal"
          items={navItemsHeader}
        />
      </HeaderContent>
    </StyledHeader>
  );
};

export default HeaderLocal;
