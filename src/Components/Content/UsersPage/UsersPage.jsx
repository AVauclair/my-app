import React from "react"
import module from "./UsersPage.module.css";
import Paginator from "../../../common/Paginator/Paginator";
import User from "./User/User";

let UsersPage = (props) => {
    return (
        <div className={module.usersPage}>
        <Paginator totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} currentPage={props.currentPage} onChangePage={props.onChangePage}/>
        {       
            props.users.map(u => <User user={u} 
                key={u.id} 
                followingInProgress={props.followingInProgress} 
                follow={props.follow} 
                unfollow={props.unfollow}/>)
        }
            </div>
    )
}

export default UsersPage;