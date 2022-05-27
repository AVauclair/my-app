import {Field, reduxForm} from "redux-form"
import { Textarea } from "../../../../../common/FormsControls/FormsControls"
import {required, maxLengthCreator} from "../../../../../utils/validators/validators"

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Write text"} name={"newPostTextBody"} component={Textarea}
            validate={[required, maxLength10]}></Field></div>
            <button>Add post</button>
        </form>
    )
}

const ReduxAddPostForm = reduxForm({form: "addPostForm"})(AddPostForm) 

export default ReduxAddPostForm;