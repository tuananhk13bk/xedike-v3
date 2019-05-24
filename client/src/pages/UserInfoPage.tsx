import * as React from "react";
import UserInfoTabs from "../components/UserInfo/UserInfoTabs";
import { Row, Col, Card, Icon, Button } from "antd";
import Title from "antd/lib/typography/Title";

interface IUserInfoPageProps {}

const UserInfoPage: React.FunctionComponent<IUserInfoPageProps> = props => {
  return (
    <div className="user-info">
      <div className="user-info-tabs bg-white">
        <div className="container">
          <UserInfoTabs />
          <Row gutter={32}>
            <Col md={8}>
              <Card>Phan</Card>
            </Col>
            <Col md={16} />
          </Row>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;
