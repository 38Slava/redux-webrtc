
import randomAvatar from 'random-avatar'
import { replace } from 'react-router-redux'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const SERVER_ADD_USER = 'server/ADD_USER'
export const SOCKET_ADD_USER = 'socket/ADD_USER'

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
        name
      })
    } else {
      let err = new Error('Name field is empty!')
      reject(err.message)
    }
  })
}

export const addUser = (response) => {
  return {
    type: SERVER_ADD_USER,
    payload: response
  }
}

export const login = (name) => {
  return async (dispatch) => {
    try {
      const data = await loginPromise(name)
      saveUser(data)
      dispatch(loginSuccess(data))
      dispatch(addUser({ name }))
      dispatch(replace('/chat'))
    } catch (err) {
      console.log(err)
      dispatch(loginFail(err))
    }
  }
}

const saveUser = ({ name }) => {
  localStorage.setItem('name', name)
}

const ACTION_HANDLERS = {
  [LOGIN_REQUEST]: (state, action) => state,
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    [action.payload.name]: action.payload
  }),
  [LOGIN_FAIL]: (state, action) => state,
  [SOCKET_ADD_USER]: (state, action) => ({
    ...state,
    [action.payload.name]: action.payload
  })
}

const loginReducer = (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action): state
}

export default loginReducer
