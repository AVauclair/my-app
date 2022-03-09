import module from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import AddPost from './AddPost/AddPost.jsx'

const MyPosts = (props) => {

  let postsElements = props.state.profilePage.posts.map(p => <Post text={p.text} likes={p.likes}/>)

  return (
    <div className={module.MyPostsPage}>
      <AddPost dispatch={props.dispatch} postText={props.state.profilePage.postText}/>

      <br />

      <div className={module.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts
