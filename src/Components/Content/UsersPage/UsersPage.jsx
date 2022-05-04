import React from "react"
import module from "./UsersPage.module.css";
import * as axios from "axios";

class UsersPage extends React.Component {
    componentDidMount = () => {
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageSize}&count=${this.props.totalUserCount}`)
        .then(response => {
            this.props.fillUsers(response.data.items)

            response.data.count > 20 ? this.props.setTotalUsersCount(response.data.totalCount) : this.props.setTotalUsersCount(20)
            
        })
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalUserCount}`)
        .then(response => {
            this.props.fillUsers(response.data.items)
        })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return (
            <div className={module.usersPage}>
                <div className={module.pages}>
                    {pages.map(p => {
                            return <span className={this.props.currentPage === p && module.currentPage}
                            onClick = { (e) => this.onChangePage(p)}>{p}</span>
                    })}
                </div>
            {
                this.props.users.map(u => 
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : "https://sc04.alicdn.com/kf/UTB8jhPZin_IXKJkSalUq6yBzVXay.jpg"} className={module.userAvatar}/>
                        </div>
                        <div>
                            { u.followed 
                            ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>
                )
            }
            </div>
        )
        
    }
}

export default UsersPage;