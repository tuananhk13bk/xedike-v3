import * as React from "react";
import { Layout, Row, Col, Button } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import Landing from "../components/Landing";
const { Content } = Layout;
const OurNumberItem = ({
  number,
  title,
  detail
}: {
  number: string;
  title: string;
  detail: string;
}) => {
  return (
    <div className="d-flex flex-column align-items-">
      <Title level={2} className="text-primary font-weight-normal">
        {number}
      </Title>
      <Text strong className="text-white mb-2">
        {title}
      </Text>
      <Text className="text-white">{detail}</Text>
    </div>
  );
};

const HomePage = () => {
  return (
    <Content>
      <Landing />
      <div className="introduction">
        <div className="container">
          <Row>
            <Col md={24} lg={12} />
            <Col md={24} lg={12}>
              <Title level={4}>Bat dau chuyen xe cua ban</Title>
              <Text>
                Là người sẽ mang những chuyến xe cũng như những trải nghiệm cho
                Khách hàng. Các tài xế luôn là những người hiểu rõ Khách hàng
                cần những gì là tốt nhất. Tất nhiên, chúng tôi có những Quy định
                cụ thể để đảm bảo lợi ích lớn nhất cho tất cả các bên.
              </Text>
              <Button type="primary" size="large" className="d-block mt-4">
                Tro thanh tai xe
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <div className="why">
        <div className="container">
          <div className="why-header text-center mb-5">
            <Title level={4}>Tai sao su dung XEDIKE.VN</Title>
            <Text>
              Duoi day la mot trong nhung <Text strong>ly do</Text> cho viec lua
              chon
            </Text>
          </div>
          <Row gutter={32}>
            {[
              {
                image: require("../assets/img/img_trust.png"),
                title: "Tin tuong",
                detail:
                  "Bạn sẽ biết tài xế và bạn đồng hành của bạn là ai. Điều đó giúp bạn có những trải nghiệm tốt hơn trên hành trình của mình."
              },
              {
                image: require("../assets/img/img_safe.png"),
                title: "Chu dong",
                detail:
                  "Thời gian chờ, số ghế trống, giá cả, chất lượng tài xế, các đánh giá, … tất cả sẽ được hiển thị rõ ràng để bạn yên tâm đặt chuyến đi."
              },
              {
                image: require("../assets/img/img_love_car.png"),
                title: "Moi truong",
                detail:
                  "Mỗi 2 người đi chung một xe tương đương với việc trồng 4 cây xanh cho việc hấp thụ khí C02 trong vòng 1 năm."
              }
            ].map(item => (
              <Col key={item.title} lg={8} md={24}>
                <div className="d-flex flex-column align-items-center">
                  <img src={item.image} className="mb-4" alt={item.title} />
                  <Text strong className="mb-2">
                    {item.title}
                  </Text>
                  <Text>{item.detail}</Text>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="our-number">
        <div className="dark-overlay">
          <div className="container">
            <Row type="flex" align="middle" gutter={32}>
              <Col md={24} lg={12}>
                <img
                  src={require("../assets/img/img_mac.png")}
                  style={{ width: "90%", height: "90%" }}
                  alt="Macbook"
                />
              </Col>
              <Col className="align-self-start" md={24} lg={6}>
                <OurNumberItem
                  number="685"
                  title="Hanh khach"
                  detail="Hàng nghìn lượt khách tin tưởng chúng tôi để tìm những chuyến xe với chất lượng tốt nhất."
                />
                <br />
                <OurNumberItem
                  number="426"
                  title="Chuyen xe"
                  detail="Số liệu này cho chúng tôi biết bạn đã về đến nhà an toàn."
                />
              </Col>
              <Col className="align-self-start" md={24} lg={6}>
                <OurNumberItem
                  number="483"
                  title="Tai xe"
                  detail="Hệ thống của chúng tôi kết nối hàng trăm tài xế sẵn sàng phục vụ nhu cầu đi lại mỗi ngày."
                />
                <br />
                <OurNumberItem
                  number="4385.32"
                  title="Khí CO2 được giảm (kg)"
                  detail="Chúng ta đã góp phần làm giảm lượng khí CO2 trung bình mỗi ngày.

									Trái Đất sẽ rất biết ơn chúng ta về điều này."
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="promote py-4">
        <div className="container">
          <Row type="flex" align="middle">
            <Col lg={6} md={24}>
              <div className="d-flex flex-row justify-content-center">
                <img src={require("../assets/img/img_gift.png")} alt="Gift" />
              </div>
            </Col>
            <Col lg={12} md={24}>
              <Text strong>
                Hoàn thành Chuyến xe để nhận Ưu đãi cho các Chuyến sau
              </Text>
              <Text>
                Huray! Hãy click HOÀN THÀNH, và để lại những đánh giá của bạn về
                chuyến đi của mình để nhận được điểm tích lũy cho những chuyến
                đi tiếp theo.
              </Text>
            </Col>
            <Col lg={6} md={24}>
              <div className="d-flex justify-content-center">
                <Button>Dang nhap ngay!</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Content>
  );
};

export default HomePage;
