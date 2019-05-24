import * as React from "react";
import { Tabs } from "antd";

const TabPane = Tabs.TabPane;

export interface IUserInfoTabsProps {}

export default class UserInfoTabs extends React.Component<
  IUserInfoTabsProps,
  any
> {
  public render() {
    return (
      <Tabs defaultActiveKey="1" className="bg-white" size="large">
        <TabPane tab="General Info" key="1" />
        <TabPane tab="My Trips" key="2" />
        <TabPane tab="Trips History" key="3" />
      </Tabs>
    );
  }
}
