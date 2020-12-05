import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/AboutUs"));
const Catalog = React.lazy(() => import("../pages/Catalog"));
const Service = React.lazy(() => import("../pages/Service"));
const Contact = React.lazy(() => import("../pages/ContactUs"));

const routes = [
    {
        path: "/",
        exact: true,
        name: "home",
        component: Home
    },
    {
        path: "/about-us",
        exact: true,
        name: "about",
        component: About
    },
    {
        path: "/catalog",
        exact: true,
        name: "catalog",
        component: Catalog
    },
    {
        path: "/service",
        exact: true,
        name: "service",
        component: Service
    },
    {
        path: "/contact-us",
        exact: true,
        name: "contact",
        component: Contact
    }
];

export default routes;