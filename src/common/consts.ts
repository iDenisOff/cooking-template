export const routesPaths = {
    npmPage: "/npm",
    homePage: "/",
    recipesPage: "/recipes-page",
    blogPage: "/blog-post-page",
    contactPage: "/contact-page",
    aboutUsPage: "/about-us-page",
};

export const mainMenuItems: { name: string; route: string }[] = [
    {
        name: "Home",
        route: routesPaths.homePage,
    },
    {
        name: "Recipes",
        route: routesPaths.recipesPage,
    },
    {
        name: "Blog",
        route: routesPaths.blogPage,
    },
    {
        name: "Contact",
        route: routesPaths.contactPage,
    },
    {
        name: "About Us",
        route: routesPaths.aboutUsPage,
    },
];
