import React from "react"
import module from "./UsersPage.module.css";
import * as axios from "axios";

class UsersPage extends React.Component {
    componentDidMount = () => {
        axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            this.props.fillUsers(response.data.items)
        })
    }

    render() {
        return (
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
                        <div>{u.userName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>
            )
        )
    }
}

export default UsersPage;