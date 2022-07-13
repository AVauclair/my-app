import React from "react"
import module from "./User.module.css";
import {NavLink} from 'react-router-dom';
import defaultAva from "../../../../images/defaultAva.jpg"

export let User = (props) => {
    let user = props.user
    return (
        <div className={module.usersPage}>
        {       
            <div key={user.id}>
                <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small != null ? user.photos.small : defaultAva} className={module.userAvatar}/>
                    </NavLink>
                </div>
                <div>
                    {   
                        user.followed 
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {props.follow(user.id)}}>Follow</button>
                    }
                </div>
                </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.city"}</div>
                            <div>{"user.location.country"}</div>
                        </span>
                    </span>
                </div>
        }
            </div>
    )
}

export default User;