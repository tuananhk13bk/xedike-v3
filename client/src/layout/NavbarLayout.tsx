import * as React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import LoginModalContainer from "../containers/LoginModalContainer";
import RegisterModalContainer from "../containers/RegisterModalContainer";

const { Header } = Layout;

interface INavbarLayoutProps {
  toggleLoginModal: () => { type: string };
  toggleRegisterModal: () => { type: string };
}

export default class NavbarLayout extends React.Component<
  INavbarLayoutProps,
  any
> {
  public render() {
    return (
      <div className="navbar-layout">
        <Header>
          <div className="container d-flex">
            <Link to="/">
              <img
                src="/img/logo_menu.png"
                alt="Logo Menu"
                width="170"
                height="auto"
              />
            </Link>
            <div className="d-flex align-items-center ml-auto">
              <a
                onClick={this.props.toggleLoginModal}
                className="no-decoration mr-4 d-block"
              >
                <span className="text-white">Dang nhap</span>
              </a>
              <a
                onClick={this.props.toggleRegisterModal}
                className="no-decoration d-flex align-items-center active"
              >
                <span className="text-white">Dang ki</span>
              </a>
            </div>
          </div>
        </Header>
        <LoginModalContainer />
        <RegisterModalContainer />
      </div>
    );
  }
}
