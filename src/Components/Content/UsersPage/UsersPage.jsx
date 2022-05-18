import React from "react"
import module from "./UsersPage.module.css";
import {NavLink} from 'react-router-dom';
import * as axios from "axios";

let UsersPage = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className={module.usersPage}>
        <div className={module.pages}>
        {pages.map(p => {
            return <span className={props.currentPage === p && module.currentPage}
            onClick = { (e) => props.onChangePage(p)}>{p}</span>
        })}
        </div>
        {       
            props.users.map(u => 
            <div key={u.id}>
                <span>
                <div>
                    <NavLink to={`/profile/${u.id}`}>
                    <img src={u.photos.small != null ? u.photos.small : "https://sc04.alicdn.com/kf/UTB8jhPZin_IXKJkSalUq6yBzVXay.jpg"} className={module.userAvatar}/>
                    </NavLink>
                </div>
                <div>
                    {   
                        u.followed 
                        ? <button onClick={() => {
                            axios
                            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers: {"API-KEY": "a9656320-dc6b-4aa8-9f6b-1296cf829011"}})
                            .then(response => {
                                if (response.data.resultCode === 0)
                                {
                                    props.unfollow(u.id)
                                }
                    })
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios
                            .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true, headers: {"API-KEY": "a9656320-dc6b-4aa8-9f6b-1296cf829011"}})
                            .then(response => {
                                if (response.data.resultCode === 0)
                                {
                                    props.follow(u.id)
                                }
                    })
                        }}>Follow</button>
                    }
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

export default UsersPage;