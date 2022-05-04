const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SHOW_MORE = "SHOW_MORE";
const FILL_USERS = "FILL_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    users: [    ],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
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

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

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

export const setTotalUsersCountActionCreator = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
})

export const setCurrentPageActionCreator = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
})

export default usersReducer;