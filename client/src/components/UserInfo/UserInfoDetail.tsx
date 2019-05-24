import * as React from "react";
import { Card, Icon, Button } from "antd";
import Title from "antd/lib/typography/Title";

export interface IUserInfoDetailProps {}

export default class UserInfoDetail extends React.Component<
  IUserInfoDetailProps,
  any
> {
  public render() {
    return (
      <Card>
        <div className="d-flex flex-row align-items-center">
          <Icon type="user" style={{ fontSize: 25 }} className="text-primary" />
          <Title level={4} className="mb-0 ml-4">
            Personal Info
          </Title>
          <Button className="ml-auto" type="primary" size="large">
            <Icon type="edit" />
            Edit
          </Button>
        </div>
        <hr />
        sdf
      </Card>
    );
  }
}
