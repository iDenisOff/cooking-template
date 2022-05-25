import { RouteProps } from "react-router-dom";
import { routesPaths } from "./common/consts";
import { HomePage } from "./pages/HomePage";
import { BlogListPage } from "./pages/BlogListPage";
import { RecipesPage } from "./pages/RecipesPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ContactPage } from "./pages/ContactPage";

export const routes = [
    {
        path: routesPaths.homePage,
        component: HomePage,
        exact: true,
    },
    {
        path: routesPaths.recipesPage,
        component: RecipesPage,
        exact: true,
    },
    {
        path: routesPaths.blogPage,
        component: BlogListPage,
        exact: true,
    },
    {
        path: routesPaths.aboutUsPage,
        component: BlogPostPage,
        exact: true,
    },
    {
        path: routesPaths.contactPage,
        component: ContactPage,
        exact: true,
    },
] as RouteProps[];
