import React from "react";
import { routers, routes } from "./router";
import store from "./store";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Button, Layout, Menu } from "antd";
import "./App.css";
import { Provider } from "react-redux";

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  login() {}

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Layout className="layout">
              <Header>
                <div className="logo" />
                <div className="login">
                  <Button ghost onClick={this.login}>
                    登录
                  </Button>
                </div>
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
                <a
                  href="https://azusachino.cn"
                  target="_blank"
                  rel="noreferrer"
                >
                  &nbsp;az
                </a>
              </Footer>
            </Layout>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
