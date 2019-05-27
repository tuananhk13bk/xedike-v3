import * as React from "react";
import { Steps, Row, Col } from "antd";

const Step = Steps.Step;

interface ITripsListStepsProps {
  tripIdOnSelect: string;
}

const TripsListSteps: React.FunctionComponent<ITripsListStepsProps> = props => {
  return (
    <div className="trips-list-steps py-3">
      <div className="container">
        <Row>
          <Col span={16}>
            <Steps current={1}>
              <Step
                status="process"
                title="In Progress"
                description="This is a description."
              />
              <Step
                status="wait"
                title="In Progress"
                description="This is a description."
              />
              <Step
                status="wait"
                title="Waiting"
                description="This is a description."
              />
            </Steps>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TripsListSteps;
