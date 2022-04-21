import { RouteProps } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { routesPaths } from "./common/consts";

export const routes = [
    {
        path: [routesPaths.homePage],
        component: HomePage,
        exact: true,
    },
] as RouteProps[];
