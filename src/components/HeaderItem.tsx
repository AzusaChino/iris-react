import React from "react";
import { Layout, Button, Menu, Avatar } from "antd";
import { routers } from "../router";
import { Link } from "react-router-dom";
import { AppState, RootState } from "../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../api";
import * as constants from "../store/constants";

const { Header } = Layout;

const selectApp = (state: RootState) => state.app;

const HeaderItem = () => {
  const state = useSelector<RootState, AppState>(selectApp);

  const { isAuthed, user } = state;

  const dispatch = useDispatch();

  const handleLogin = () => {
    login({ username: "az", password: "abcd1234" }).then((res) => {
      const result = res.data;
      if (result) {
        dispatch({
          type: constants.LOGIN,
          payload: {
            isAuthed: true,
            user: result.data,
          },
        });
      } else {
        Promise.reject("Login Failed");
      }
    });
  };

  return (
    <Header>
      <Link to="/">
        <div className="logo" />
      </Link>
      <div className="login">
        {isAuthed ? (
          <div>
            <span style={{ color: "#fff" }}>欢迎{user.username} </span>
            <Avatar size="small" src={user.avatar} />
          </div>
        ) : (
          <Button ghost onClick={handleLogin}>
            登录
          </Button>
        )}
      </div>
      <Menu theme="dark" mode="horizontal">
        {routers.map((router) => (
          <Menu.Item key={router.key}>
            <Link to={router.to}>{router.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default HeaderItem;
