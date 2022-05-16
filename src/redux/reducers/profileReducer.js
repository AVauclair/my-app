const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"

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

  areaPostText: "just imagine",

  profile: null,
  userID: 2,
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, {id: state.posts.length + 1, text: state.areaPostText, likes: 0}],
        areaPostText: '',
      };
    }

    case UPDATE_POST_TEXT: {
      return {
        ...state,
        areaPostText: action.currentPostText,
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }

    default:
      return state;
  }

}

export const addPostActionCreater = () => ({
  type: ADD_POST
})

export const updatePostTextActionCreater = (currentPostText) => ({
  type: UPDATE_POST_TEXT, currentPostText
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE, profile
})

export default profileReducer;