import { Field, reduxForm } from "redux-form"
import { Input, Textarea } from "../../../../../../common/FormsControls/FormsControls"
import module from "./ProfileDataEdit.module.css"

const ProfileDataEditForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={module.profileDataEdit}>
            <div>
                <div><b>Full Name:</b> <Field placeholder="Full Name" name={"fullName"} component={Input}/></div>
                <div><b>About Me:</b> {props.profile.aboutMe} <Field placeholder={"About Me"} name={"aboutMe"} component={Textarea}/></div>
                <div><b>Looking for a job:</b> <Field name={"lookingForAJob"} component={"Input"} type={"checkbox"}/></div>
                <div><b>Looking for a job description:</b> <Field placeholder={"Looking for a job description"} name={"lookingForAJobDescription"} component={Textarea}/></div>

                <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => { 
                return (
                    <div className={module.userContacts} key={key.id}>{key}: <Field placeholder={key} name={"contacts." + key} component={Textarea}/></div>)})}
                </div>
            </div>
            <div><button>Сохранить</button></div>

            {props.error && <div className={module.formCommonError}>
                    {props.error}
                    </div>}
        </form>
    )
}

export const ReduxProfileDataEditForm = reduxForm({form: "redux-profile-data-edit-form"})(ProfileDataEditForm)