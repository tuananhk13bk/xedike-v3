import * as React from "react";
import { Modal, Form, Button, Row, Col, DatePicker } from "antd";
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
    username: null,
    password: null,
    password2: null,
    firstName: null,
    lastName: null,
    phone: null,
    dateOfBirth: null,
    errors: {
      username: null,
      password: null,
      password2: null,
      firstName: null,
      lastName: null,
      phone: null,
      dateOfBirth: null
    }
  };

  state = this.initState;

  setErrors = (errorValue: string, errorField: string) => {
    this.setState({
      ...this.state,
      errors: { ...this.state.errors, [errorField]: errorValue }
    });
  };

  handleInputChange = (e: any) => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newValue = { [fieldName]: fieldValue };
    this.setState(newValue, () =>
      this.setErrors(validateRegisterInput(this.state, fieldName), fieldName)
    );
  };

  handleDateChange = (date: any, dateString: any) => {
    this.setState({ dateOfBirth: dateString });
  };

  clearAllInternalStates = () => {
    this.setState(this.initState);
  };

  handleCloseModal = () => {
    this.props.toggleRegisterModal();
    this.clearAllInternalStates();
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
  };

  handleRegisterButtonStatus = (): boolean => {
    console.log(this.state);
    if (
      this.state.username &&
      this.state.password &&
      this.state.password2 &&
      this.state.firstName &&
      this.state.lastName &&
      this.state.phone &&
      this.state.dateOfBirth
    ) {
      return false;
    }
    return true;
  };

  getModalTitle = (): React.ReactElement => {
    let modalTitle;
    if (this.state.registerPassenger && !this.state.registerDriver) {
      modalTitle = <Title level={4}>Register passenger account</Title>;
    } else if (this.state.registerDriver && !this.state.registerPassenger) {
      modalTitle = <Title level={4}>Register driver account</Title>;
    } else {
      modalTitle = <Title level={4}>You want to register as</Title>;
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
            placeholder="Username*"
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
            placeholder="Password*"
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
            placeholder="Confirm Password*"
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
                placeholder="Last Name*"
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
                placeholder="First Name*"
                value={this.state.firstName}
                errorMessage={this.state.errors.firstName}
                onChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <FormInput
            autoFocus={false}
            size="large"
            type="text"
            prefix={null}
            name="phone"
            placeholder="Phone Number*"
            value={this.state.phone}
            errorMessage={this.state.errors.phone}
            onChange={this.handleInputChange}
          />
          <Form.Item>
            <DatePicker
              className="btn-block"
              size="large"
              placeholder="Date of birth*"
              onChange={this.handleDateChange}
            />
          </Form.Item>
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
              disabled={this.handleRegisterButtonStatus()}
            >
              Register
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
            <img
              src={require("../../assets/img/img_signup_passenger.png")}
              alt="Signup Passenger"
            />
            <Text strong className="d-block mt-4">
              Passenger
            </Text>
          </div>
          <div
            onClick={() => this.setState({ registerDriver: true })}
            className="register-selection d-block no-decoration text-center"
          >
            <img
              src={require("../../assets/img/img_signup_driver.png")}
              alt="Signup Driver"
            />
            <Text strong className="d-block mt-4">
              Driver
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
            <Text>Already have an account?</Text>
            <Link to="/login" className="ml-1 no-decoration">
              Login
            </Link>
          </div>
          {this.getModalContent()}
        </div>
      </Modal>
    );
  }
}
