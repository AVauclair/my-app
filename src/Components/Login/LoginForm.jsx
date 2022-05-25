import {Field, reduxForm} from "redux-form"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div><Field placeholder={"Login"} name={"login"} component={"input"}></Field></div>
                <div><Field placeholder={"Password"} name={"password"} component={"input"}></Field></div>
                {/* <div><Field type={"checkbox"} name={"rememberMe"} component={"input"}>remember me</Field></div> */}
                <div><button>Login</button></div>
            </div>
        </form>
    )
}

export const ReduxLoginForm = reduxForm({form: "login"})(LoginForm)