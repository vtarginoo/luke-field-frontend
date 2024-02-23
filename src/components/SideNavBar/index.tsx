import styled from "styled-components";
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import logoCollapsed from "../../assets/images/logoluke-collapsed.png";
import logoExpanded from "../../assets/images/logoluke-expanded.png";
import { listaNavItens } from "../../state/atomNav";
import { useRecoilValue } from "recoil";
import NewOSButton from "../NewOSButton";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

interface SiderContentProps {
  collapsed: boolean;
}

const SiderContainer = styled.div<SiderContentProps>`
  position: fixed; /* ou position: fixed; */
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1100;
  background-color: white;
  width: ${({ collapsed }) => (collapsed ? "80px" : "13rem")};
`;

const StyledSider = styled(Sider)`
  text-align: center;
  background-color: white !important;
  position: relative;
`;

const SiderContent = styled.div<SiderContentProps>`
  background-color: white !important;
  text-align: center;
  position: absolute;
  height: 100%;
  width: ${({ collapsed }) => (collapsed ? "80px" : "13rem")};
  z-index: 1000;
`;

const LogoImage = styled.img`
  padding: 0.5rem;
  width: auto;
  max-width: 100%;
  height: auto;
  transition: width 0.3s ease;
`;

const TriggerButton = styled.button`
  bottom: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  color: #001529;
`;

const SideNavBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const logoSrc = collapsed ? logoCollapsed : logoExpanded;
  const navItems = useRecoilValue(listaNavItens);

  const handleCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <SiderContainer collapsed={collapsed}>
      <StyledSider
        collapsible
        collapsed={collapsed}
        onCollapse={handleCollapse}
        trigger={null} // Definindo trigger como null para personalizar
      >
        <SiderContent collapsed={collapsed}>
          <Link to="/ordens-de-servico">
            <LogoImage
              src={logoSrc}
              alt="Logo"
            />
          </Link>

          <Link to="/ordens-de-servico/new">
            <NewOSButton
              collapsed={collapsed}
              nomecompleto={"+ Abrir nova OS"}
              nomecurto={"+"}
            />
          </Link>

          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
          >
            {navItems.map((item) => (
              <Menu.Item
                key={item.key}
                icon={item.icon}
              >
                <Link to={item.path as string}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>

          <TriggerButton onClick={() => handleCollapse(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </TriggerButton>
        </SiderContent>
      </StyledSider>
    </SiderContainer>
  );
};

export default SideNavBar;
