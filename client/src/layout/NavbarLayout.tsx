import * as React from "react";
import { Link } from "react-router-dom";
import LoginModalContainer from "../containers/LoginModalContainer";
import RegisterModalContainer from "../containers/RegisterModalContainer";

interface INavbarLayoutProps {
  toggleLoginModal: () => { type: string };
  toggleRegisterModal: () => { type: string };
}

export default class NavbarLayout extends React.Component<
  INavbarLayoutProps,
  any
> {
  componentDidMount() {
    console.log(window.location.origin);
  }
  public render() {
    return (
      <nav className="navbar-layout">
        <div className="container">
          <div className="d-flex flex-row align-item-stretch">
            <Link
              to="/"
              className="menu-logo d-flex align-items-center justify-content-center"
            >
              <img
                src={require("../assets/img/logo_menu.png")}
                alt="Menu Logo"
              />
            </Link>
            <Link to="/trips-list" className="nav-item nav-trips-list">
              <span>Trips List</span>
            </Link>
            <div
              className="nav-item nav-item-login ml-auto d-md-flex"
              onClick={this.props.toggleLoginModal}
            >
              Login
            </div>
            <div
              onClick={this.props.toggleRegisterModal}
              className="nav-item nav-item-register d-md-flex"
            >
              <div className="nav-item-active">Register</div>
            </div>
            <div className="fixed-bottom fixed-bottom-item d-md-none">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <button
                      onClick={this.props.toggleLoginModal}
                      className="btn btn-outline-light btn-block"
                    >
                      Login
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      onClick={this.props.toggleRegisterModal}
                      className="btn btn-primary btn-block"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LoginModalContainer />
        <RegisterModalContainer />
      </nav>
    );
  }
}
