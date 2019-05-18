import * as React from "react";
import { Spin } from "antd";

interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = props => {
  return <Spin size="large" />;
};

export default Loading;
