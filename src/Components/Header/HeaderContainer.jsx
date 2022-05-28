import Header from "./Header";
import React from "react"
import { getAuthData, logout } from "../../redux/reducers/authReducer";
import {connect} from "react-redux"

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        this.props.getAuthData();
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

export default connect(mapStateToProps, {getAuthData, logout})(HeaderContainer)