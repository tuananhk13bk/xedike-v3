import React from "react";
import { Layout } from "antd";
import NavbarContainer from "../containers/NavbarContainer";
import FooterLayout from "./FooterLayout";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Layout className="layout">
      <NavbarContainer />
      {children}
      <FooterLayout />
    </Layout>
  );
};

export default MainLayout;
