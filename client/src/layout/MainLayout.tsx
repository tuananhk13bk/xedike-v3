import * as React from "react";
import { Layout } from "antd";
import NavbarContainer from "../containers/NavbarContainer";
import FooterLayout from "../layout/FooterLayout";

interface IMainLayoutProps {}

const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({
  children
}) => {
  return (
    <Layout className="main-layout">
      <NavbarContainer />
      {children}
      <FooterLayout />
    </Layout>
  );
};

export default MainLayout;
