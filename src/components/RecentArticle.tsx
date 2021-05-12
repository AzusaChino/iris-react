import React, { useEffect, useState } from "react";
import { Article } from "../models/article";
import { Card, Col } from "antd";
import { Link } from "react-router-dom";
import { queryList } from "../api";

const { Meta } = Card;

const RecentArticle = () => {
  const [articles, setArticles] = useState<Array<Article>>();

  // 我们将给 useEffect 传第二个空数组的参数，来实现这个效果：只在组件mount的时候，调用 useEffect 函数。
  useEffect(() => {
    const fetchData = async () => {
      const res = await queryList();
      setArticles(res.data.data);
    };
    fetchData();
  }, []);

  return articles ? (
    <div>
      <h2>近期博文</h2>
      <Col>
        {articles.map((c) => (
          <Link to={`/article/${c.id}`}>
            <Card
              size="small"
              hoverable
              style={{ width: 240 }}
              cover={<img alt={c.title} src={c.pic} />}
            >
              <Meta title={c.title} description={c.remark} />
            </Card>
          </Link>
        ))}
      </Col>
    </div>
  ) : (
    <div>非常抱歉，没有最近的博文</div>
  );
};

export default RecentArticle;
