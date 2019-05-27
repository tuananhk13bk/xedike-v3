import * as React from "react";
import TripsListStepsContainer from "../containers/TripsListStepsContainer";
import TripsListContainer from "../containers/TripsListContainer";
import { Row, Col } from "antd";
import TripsListFilterContainer from "../containers/TripsListFilterContainer";

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
            <Col lg={18} sm={24}>
              <TripsListContainer />
            </Col>
            <Col lg={6}>
              <TripsListFilterContainer />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
