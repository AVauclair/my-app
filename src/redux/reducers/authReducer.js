import { stopSubmit } from "redux-form";
import { AuthAPI } from "../../api/api";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";

const SET_USER_DATA = "auth/SET-USER-DATA"

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data
      };
    }

    default:
      return state;
  }

}

export const setAuthUserData = (userID, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: {userID, email, login, isAuth}
})

export const getAuthData = () => async (dispatch) => {
  let data = await AuthAPI.getAuthData()
    if (data.resultCode === 0)
    {
      let {id, email, login} = data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await AuthAPI.login(email, password, rememberMe)
  if (data.resultCode === 0)
  {
    dispatch(getAuthData())
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : "Some error"
    dispatch(stopSubmit("login", {_error: message}))
  }
}

export const logout = () => async (dispatch) => {
  let data = await AuthAPI.logout()
  if (data.resultCode === 0)
  {
    dispatch(setAuthUserData(null, null, null, false))
    withAuthRedirect()
  }
}

export default authReducer;