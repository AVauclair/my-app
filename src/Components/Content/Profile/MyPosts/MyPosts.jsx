import module from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import AddPostContainer from './AddPost/AddPostContainer.jsx'

const MyPosts = (props) => {

  let postsElements = props.storeRedux.getState().profilePage.posts.map(p => <Post text={p.text} likes={p.likes}/>)

  return (
    <div className={module.MyPostsPage}>
      <AddPostContainer storeRedux={props.storeRedux}/>
      <br />

      <div className={module.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts
