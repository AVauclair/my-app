import module from "./UsersPage.module.css";

let UsersPage = (props) => {
    debugger;
    if (props.users.length === 0)
    {
        props.fillUsers([
                { id: 1, avatarURL: 'https://ic.pics.livejournal.com/guruken/3263337/4711/4711_800.jpg', 
                followed: true, userName: 'Dmitry', status: 'Status', location: { city: 'Astana', country: 'Kazakhstan' } },
                { id: 2, avatarURL: 'https://ic.pics.livejournal.com/guruken/3263337/4711/4711_800.jpg', 
                followed: false, userName: 'Valera', status: 'KEK', location: { city: 'Sochi', country: 'Bolgaria' } },
                { id: 3, avatarURL: 'https://ic.pics.livejournal.com/guruken/3263337/4711/4711_800.jpg', 
                followed: true, userName: 'Nikita', status: 'AAA', location: { city: 'Kiev', country: 'Ukraina' } }
            ]
        )
    }

    return (
        props.users.map(u => 
        <div key={u.id}>
            <span>
                <div>
                    <img src={u.avatarURL} className={module.userAvatar}/>
                </div>
                <div>
                    { u.followed 
                    ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.userName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </span>
        </div>
        )
    )
}

export default UsersPage;