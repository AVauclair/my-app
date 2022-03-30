import { addPostActionCreater, updatePostTextActionCreater } from "../../../../../redux/reducers/profileReducer";
import AddPost from "./AddPost";

const AddPostContainer = (props) => {
    let state = props.storeRedux.getState();

    let addPost = () => {
        props.storeRedux.dispatch(addPostActionCreater())
      }
    
    let onPostTextChange = (text) => {
      let action = updatePostTextActionCreater(text)
      props.storeRedux.dispatch(action)
    }

    return (
        <AddPost addPost={addPost} onPostTextChange={onPostTextChange} areaPostText = {state.profilePage.areaPostText}/>
    )
}

export default AddPostContainer;