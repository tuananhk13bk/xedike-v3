import React from "react";
import { Layout } from "antd";
import NavbarLayout from "./NavbarLayout";
import FooterLayout from "./FooterLayout";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Layout className="layout">
      <NavbarLayout />
      {children}
      <FooterLayout />
    </Layout>
  );
};

export default MainLayout;
