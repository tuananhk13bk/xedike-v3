import * as React from "react";
import { Form, Input } from "antd";

interface IFormInputProps {
  autoFocus: boolean;
  size: any;
  type: string;
  prefix?: any;
  name: string;
  placeholder: string;
  value: string;
  errorMessage?: string;
  onChange: (e: any) => void;
}

const FormInput: React.FunctionComponent<IFormInputProps> = props => {
  return (
    <Form.Item
      validateStatus={props.errorMessage ? "error" : ""}
      help={props.errorMessage}
    >
      <Input
        autoFocus={props.autoFocus}
        size={props.size}
        type={props.type}
        prefix={props.prefix}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </Form.Item>
  );
};

export default FormInput;
