import PostCard from "./PostCard";


const Post = () => {
    return (
        <div>
           {
            [1,2,3].map((item,index)=><PostCard key={index}></PostCard>)
           }
        </div>
    );
};

export default Post;