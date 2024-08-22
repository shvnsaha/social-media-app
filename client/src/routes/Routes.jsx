import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import {
    createBrowserRouter,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path:'signup',
        element: <Signup></Signup>
    }
])

export default router