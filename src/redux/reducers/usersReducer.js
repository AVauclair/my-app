const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SHOW_MORE = "SHOW_MORE";
const FILL_USERS = "FILL_USERS";

let initialState = {
    users: [
        // { id: 1, avatarURL: '', 
        // followed: true, userName: "Dmitry", status: "Status", location: { city: "Astana", country: "Kazakhstan" } },
        // { id: 2, avatarURL: 'https://ic.pics.livejournal.com/guruken/3263337/4711/4711_800.jpg', 
        // followed: false, userName: "Valera", status: "KEK", location: { city: "sochi", country: "bolgaria" } },
        // { id: 3, avatarURL: 'https://ic.pics.livejournal.com/guruken/3263337/4711/4711_800.jpg', 
        // followed: true, userName: "Nikita", status: "AAA", location: { city: "kiev", country: "ukraina" } },
    ]
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map (u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }

        case FILL_USERS:
            return { ...state, users: [...action.users] }

        default:
            return state
    }
}

export const followActionCreator = (userID) => ({
    type: FOLLOW,
    userID: userID,
})

export const unfollowActionCreator = (userID) => ({
    type: UNFOLLOW,
    userID: userID,
})

export const fillUsersActionCreator = (users) => ({
    type: FILL_USERS,
    users: users
})

export const showMoreUsersActionCreator = () => ({
    type: SHOW_MORE,
})

export default usersReducer;