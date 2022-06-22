import UsersPage from "./UsersPage";
import { follow, unfollow, setCurrentPage, requestUsers, } from "./../../../redux/reducers/usersReducer"
import {connect} from "react-redux"
import React from "react"
import Preloader from './../../../common/Preloader/Preloader'
import { withAuthRedirect } from "../../../hocs/withAuthRedirect";
import { getUsers, getTotalItemsCount, getCurrentPage, getPageSize, getIsFetching, getFollowingInProgress } from "../../../redux/reducers/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <UsersPage
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        totalItemsCount={this.props.totalItemsCount}
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
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

let AuthRedirect = withAuthRedirect(UsersContainer) 

let UsersPageContainer = connect(mapStateToProps, { follow, unfollow, setCurrentPage, requestUsers})(AuthRedirect);

export default UsersPageContainer