import * as React from "react";
import Title from "antd/lib/typography/Title";
import { Select } from "antd";
const Option = Select.Option;

const Landing: React.FC = () => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <Title level={1} className="text-white" style={{}}>
              Start your trip now
            </Title>
            <Title level={4} className="text-white font-weight-normal">
              There are 1168 memebers nationwide
            </Title>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
