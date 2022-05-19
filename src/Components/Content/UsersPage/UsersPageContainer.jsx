import UsersPage from "./UsersPage";
import { follow, unfollow, fillUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress } from "./../../../redux/reducers/usersReducer"
import {connect} from "react-redux"
import React from "react"
import Preloader from './../../../common/Preloader/Preloader'
import { UserAPI } from "../../../api/api";

class UsersComponent extends React.Component {
    componentDidMount = () => {
        this.props.toggleIsFetching(true)
        
        UserAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFetching(false)
            this.props.fillUsers(data.items)
        
            data.totalCount > 20 ? this.props.setTotalUsersCount(20) : this.props.setTotalUsersCount(data.totalCount)
        })
    }

        onChangePage = (pageNumber) => {
            this.props.setCurrentPage(pageNumber);
            this.props.toggleIsFetching(true)

            UserAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.fillUsers(data.items)
            })
        }

        render() {
            return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersPage
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            onChangePage={this.onChangePage}
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}/>
            </>
        }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let UsersPageContainer = connect(mapStateToProps, { follow, unfollow, fillUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UsersComponent);

export default UsersPageContainer