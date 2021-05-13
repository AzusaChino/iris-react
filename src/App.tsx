import React from "react";
import { routes } from "./router";
import store from "./store";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import { Provider } from "react-redux";
import HeaderItem from "./components/HeaderItem";

const { Content, Footer } = Layout;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Layout className="layout">
              <HeaderItem />
              <Content style={{ padding: "0 50px" }}>
                <div className="layout-content">
                  <Switch>
                    {routes.map((route: RouteProps) => (
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
