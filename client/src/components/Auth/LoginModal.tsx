import * as React from "react";
import { Modal, Form, Icon, Button, Checkbox } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import { Link } from "react-router-dom";
import FormInput from "../FormInput";
import validateLoginInput from "../../utils/validator/login";

export interface ILoginModalProps {
  loginIsOpen: boolean;
  toggleLoginModal: () => { type: string };
}

export default class LoginModal extends React.Component<ILoginModalProps, any> {
  initState = {
    username: "",
    password: "",
    errors: {
      username: "",
      password: ""
    }
  };
  state = this.initState;

  handleInputChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value, errors: {} });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    const { username, password } = this.state;

    const errors = validateLoginInput({ username, password });

    this.setState({ errors });
  };

  clearAllInternalStates = () => {
    this.setState(this.initState);
  };

  handleCloseModal = () => {
    this.props.toggleLoginModal();
    this.clearAllInternalStates();
  };

  public render() {
    const { loginIsOpen } = this.props;
    return (
      <Modal
        visible={loginIsOpen}
        footer={false}
        onCancel={this.handleCloseModal}
      >
        <div className="text-center my-5">
          <Title level={4}>Dang nhap</Title>
          <Text>Ban chua co tai khoan?</Text>
          <Link to="/register" className="ml-1 no-decoration">
            Dang ky
          </Link>
        </div>
        <Text className="d-none mb-2" type="danger">
          User or password are incorrect
        </Text>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <FormInput
            autoFocus={true}
            size="large"
            type="text"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
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
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            name="password"
            placeholder="Password"
            value={this.state.password}
            errorMessage={this.state.errors.password}
            onChange={this.handleInputChange}
          />
          <Form.Item>
            <div className="d-flex flex-row justify-content-between">
              <Checkbox>Remember me</Checkbox>
              <Link to="/forgot-password">Forgot password</Link>
            </div>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="btn-block"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
