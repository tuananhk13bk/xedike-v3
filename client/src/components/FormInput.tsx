import * as React from "react";
import { Form, Input } from "antd";

interface IFormInputProps {
  autoFocus: boolean;
  size: any;
  type: string;
  min?: string;
  max?: string;
  step?: string;
  prefix: any;
  name: string;
  placeholder: string;
  value: string;
  errorMessage: string;
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
        min={props.min ? props.min : ""}
        max={props.max ? props.max : ""}
        step={props.step ? props.step : ""}
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
