import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/Home";
import CategoryNews from "../Pages/CategoryNews";


const Routes = createBrowserRouter([
    {
        path:"/",
        element: <Home></Home>,
        children: [
            {
                path:"",
                element:<Navigate to="/category/01"></Navigate>
            },
            {
               path: "/category/:id",
               element: <CategoryNews></CategoryNews>,
               loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },
        ],
    },
    {
        path:"/news",
        element: <h2>news layout</h2>,
    },
    {
        path: "auth",
        element: <h3>Login</h3>,
    },
    {
        path:"*",
        element: <p>error</p>
    }

])

export default Routes;