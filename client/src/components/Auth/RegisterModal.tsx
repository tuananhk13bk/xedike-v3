import * as React from "react";
import { Modal, Form, Input, Button, Row, Col } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import { Link } from "react-router-dom";
import FormInput from "../FormInput";
import validateRegisterInput from "../../utils/validator/register";

export interface IRegisterModalProps {
  registerIsOpen: boolean;
  toggleRegisterModal: () => { type: string };
}

export default class RegisterModal extends React.Component<
  IRegisterModalProps,
  any
> {
  initState = {
    registerPassenger: false,
    registerDriver: false,
    username: "",
    password: "",
    password2: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dobYear: "",
    errors: {
      username: "",
      password: "",
      password2: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      dobYear: ""
    }
  };

  state = this.initState;

  handleInputChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: this.initState.errors
    });
  };

  clearAllInternalStates = () => {
    this.setState(this.initState);
  };

  handleCloseModal = () => {
    this.setState({ registerPassenger: false, registerDriver: false }, () =>
      this.props.toggleRegisterModal()
    );
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    const {
      username,
      password,
      password2,
      firstName,
      lastName,
      phoneNumber,
      dobYear
    } = this.state;
    const errors = validateRegisterInput({
      username,
      password,
      password2,
      firstName,
      lastName,
      phoneNumber,
      dobYear
    });
    this.setState({ errors });
  };

  getModalTitle = (): React.ReactElement => {
    let modalTitle;
    if (this.state.registerPassenger && !this.state.registerDriver) {
      modalTitle = <Title level={4}>Dang ky tai khoan hanh khach</Title>;
    } else if (this.state.registerDriver && !this.state.registerPassenger) {
      modalTitle = <Title level={4}>Dang ky tai khoan tai xe</Title>;
    } else {
      modalTitle = <Title level={4}>Ban muon dang ky voi tai khoan</Title>;
    }
    return modalTitle;
  };

  getModalContent = (): React.ReactElement => {
    let modalContent;

    if (this.state.registerDriver || this.state.registerPassenger) {
      modalContent = (
        <Form className={`register-form`} onSubmit={this.handleSubmit}>
          <FormInput
            autoFocus={false}
            size="large"
            type="text"
            prefix={null}
            name="username"
            placeholder="Username"
            value={this.state.username}
            errorMessage={this.state.errors.username}
            onChange={this.handleInputChange}
          />
          <FormInput
            autoFocus={false}
            size="large"
            type="password"
            prefix={null}
            name="password"
            placeholder="Password"
            value={this.state.password}
            errorMessage={this.state.errors.password}
            onChange={this.handleInputChange}
          />
          <FormInput
            autoFocus={false}
            size="large"
            type="password"
            prefix={null}
            name="password2"
            placeholder="Confirm Password"
            value={this.state.password2}
            errorMessage={this.state.errors.password2}
            onChange={this.handleInputChange}
          />
          <Row gutter={16}>
            <Col span={12}>
              <FormInput
                autoFocus={false}
                size="large"
                type="text"
                prefix={null}
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                errorMessage={this.state.errors.lastName}
                onChange={this.handleInputChange}
              />
            </Col>
            <Col span={12}>
              <FormInput
                autoFocus={false}
                size="large"
                type="text"
                prefix={null}
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                errorMessage={this.state.errors.firstName}
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={16}>
              <FormInput
                autoFocus={false}
                size="large"
                type="text"
                prefix={null}
                name="phoneNumber"
                placeholder="Phone Number"
                value={this.state.phoneNumber}
                errorMessage={this.state.errors.phoneNumber}
                onChange={this.handleInputChange}
              />
            </Col>
            <Col span={8}>
              <FormInput
                autoFocus={false}
                size="large"
                type="number"
                min="1900"
                max="2019"
                step="1"
                prefix={null}
                name="dobYear"
                placeholder="Dob Year"
                value={this.state.dobYear}
                errorMessage={this.state.errors.dobYear}
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <Form.Item>
            <Text className="text-center d-block">
              Khi dang ky tai khoan, mac dinh ban da <strong>dong y</strong>
            </Text>
            <Text className="text-center d-block">
              voi cac <Link to="/">Dieu khoan</Link> va{" "}
              <Link to="/">Dieu kien hoat dong</Link> cua chung toi
            </Text>
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="btn-block"
            >
              Dang ky
            </Button>
          </Form.Item>
        </Form>
      );
    } else {
      modalContent = (
        <div className="d-flex flex-row justify-content-between">
          <div
            onClick={() => this.setState({ registerPassenger: true })}
            className="register-selection d-block no-decoration text-center"
          >
            <img src="/img/img_signup_passenger.png" />
            <Text strong className="d-block mt-4">
              Hanh khach
            </Text>
          </div>
          <div
            onClick={() => this.setState({ registerDriver: true })}
            className="register-selection d-block no-decoration text-center"
          >
            <img src="/img/img_signup_driver.png" />
            <Text strong className="d-block mt-4">
              Tai xe
            </Text>
          </div>
        </div>
      );
    }

    return modalContent;
  };

  public render() {
    return (
      <Modal
        visible={this.props.registerIsOpen}
        onCancel={this.handleCloseModal}
        footer={false}
        width={550}
      >
        <div className="register p-3">
          <div className="text-center my-5">
            {this.getModalTitle()}
            <Text>Ban da co tai khoan?</Text>
            <a href="/login" className="ml-1 no-decoration">
              Dang nhap
            </a>
          </div>
          {this.getModalContent()}
        </div>
      </Modal>
    );
  }
}
