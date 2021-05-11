import { AxiosResponse } from "axios";
import { Article } from "../models/article";
import { RestResponse } from "../models/common";
import req from "../utils/request";

export function ping() {
  return req.get("/ping");
}

export function login(param: { username: string; password: string }) {
  return req.post("/login", param);
}

export function queryList(): Promise<
  AxiosResponse<RestResponse<Array<Article>>>
> {
  return req.get("/articles");
}
