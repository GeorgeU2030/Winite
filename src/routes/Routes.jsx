import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Skin } from "../pages/Skin";
import { Explore } from "../pages/Explore";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/skin",
        element: <Skin/>
    },
    {
        path: "/explore",
        element: <Explore/>
    }
]);