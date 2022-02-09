import module from './AddPost.module.css'

const AddPost = (props) => {
  return (
    <div className={module.addPost}>
      <div>
        <h1>my posts</h1>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
    </div>
  )
}

export default AddPost
