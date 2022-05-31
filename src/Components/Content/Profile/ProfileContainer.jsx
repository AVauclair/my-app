import Profile from "./Profile"
import React from "react"
import { getUserProfile, getUserStatus, updateUserStatus } from "../../../redux/reducers/profileReducer";
import {connect} from "react-redux"
import { Navigate} from "react-router-dom";
import { withAuthRedirect } from "../../../hocs/withAuthRedirect";
import { compose } from "redux"
import { withRouter } from "../../../hocs/withRouter";
import { getProfile } from "../../../redux/reducers/profile-selectors";

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        let userID = this.props.router.params.userID
        if (!userID) {
            userID = this.props.authorizedUserID
            if (!userID) {
                this.props.history.push("/login")
            }
        }

        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to="/login"/>

        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile, //почему-то селектор он здесь не принимает
    userStatus: state.profilePage.userStatus,
    authorizedUserID: state.auth.userID,
    isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
withRouter,
withAuthRedirect)(ProfileContainer)