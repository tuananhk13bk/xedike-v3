import * as React from "react";
import {
  Card,
  Select,
  DatePicker,
  InputNumber,
  Icon,
  Checkbox,
  Button,
  Slider
} from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import TimeSlider from "components/trip-list/TimeSlider";

const Option = Select.Option;

const DeparturePlaceholder = (): JSX.Element => {
  return (
    <div className="d-flex align-items-center">
      <Icon type="environment" />
      <small className="ml-2">Departure</small>
    </div>
  );
};

const DestinationPlaceholder = (): JSX.Element => {
  return (
    <div className="d-flex align-items-center">
      <Icon type="environment" />
      <small className="ml-2">Destination</small>
    </div>
  );
};

export interface ITripsListFilterProps {}

export default class TripsListFilter extends React.Component<
  ITripsListFilterProps,
  any
> {
  public render() {
    return (
      <Card className="trips-list-filter">
        <div className="d-flex align-items-center mb-3">
          <Text>Filter</Text>
          <a className="ml-auto text-primary">Clear filter</a>
        </div>
        <Select
          className="btn-block trips-list-filter-departure"
          placeholder={<DeparturePlaceholder />}
          size="large"
        >
          <Option value="binhdinh">Binh Dinh</Option>
        </Select>
        <Select
          className="btn-block trips-list-filter-destination"
          placeholder={<DestinationPlaceholder />}
          size="large"
        >
          <Option value="binhdinh">Binh Dinh</Option>
        </Select>
        <DatePicker
          size="large"
          className="btn-block trips-list-filter-date"
          placeholder="Departure Time"
        />
        <InputNumber
          className="btn-block"
          size="large"
          min={1}
          max={9}
          defaultValue={1}
        />
        <Button type="primary" className="mt-2 mb-4">
          <div className="d-flex align-items-center mx-auto">
            <Icon type="search" />
            <Text className="text-white ml-2">Search</Text>
          </div>
        </Button>
        <hr />
        <div className="mb-4">
          <Text className="d-block mb-2">Trip Type</Text>
          <Checkbox className="d-block mb-2">Pick up at home</Checkbox>
          <Checkbox className="d-block ml-0">Pick up at station</Checkbox>
        </div>
        <hr />
        <div>
          <Text className="d-block mb-2">Departure Time</Text>
          <TimeSlider />
        </div>
      </Card>
    );
  }
}
