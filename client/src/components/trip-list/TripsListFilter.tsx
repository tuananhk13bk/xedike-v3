import * as React from "react";
import { Card, Select, DatePicker, InputNumber, Icon, Checkbox } from "antd";
import Title from "antd/lib/typography/Title";

const Option = Select.Option;

export interface ITripsListFilterProps {}

export default class TripsListFilter extends React.Component<
  ITripsListFilterProps,
  any
> {
  public render() {
    return (
      <Card>
        Filter
        <Select className="btn-block">
          <Option value="binhdinh">Binh Dinh</Option>
        </Select>
        <Select className="btn-block">
          <Option value="binhdinh">Binh Dinh</Option>
        </Select>
        <DatePicker
          size="large"
          className="btn-block"
          placeholder="Departure Time"
        />
        <InputNumber
          prefix="hahaha"
          className="btn-block"
          size="large"
          min={1}
          max={9}
          defaultValue={1}
        />
        <hr />
        <div className="d-flex flex-column justify-content-between align-items-center">
          <Title className="d-block" level={4}>
            Trip Type
          </Title>
          <Checkbox className="d-block">Pick up at home</Checkbox>
          <Checkbox className="d-block">Pick up at station</Checkbox>
        </div>
      </Card>
    );
  }
}
