import module from './AddPost.module.css'
import React from 'react'
import {addPostActionCreater, updatePostTextActionCreater} from './../../../../../redux/reducers/profileReducer'

const AddPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreater())
  }

  let onPostTextChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updatePostTextActionCreater(text))
  }

  return (
    <div className={module.addPost}>
      <div>
        <h1>my posts</h1>
        <div>
          <textarea onChange={onPostTextChange} ref={newPostElement} value={props.areaPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
    </div>
  )
}

export default AddPost
