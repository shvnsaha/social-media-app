import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineBars } from 'react-icons/ai'
import { Heart, Home, LogOut, MessageCircle, PlusSquare, Search, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { toast } from "sonner";
import axiosSecure from "@/api";




const Sidebar = () => {
    const navigate = useNavigate()
    const [isActive, setActive] = useState(false)



    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    // logout
    const logoutHandler = async()=>{
        try {
          const res = await axiosSecure('/user/logout');
          if(res.data.success){
            navigate('/login')
            toast.success(res.data.message)
        }
     }catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const sidebarHandler = (textType) => {
        if (textType === 'Logout') {
            logoutHandler();
        } else if (textType === "Create") {
            // setOpen(true);
        } else if (textType === "Profile") {
            // navigate(`/profile/${user?._id}`);
        } else if (textType === "Home") {
            navigate("/");
        } else if (textType === 'Messages') {
            navigate("/chat");
        }
    }

    const sidebarItems = [
        { icon: <Home />, text: "Home" },
        { icon: <Search />, text: "Search" },
        { icon: <TrendingUp />, text: "Explore" },
        { icon: <MessageCircle />, text: "Messages" },
        { icon: <Heart />, text: "Notifications" },
        { icon: <PlusSquare />, text: "Create" },
        {
            icon: (
                <Avatar className='w-6 h-6'>
                    {/* <AvatarImage src={user?.profilePicture} alt="@shadcn" /> */}
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            ),
            text: "Profile"
        },
        { icon: <LogOut />, text: "Logout" },
    ]

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to={'/'} className=''>
                            Home
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div 
                className={`px-4 fixed border-r border-gray-300 w-64 h-screen ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                {
                    sidebarItems.map((item,index)=>{
                        return(
                            <div onClick={() => sidebarHandler(item.text)} key={index} className="flex items-center gap-3 relative hover:bg-gray-100 cursor-pointer rounded-lg p-3 my-3">
                                {item.icon}
                                <span>{item.text}</span>
                            </div>
                        )
                    })
                }

                <div>

                </div>
            </div>
        </>
    )
}

export default Sidebar