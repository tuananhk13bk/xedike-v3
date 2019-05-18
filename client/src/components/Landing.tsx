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
              Bat dau chuyen di cua ban
            </Title>
            <Title level={4} className="text-white font-weight-normal">
              Đã có 1168 thành viên sử dụng dịch vụ trên toàn quốc
            </Title>
            <Select style={{ width: 200, height: 60 }} size="large">
              <Option value="danang">Da nang</Option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
