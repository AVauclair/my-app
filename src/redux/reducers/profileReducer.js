import { ProfileAPI } from "../../api/api";

const ADD_POST = "profile/ADD-POST"
const SET_USER_PROFILE = "profile/SET-USER-PROFILE"
const SET_USER_STATUS = "profile/SET-USER-STATUS"
const SAVE_USER_PHOTO = "profile/SET-USER-PHOTO"

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
      debugger
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
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

export default profileReducer;