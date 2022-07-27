import { stopSubmit } from "redux-form";
import { ProfileAPI } from "../../api/api";

const ADD_POST = "profile/ADD-POST"
const SET_USER_PROFILE = "profile/SET-USER-PROFILE"
const SET_USER_STATUS = "profile/SET-USER-STATUS"
const SAVE_USER_PHOTO = "profile/SET-USER-PHOTO"
const SAVE_PROFILE_DATA = "profile/SET-PROFILE-DATA"

let initialState = {
  posts: [{
      id: 1,
      text: "OOOH I'M SO AWESOME!",
      likes: 10
    },
    {
      id: 2,
      text: "LOOK AT ME! I AM CAT!",
      likes: 20
    },
    {
      id: 3,
      text: "JUST FOR TEST, I'M STILL A CAT",
      likes: 30
    }
  ],

  profile: null,
  userStatus: "",
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, {id: state.posts.length + 1, text: action.newPostTextBody, likes: 0}],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }

    case SET_USER_STATUS: {
      return {
        ...state,
        userStatus: action.userStatus
      }
    }

    case SAVE_USER_PHOTO: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }
    }

    case SAVE_PROFILE_DATA: {
      return {
        ...state,
        profile: {...state.profile, profile: action.profile}
      }
    }

    default:
      return state;
  }

}

export const addPostActionCreater = (newPostTextBody) => ({type: ADD_POST, newPostTextBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus})
export const saveUserPhoto = (photos) => ({type: SAVE_USER_PHOTO, photos})
export const saveProfileData = (profile) => ({type: SAVE_PROFILE_DATA, profile})
  
export const getUserProfile = (userID) => async (dispatch) => {
  let data = await ProfileAPI.getUserProfile(userID)
  dispatch(setUserProfile(data))
}

export const getUserStatus = (userID) => async (dispatch) => {
  let data = await ProfileAPI.getUserStatus(userID)
  dispatch(setUserStatus(data))
}

export const updateUserStatus = (userStatus) => async (dispatch) => {
  let data = await ProfileAPI.updateUserStatus(userStatus)
  if (data.resultCode === 0 ) {
    dispatch(setUserStatus(userStatus))
  }
}

export const setUserPhoto = (file) => async (dispatch) => {
  let data = await ProfileAPI.savePhoto(file)
  if (data.resultCode === 0 ) {
    dispatch(saveUserPhoto(data.data.photos))
  }
}

export const setUserProfileData = (profile) => async (dispatch, getState) => {
  const userID = getState().auth.userID;
  let data = await ProfileAPI.saveProfileData(profile)
  if (data.resultCode === 0 ) {
    dispatch(getUserProfile(userID))
  }
  else {
    let message = data.messages.length > 0 ? data.messages[0] : "Some error"
    dispatch(stopSubmit("redux-profile-data-edit-form", {_error: message}))
    return Promise.reject(message)
  }
}

export default profileReducer;