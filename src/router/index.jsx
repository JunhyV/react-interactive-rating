import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Rating from "../pages/Rating";

export const router = createHashRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {  
            path: '/rating',
            element: <Rating/>,
    }
]);