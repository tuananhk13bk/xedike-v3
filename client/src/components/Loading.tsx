import * as React from "react";
import { Spin } from "antd";

interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = props => {
  return (
    <div className="loading h-100 d-flex align-items-center justify-content-center">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
