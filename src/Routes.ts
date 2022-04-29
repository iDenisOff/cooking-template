import { RouteProps } from "react-router-dom";
import { routesPaths } from "./common/consts";
import { HomePage } from "./pages/HomePage";
import { BlogListPage } from "./pages/BlogListPage";

export const routes = [
    {
        path: routesPaths.homePage,
        component: HomePage,
        exact: true,
    },
    {
        path: routesPaths.blogPage,
        component: BlogListPage,
        exact: true,
    },
] as RouteProps[];
