import UsersPage from "./UsersPage";
import { followActionCreator, unfollowActionCreator, fillUsersActionCreator } from "./../../../redux/reducers/usersReducer"
import {connect} from "react-redux"

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {dispatch(followActionCreator(userID))},
        unfollow: (userID) => {dispatch(unfollowActionCreator(userID))},
        fillUsers: (users) => {dispatch(fillUsersActionCreator(users))}
    }
}

let UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersPageContainer