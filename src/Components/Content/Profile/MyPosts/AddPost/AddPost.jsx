import module from './AddPost.module.css'
import React from 'react'

const AddPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: "ADD-POST"})
  }

  let onPostTextChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: "UPDATE-POST-TEXT", currentPostText: text})
  }

  return (
    <div className={module.addPost}>
      <div>
        <h1>my posts</h1>
        <div>
          <textarea onChange={onPostTextChange} ref={newPostElement} value={props.postText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
    </div>
  )
}

export default AddPost
