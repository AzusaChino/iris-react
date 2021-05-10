import req from "../utils/request";

export function queryList() {
  return req.get("");
}
