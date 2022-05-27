import {Field, reduxForm} from "redux-form"
import { Textarea } from "../../../common/FormsControls/FormsControls";
import {required, maxLengthCreator} from "../../../utils/validators/validators"

const maxLength10 = maxLengthCreator(10)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Write message"} name={"newMessageBody"} component={Textarea}
            validate={[required, maxLength10]}></Field></div>
            <button>Send</button>
        </form>
    )
}

const ReduxAddMessageForm = reduxForm({form: "addMessageForm"})(AddMessageForm) 

export default ReduxAddMessageForm;