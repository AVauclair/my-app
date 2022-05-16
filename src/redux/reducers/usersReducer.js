const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SHOW_MORE = "SHOW-MORE";
const FILL_USERS = "FILL-USERS";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
    users: [    ],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
    isFetching: false,
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

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
}

export const follow = (userID) => ({
    type: FOLLOW, userID,
})

export const unfollow = (userID) => ({
    type: UNFOLLOW, userID,
})

export const fillUsers = (users) => ({
    type: FILL_USERS, users
})

export const showMoreUsers = () => ({
    type: SHOW_MORE,
})

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT, totalUsersCount
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage,
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})

export default usersReducer;