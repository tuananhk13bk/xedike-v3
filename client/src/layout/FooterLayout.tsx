import * as React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Icon, Typography } from "antd";
const { Title, Text } = Typography;
const { Footer } = Layout;

const FooterLayout = () => {
  return (
    <Footer className="bg-white">
      <div className="container">
        <Row>
          <Col lg={6} md={12}>
            <div className="mb-5">
              <img
                src={require("../assets/img/img_logo_footer.png")}
                alt="Footer Brand Logo"
                width="222"
                height="85"
              />
            </div>
            {[
              {
                icon: "phone",
                title: "Hỗ trợ hành khách:",
                contact: "0905.93.34.53"
              },
              {
                icon: "phone",
                title: "Hỗ trợ tài xế:",
                contact: "0905.93.34.53"
              },
              {
                icon: "mail",
                title: "Email",
                contact: "cs@xedike.vn"
              }
            ].map(({ icon, title, contact }) => (
              <div
                key={title}
                className="d-flex flex-row align-items-center pb-2"
              >
                <Icon className="icon mr-2" type={icon} theme="outlined" />
                <Text strong className="mr-1">
                  {title}
                </Text>
                <Text strong className="mr-1">
                  {contact}
                </Text>
              </div>
            ))}
          </Col>
          {[
            {
              title: "Thong tin",
              items: [
                "Lien he",
                "Doi ngu",
                "Tuyen dung",
                "Nhung cau hoi thuong gap"
              ]
            },
            {
              title: "Xe Di Ke",
              items: [
                "Dieu khoan su dung",
                "Chinh sach bao mat thong tin",
                "Quy che san giao dich",
                "Co che giai quyet tranh chap"
              ]
            },
            {
              title: "Ho tro",
              items: [
                "Dang ky lam tai xe",
                "Dang ki hanh khach",
                "Hanh ly that lac",
                "Dieu kien huy"
              ]
            }
          ].map(({ title, items }) => (
            <Col key={title} lg={6} md={12}>
              <Title level={4}>{title}</Title>
              {items.map(item => (
                <Link key={item} to="/" className="d-block no-decoration mb-2">
                  <Text>{item}</Text>
                </Link>
              ))}
            </Col>
          ))}
        </Row>
        <hr />
        <Row>
          {[
            {
              text: `Ban quyen XeDiKe.vn. Giu toan quyen.`,
              imageUri: require("../assets/img/logo_bo_cong_thuong.png")
            },
            {
              text: "Empowered by DNES",
              imageUri: require("../assets/img/logo_dnes.jpg")
            },
            {
              text: "Phat trien boi High Tech Software Ltd.,",
              imageUri: require("../assets/img/img_logo_sioux.jpg")
            }
          ].map((item, index) => (
            <Col key={item.text} lg={8} md={24}>
              <div className="d-flex flex-row align-items-center">
                <Text>{item.text}</Text>
                <img
                  src={item.imageUri}
                  alt={item.text}
                  width="106"
                  height="40"
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Footer>
  );
};

export default FooterLayout;
