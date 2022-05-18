import Header from "./Header";
import React from "react"
import * as axios from "axios";
import { setAuthUserData } from "../../redux/reducers/authReducer";
import {connect} from "react-redux"

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
            if (response.data.resultCode === 0)
            {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.userID,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)