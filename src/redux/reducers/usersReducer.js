import { UserAPI } from "../../api/api";
import { updateObjectInArray } from "../../utils/object-helpers";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SHOW_MORE = "users/SHOW-MORE";
const FILL_USERS = "users/FILL-USERS";
const SET_TOTAL_USERS_COUNT = "users/SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE-IS-FOLLOWING-PROGRESS";


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
                users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", {followed: false})
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

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    
    let data = await UserAPI.requestUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(fillUsers(data.items))

    //data.totalCount > 20 ? dispatch(setTotalUsersCount(20)) : dispatch(setTotalUsersCount(data.totalCount))
    dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userID))

    let data = await apiMethod(userID)
    if (data.resultCode === 0)
    {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleFollowingProgress(false, userID))
}

export const follow = (userID) => async (dispatch) => {
    followUnfollowFlow(dispatch, userID, UserAPI.follow.bind(UserAPI), followSuccess)
}

export const unfollow = (userID) => async (dispatch) => {
    followUnfollowFlow(dispatch, userID, UserAPI.unfollow.bind(UserAPI), unfollowSuccess)
}

export default usersReducer;