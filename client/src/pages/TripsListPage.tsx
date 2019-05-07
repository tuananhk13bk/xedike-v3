import * as React from "react";
import TripsListStepsContainer from "../containers/TripsListStepsContainer";
import TripsListContainer from "../containers/TripsListContainer";
import { Row, Col } from "antd";

export interface ITripsListPageProps {}

export default class TripsListPage extends React.Component<
  ITripsListPageProps,
  any
> {
  public render() {
    return (
      <div className="trips-list-page">
        <TripsListStepsContainer />
        <div className="container mt-4">
          <Row gutter={32}>
            <Col span={16}>
              <TripsListContainer />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
