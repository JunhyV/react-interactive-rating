import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Rating from "../pages/Rating";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {  
            path: '/rating',
            element: <Rating/>,
    }
]);