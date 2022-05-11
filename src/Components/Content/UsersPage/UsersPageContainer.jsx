import UsersPage from "./UsersPage";
import { followActionCreator, unfollowActionCreator, fillUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, toggleIsFetchingActionCreator } from "./../../../redux/reducers/usersReducer"
import {connect} from "react-redux"
import React from "react"
import * as axios from "axios";
import Preloader from './../../../common/Preloader/Preloader'

class UsersComponent extends React.Component {
    componentDidMount = () => {
        this.props.toggleIsFetching(true)
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,)
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.fillUsers(response.data.items)
        
            response.data.totalCount > 20 ? this.props.setTotalUsersCount(20) : this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

        onChangePage = (pageNumber) => {
            this.props.setCurrentPage(pageNumber);
            this.props.toggleIsFetching(true)
            axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.fillUsers(response.data.items)
            })
        }

        render() {
            debugger
            return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersPage
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            onChangePage={this.onChangePage}
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            follow={this.props.follow}
            unfollow={this.props.unfollow}/>
            </>
        }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {dispatch(followActionCreator(userID))},
        unfollow: (userID) => {dispatch(unfollowActionCreator(userID))},
        fillUsers: (users) => {dispatch(fillUsersActionCreator(users))},
        setCurrentPage: (currentPage) => {dispatch(setCurrentPageActionCreator(currentPage))},
        setTotalUsersCount: (totalUsersCount) => {dispatch(setTotalUsersCountActionCreator(totalUsersCount))},
        toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingActionCreator(isFetching))}
    }
}

let UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

export default UsersPageContainer