import {Field, reduxForm} from "redux-form"

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Write text"} name={"newPostTextBody"} component={"textarea"}></Field></div>
            <button>Add post</button>
        </form>
    )
}

const ReduxAddPostForm = reduxForm({form: "addPostForm"})(AddPostForm) 

export default ReduxAddPostForm;