import { addPostActionCreater } from "../../../../../redux/reducers/profileReducer";
import AddPost from "./AddPost";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostTextBody) => {dispatch(addPostActionCreater(newPostTextBody))},
  }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;