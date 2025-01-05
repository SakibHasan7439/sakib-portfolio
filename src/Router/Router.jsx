import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <p>Not Found</p>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "projectDetails/:id",
                element: <ProjectDetails></ProjectDetails>,
            }
        ]
    }
])

export default Router;