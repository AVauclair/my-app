import { addPostActionCreater, updatePostTextActionCreater } from "../../../../../redux/reducers/profileReducer";
import AddPost from "./AddPost";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    areaPostText: state.profilePage.areaPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {dispatch(addPostActionCreater())},
    onPostTextChange: (text) => {dispatch(updatePostTextActionCreater(text))}
  }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;