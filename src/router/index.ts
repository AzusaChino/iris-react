import { RouteProps } from "react-router-dom";

import Home from "../views/Home";
import About from "../views/About";
import Demo from "../views/Demo";

/**
 * Link
 */
interface RouterProps {
  to: string;
  key: string;
  name: string;
}

export const routers: Array<RouterProps> = [
  {
    to: "/",
    key: "home",
    name: "Home",
  },
  {
    to: "/demo",
    key: "demo",
    name: "Demo",
  },
  {
    to: "/about",
    key: "about",
    name: "About",
  },
];

export const routes: Array<RouteProps> = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/demo",
    component: Demo,
  },
];
