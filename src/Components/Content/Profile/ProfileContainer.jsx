import Profile from "./Profile"
import React from "react"
import { getUserProfile, getUserStatus, updateUserStatus, setUserPhoto, setUserProfileData } from "../../../redux/reducers/profileReducer";
import {connect} from "react-redux"
import { Navigate} from "react-router-dom";
import { withAuthRedirect } from "../../../hocs/withAuthRedirect";
import { compose } from "redux"
import { withRouter } from "../../../hocs/withRouter";

class ProfileContainer extends React.Component {
    refreshProfile = () => {
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

    componentDidMount = () => {
        this.refreshProfile()
    }

    componentDidUpdate = (prevProps, nextProps) => {

        if (this.props.router.params.userID != prevProps.router.params.userID) {
        this.refreshProfile()}
    }

    render() {
        if (!this.props.isAuth) return <Navigate to="/login"/>

        return (
            <Profile {...this.props} isOwner={!this.props.router.params.userID}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile, //почему-то селектор он здесь не принимает
    userStatus: state.profilePage.userStatus,
    authorizedUserID: state.auth.userID,
    isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, setUserPhoto, setUserProfileData}),
withRouter,
withAuthRedirect)(ProfileContainer)