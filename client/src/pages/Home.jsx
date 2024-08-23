import Feed from "@/components/Feed";
import RightSideBar from "@/components/RightSideBar";
import useGetAllPost from "@/hooks/useGetAllPost";


const Home = () => {
    useGetAllPost();
    return (
        <div className="flex">
            <div className="flex-grow">
                 <Feed></Feed>
            </div>
            <RightSideBar></RightSideBar>
        </div>
    );
};

export default Home;