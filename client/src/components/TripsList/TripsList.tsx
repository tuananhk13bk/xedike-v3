import * as React from "react";
import { Card, Icon, Row, Col, Avatar, Rate } from "antd";
import data from "../../data";
import Text from "antd/lib/typography/Text";

interface ITripsListProps {}

const TripsList: React.FunctionComponent<ITripsListProps> = props => {
  return (
    <div className="trips-list">
      <Card
        className="trips-list-card"
        title={`${<Icon type="file-search" />}`}
        extra={<a href="#">More</a>}
      >
        {data.map(trip => (
          <Row key={trip.tripId} gutter={16}>
            <Col lg={6}>
              <Text strong>
                {trip.locationFrom} -> {trip.locationTo}
              </Text>
              <div className="d-flex flex-row align-items-center">
                <Icon type="calendar" />
                <Text>{trip.startTime}</Text>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex flex-row align-items-center">
                <Icon type="car" />
                <Text>
                  {trip.carBrand} {trip.carModel}
                </Text>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <Icon type="user" />{" "}
                  <Text>{`${trip.NumberOfSeats - trip.availableSeats}/${
                    trip.NumberOfSeats
                  }`}</Text>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <Icon type="car" /> <Text>Tan noi</Text>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex flex-row align-items-center">
                <Avatar icon="user" />
                <Text strong>{trip.driverFullName}</Text>
              </div>
              <Rate allowHalf defaultValue={trip.rate} />
            </Col>
            <Col lg={6} />
          </Row>
        ))}
      </Card>
    </div>
  );
};

export default TripsList;
