import UsersPage from "./UsersPage";
import { follow, unfollow, setCurrentPage, getUsers, } from "./../../../redux/reducers/usersReducer"
import {connect} from "react-redux"
import React from "react"
import Preloader from './../../../common/Preloader/Preloader'
import { withAuthRedirect } from "../../../hocs/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <UsersPage
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        onChangePage={this.onChangePage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
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
        followingInProgress: state.usersPage.followingInProgress,
    }
}

let AuthRedirect = withAuthRedirect(UsersContainer) 

let UsersPageContainer = connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers})(AuthRedirect);

export default UsersPageContainer