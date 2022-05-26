import {Field, reduxForm} from "redux-form"

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Write message"} name={"newMessageBody"} component={"textarea"}></Field></div>
            <button>Send</button>
        </form>
    )
}

const ReduxAddMessageForm = reduxForm({form: "addMessageForm"})(AddMessageForm) 

export default ReduxAddMessageForm;