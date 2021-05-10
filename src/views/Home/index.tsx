import React, { CSSProperties } from "react";
import { Carousel, Card, Col, Row } from "antd";

const { Meta } = Card;

const sampleList: Array<{ name: string }> = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
];

const contentStyle: CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

interface CarouselInterface {
  name: string;
}

interface CardInterface {
  src: string;
}

class Home extends React.Component<
  {},
  { carouselList: Array<CarouselInterface>; cardList: Array<CardInterface> }
> {
  state = {
    carouselList: [{ name: "" }],
    cardList: [{ src: "" }],
  };

  render() {
    const { carouselList, cardList } = this.state;

    return (
      <div>
        <Carousel autoplay>
          {carouselList.map((s) => (
            <div>
              <h3 style={contentStyle}>{s.name}</h3>
            </div>
          ))}
        </Carousel>
        <hr />
        <div className="card-wrapper">
          <Row gutter={16}>
            {cardList.map((c) => (
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt={c.src} src={c.src} />}
                >
                  <Meta title={c.src} description={c.src} />
                </Card>
              </Col>
            ))}
            <Col span={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card title="CardTitle" bordered={false}>
                Card Content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="CardTitle" bordered={false}>
                Card Content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="CardTitle" bordered={false}>
                Card Content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="CardTitle" bordered={false}>
                Card Content
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
