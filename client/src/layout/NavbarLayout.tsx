import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const NavbarLayout: React.FC = () => {
  return (
    <Header>
      <div className="container d-flex">
        <a href="/">
          <img src="/img/logo_menu.png" width="170" height="auto" />
        </a>
        <div className="d-flex align-items-center ml-auto">
          <a href="/register" className="no-decoration mr-4 d-block">
            <span className="text-white">Dang nhap</span>
          </a>
          <a
            href="/login"
            className="no-decoration d-flex align-items-center active"
          >
            <span className="text-white">Dang ki</span>
          </a>
        </div>
      </div>
    </Header>
  );
};

export default NavbarLayout;
