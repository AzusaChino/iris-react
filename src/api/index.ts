import { AxiosResponse } from "axios";
import { Article } from "../models/article";
import { Comment } from "../models/comment";
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

export function queryDetail(
  id: string
): Promise<AxiosResponse<RestResponse<Article>>> {
  return req.get(`/article/${id}`);
}

export function queryComment(
  id: string
): Promise<AxiosResponse<RestResponse<Array<Comment>>>> {
  return req.get(`article/${id}/comment`);
}
