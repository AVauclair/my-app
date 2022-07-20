import { Field, reduxForm } from "redux-form"
import { Input, Textarea } from "../../../../../../common/FormsControls/FormsControls"
import module from "./ProfileDataEdit.module.css"

const ProfileDataEditForm = (props) => {
    debugger;
    return (
        <form onSubmit={props.handleSubmit} className={module.profileDataEdit}>
            <div>
                <div><b>Full Name:</b> <Field placeholder="Full Name" name={"fullName"} component={Input}></Field></div>
                <div><b>About Me:</b> {props.profile.aboutMe} <Field placeholder={"About Me"} name={"aboutMe"} component={Textarea}></Field></div>
                <div><b>Looking for a job:</b> <Field name={"lookingForAJob"} component={"Input"} type={"checkbox"}></Field></div>
                <div><b>Looking for a job description:</b> <Field placeholder={"Looking for a job description"} name={"lookingForAJobDescription"} component={Textarea}></Field></div>
            </div>
            <div><button>Сохранить</button></div>
        </form>
    )
}

export const ReduxProfileDataEditForm = reduxForm({form: "redux-profile-data-edit-form"})(ProfileDataEditForm)