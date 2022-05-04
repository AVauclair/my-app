import UsersPage from "./UsersPage";
import { followActionCreator, unfollowActionCreator, fillUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator } from "./../../../redux/reducers/usersReducer"
import {connect} from "react-redux"

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {dispatch(followActionCreator(userID))},
        unfollow: (userID) => {dispatch(unfollowActionCreator(userID))},
        fillUsers: (users) => {dispatch(fillUsersActionCreator(users))},
        setCurrentPage: (currentPage) => {dispatch(setCurrentPageActionCreator(currentPage))},
        setTotalUsersCount: (totalUsersCount) => {dispatch(setTotalUsersCountActionCreator(totalUsersCount))},
    }
}

let UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersPageContainer