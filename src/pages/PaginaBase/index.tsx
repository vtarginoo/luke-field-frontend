import styled from "styled-components";
import { Layout } from "antd";
import SideNavBar from "../../components/SideNavBar";
import HeaderLocal from "../../components/HeaderLocal";
import { Outlet } from "react-router-dom";
// import ContentLocal from "../../components/ContentLocal";

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
  max-width: 100vw;
`;

const StyledSideNavBar = styled(SideNavBar)`
  min-height: 100vh;
  height: 100%;
`;

const StyledMainContent = styled.div`
  flex: 1; /* Ocupa o restante do espaço disponível */
  display: flex;
  flex-direction: column;
  overflow: auto;
  position: relative;
  margin-left: 80px;
  width: 100%;
`;

const StyledHeaderLocal = styled(HeaderLocal)`
  width: 100%;
  position: relative;
`;

const PaginaBase = () => {
  return (
    <>
      <StyledLayout>
        <StyledSideNavBar />
        <StyledMainContent>
          <StyledHeaderLocal />

          <section>
            <Outlet />
          </section>
        </StyledMainContent>
      </StyledLayout>
    </>
  );
};

export default PaginaBase;
