const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"

let initialState = {
    posts: [
      {
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

    areaPostText: "just imagine"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ADD_POST:
            let newPost = {
                id: state.posts.length - 1,
                text: state.areaPostText,
                likes: 0
              }
              state.posts.push(newPost);
              state.areaPostText = '';
        return state;
        
        case UPDATE_POST_TEXT:
            state.areaPostText = action.currentPostText;
        return state;

        default:
            return state;
    }
    
}

export const addPostActionCreater = () => ({type: ADD_POST})
export const updatePostTextActionCreater = (text) => ({type: UPDATE_POST_TEXT, currentPostText: text})

export default profileReducer;