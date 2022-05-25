import React from "react"
import { ReduxLoginForm } from "./LoginForm"

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default LoginPage