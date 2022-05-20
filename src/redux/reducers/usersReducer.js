import { UserAPI } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SHOW_MORE = "SHOW-MORE";
const FILL_USERS = "FILL-USERS";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";


let initialState = {
    users: [    ],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
    isFetching: false,
    followingInProgress: [],
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

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userID] 
                : [...state.followingInProgress.filter(id => id != action.userID)]
            }

        default:
            return state
    }
}

export const followSuccess = (userID) => ({
    type: FOLLOW, userID,
})

export const unfollowSuccess = (userID) => ({
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

export const toggleFollowingProgress = (isFetching, userID) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching, userID
})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        
        UserAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(fillUsers(data.items))
        
            data.totalCount > 20 ? dispatch(setTotalUsersCount(20)) : dispatch(setTotalUsersCount(data.totalCount))
            //dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID))
        UserAPI.follow(userID)
        .then(data => {
            if (data.resultCode === 0)
            {
                dispatch(followSuccess(userID))
            }
            dispatch(toggleFollowingProgress(false, userID))
        })
    }
}

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID))
        UserAPI.unfollow(userID)
        .then(data => {
            if (data.resultCode === 0)
            {
                dispatch(unfollowSuccess(userID))
            }
            dispatch(toggleFollowingProgress(false, userID))
        })
    }
}

export default usersReducer;