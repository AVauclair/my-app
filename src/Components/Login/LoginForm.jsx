import {Field, reduxForm} from "redux-form"
import { Input } from "../../common/FormsControls/FormsControls"
import {required, maxLengthCreator} from "../../utils/validators/validators"

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div><Field placeholder={"Email"} name={"email"} component={Input}
                validate={[required, maxLength20]}></Field></div>
                <div><Field placeholder={"Password"} name={"password"} component={Input} type={"password"}
                validate={[required, maxLength20]}></Field></div>
                {/* <div><Field type={"checkbox"} name={"rememberMe"} component={"input"}>remember me</Field></div> */}
                <div><button>Login</button></div>
            </div>
        </form>
    )
}

export const ReduxLoginForm = reduxForm({form: "login"})(LoginForm)