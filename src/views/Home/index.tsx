import React from "react";
import { Carousel, Card, Col, Row, Image } from "antd";
import { Link } from "react-router-dom";
import { queryList } from "../../api";
import { Article } from "../../models/article";

const { Meta } = Card;

interface CarouselInterface {
  src: string;
}

const defaultCarouseList: Array<CarouselInterface> = [
  {
    src: "https://www.robinwieruch.de/static/0f316719f2e0f56d67ff4550f4747467/9842e/banner.jpg",
  },
  {
    src: "https://www.robinwieruch.de/static/2dff2796f080f8ebf86e6ada12297ad2/9842e/banner.jpg",
  },
  {
    src: "https://www.robinwieruch.de/static/6ffd0d9caf67596d3e848c9150d7fa54/9842e/banner.jpg",
  },
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
              <Image src={s.src} width={600} />
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
                    cover={<Image src={c.pic} />}
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
