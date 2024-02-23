import React from "react";
import styled from "styled-components";
import { Breadcrumb, Layout } from "antd";
import StatusTag from "../TagStatus";

const { Content } = Layout;

interface ContentLocalProps {
  pagetitle?: string;
  children?: React.ReactNode; // Adicionando children como React.ReactNode
  statusTag?: string;
}

const StyledContent = styled(Content)`
  padding: 0 48px;

  .ant-breadcrumb {
    margin: 16px 0;
  }

  .pageTitle {
    padding: 0.3rem;
    margin: 0px;
    margin-block-start: 0em;
    margin-block-end: 1em;
  }

  .content-container {
    padding: 1rem;
    min-height: 380px;
    background-color: #fff;
    border-radius: 16px;
  }
`;

const ContentLocal: React.FC<ContentLocalProps> = ({
  pagetitle,
  children,
  statusTag,
}) => {
  return (
    <StyledContent>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>{pagetitle}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="content-container">
        <div>
          <h2 className="pageTitle">
            {pagetitle} <StatusTag status={statusTag} />
          </h2>
        </div>
        {children}
      </div>
    </StyledContent>
  );
};

export default ContentLocal;
