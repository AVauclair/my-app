import {connect} from "react-redux";
import MyPosts from "./MyPosts"
import Post from "./Post/Post"

let mapStateToProps = (state) => {
    return {
        postsElements: state.profilePage.posts.map(p => <Post text={p.text} likes={p.likes}/>)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer