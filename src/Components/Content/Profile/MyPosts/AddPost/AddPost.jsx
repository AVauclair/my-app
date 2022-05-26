import module from './AddPost.module.css'
import React from 'react'
import ReduxAddPostForm from './AddPostForm';

const AddPost = (props) => {
  let onAddPost = (values) => {
    props.addPost(values.newPostTextBody);
  }
  
  return (
    <div className={module.addPost}>
      <div>
        <h1>my posts</h1>
        <ReduxAddPostForm onSubmit={onAddPost}/>
      </div>
    </div>
  )
}

export default AddPost
