
import randomAvatar from 'random-avatar'
import { replace } from 'react-router-redux'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const loginRequst = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = (response) => {
  return {
    type: LOGIN_SUCCESS,
    payload: response
  }
}

export const loginFail = (err) => {
  return {
    type: LOGIN_FAIL,
    payload: err
  }
}

const loginPromise = (name) => {
  return new Promise((resolve, reject) => {
    if (name) {
      resolve({
        name,
        avatar: `https://robohash.org/${name}.png?size=100x100`
      })
    } else {
      let err = new Error('Name field is empty!')
      // err.message = 'Name field is empty!'
      reject(err.message)
    }
  })
}

export const login = (name) => {
  return async (dispatch) => {
    try {
      const data = await loginPromise(name)
      saveUser(data)
      dispatch(loginSuccess(data))
      dispatch(replace('/chat'))
    } catch (err) {
      console.log(err)
      dispatch(loginFail(err))
    }
  }
}

const saveUser = ({name, avatar}) => {
  localStorage.setItem('name', name)
  localStorage.setItem('avatar', avatar)
}

const ACTION_HANDLERS = {
  [LOGIN_REQUEST]: (state, action) => state,
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    [action.payload.name]: action.payload
  }),
  [LOGIN_FAIL]: (state, action) => state
}

const loginReducer = (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action): state
}

export default loginReducer