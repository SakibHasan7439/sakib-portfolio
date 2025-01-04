import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <p>Not Found</p>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default Router;