import Feed from "@/components/Feed";
import RightSideBar from "@/components/RightSideBar";


const Home = () => {
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