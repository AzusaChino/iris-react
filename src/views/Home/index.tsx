import React, { CSSProperties } from "react";
import { Carousel, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { queryList } from "../../api";
import { Article } from "../../models/article";

const { Meta } = Card;

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

const defaultCarouseList: Array<CarouselInterface> = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
];

class Home extends React.Component<
  {},
  { carouselList: Array<CarouselInterface>; cardList: Array<Article> }
> {
  state = {
    carouselList: defaultCarouseList,
    cardList: new Array<Article>(),
  };

  componentDidMount() {
    queryList().then((res) => {
      const { data } = res;
      if (data.code === 200) {
        this.setState({
          cardList: data.data,
        });
      }
    });
  }

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
                <Link to={`/article/${c.id}`}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt={c.title} src={c.pic} />}
                  >
                    <Meta title={c.title} description={c.remark} />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
