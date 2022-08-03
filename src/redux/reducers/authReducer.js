import { stopSubmit } from "redux-form";
import { AuthAPI, SecurityAPI } from "../../api/api";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";

const SET_USER_DATA = "auth/SET-USER-DATA"
const GET_CAPTCHA_URL_SUCCESS = "aut/GET-CAPTCHA-IMAGE"

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null,
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data
      };
    }

    case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        captchaURL: action.captchaURL
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

export const getCaptchaURLSuccess = (captchaURL) => ({
  type: GET_CAPTCHA_URL_SUCCESS, captchaURL
})

export const getAuthData = () => async (dispatch) => {
  let data = await AuthAPI.getAuthData()
    if (data.resultCode === 0)
    {
      let {id, email, login} = data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
}

export const getCaptchaURL = () => async (dispatch) => {
  let data = await SecurityAPI.getCaptchaURL()
  let captchaURL = data.url
  dispatch(getCaptchaURLSuccess(captchaURL))
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let data = await AuthAPI.login(email, password, rememberMe, captcha)
  if (data.resultCode === 0)
  {
    dispatch(getAuthData())
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaURL())
    }
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