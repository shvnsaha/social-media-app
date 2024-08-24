import EditProfile from "@/components/EditProfile";
import Profile from "@/components/Profile";
import MainLayout from "@/layout/MainLayout";
import ChatPage from "@/pages/ChatPage";
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
            },
            {
                path: '/profile/:id',
                element: <Profile />
              },
              {
                path: '/account/edit',
                element: <EditProfile />
              },
              {
                path: '/chat',
                element: <ChatPage />
              },
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