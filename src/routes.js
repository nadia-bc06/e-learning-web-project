import React from "react";
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFount";

const routes = [
    {
        path: '/',
        element: () => <Home/>
    },
    {
        path: '*',
        element: NotFound
    }
];

export default routes