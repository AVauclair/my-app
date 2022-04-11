import module from './MyPosts.module.css'
import AddPostContainer from './AddPost/AddPostContainer.jsx'

const MyPosts = (props) => {
  let postsElements = props.postsElements

  return (
    <div className={module.MyPostsPage}>
      <AddPostContainer />
      <br />

      <div className={module.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts
