import module from './AddPost.module.css'
import React from 'react'

const AddPost = (props) => {
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostTextChange = () => {
    let text = newPostElement.current.value;
    props.onPostTextChange(text);
  }
  
  return (
    <div className={module.addPost}>
      <div>
        <h1>my posts</h1>
        <div>
          <textarea onChange={onPostTextChange} ref={newPostElement} value={props.areaPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
    </div>
  )
}

export default AddPost
