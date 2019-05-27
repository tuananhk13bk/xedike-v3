import * as React from "react";
import { Slider } from "antd";

export interface IAppProps {}

export default class App extends React.Component<IAppProps, any> {
  public render() {
    return (
      <div>
        <Slider
          defaultValue={[0, 24]}
          min={0}
          max={24}
          step={0.5}
          range
          className="mb-2"
        />
      </div>
    );
  }
}
