import React from "react"
import { ReduxLoginForm } from "./LoginForm"
import { login } from "../../redux/reducers/authReducer"
import {connect} from "react-redux"
import { Navigate } from "react-router-dom";

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {return <Navigate to={"/profile"}/>}

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL
})

export default connect(mapStateToProps, {login})(LoginPage)