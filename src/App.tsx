import React from "react";
import { routers, routes } from "./router";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
              {routers.map((router) => (
                <Menu.Item key={router.key}>
                  <Link to={router.to}>{router.name}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <div className="layout-content">
              <Switch>
                {routes.map((route) => (
                  <Route {...route} />
                ))}
              </Switch>
            </div>
          </Content>
          <Footer>
            Iris React ©2021 Built by
            <a href="https://azusachino.cn" target="_blank" rel="noreferrer">
              &nbsp;az
            </a>
          </Footer>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
