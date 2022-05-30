import Header from "./Header";
import React from "react"
import { logout } from "../../redux/reducers/authReducer";
import { connect } from "react-redux"

class HeaderContainer extends React.Component {
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

export default connect(mapStateToProps, {logout})(HeaderContainer)