import UsersPage from "./UsersPage";
import { follow, unfollow, fillUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "./../../../redux/reducers/usersReducer"
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

let UsersPageContainer = connect(mapStateToProps, { follow, unfollow, fillUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersComponent);

export default UsersPageContainer