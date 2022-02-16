import module from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import AddPost from './AddPost/AddPost.jsx'

// let posts = [
//   {id: 1, text: "OOOH I'M SO AWESOME!", likes: 10},
//   {id: 2, text: "LOOK AT ME! I AM CAT!", likes: 20},
//   {id: 3, text: "JUST FOR TEST, I'M STILL A CAT", likes: 30}
// ]

const MyPost = (props) => {
  let postsElements = props.state.posts.map(p => <Post text={p.text} likes={p.likes}/>)

  return (
    <div className={module.MyPostsPage}>
      <AddPost />

      <br />

      <div className={module.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPost
