import module from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPost = (props) => {
    return (
        <div className = {module.MyPosts}>
            <div>
            ava + desc
            </div>

            <div>
            my posts
            </div>

            <div>
            new post
            </div>

            <div className = {module.posts}>
                <Post text = "OOOH I'M SO AWESOME!" likes = {10}/>
                <Post text = "LOOK AT ME! I AM CAT!" likes = {20}/>
            </div>
        </div>
    );
}

export default MyPost;