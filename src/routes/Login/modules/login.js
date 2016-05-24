import { replace } from 'react-router-redux'
import peer from 'peers'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const SERVER_ADD_USER = 'server/ADD_USER'
export const SOCKET_ADD_USER = 'socket/ADD_USER'

export const loginRequst = () => ({
  type: LOGIN_REQUEST
})

export const loginSuccess = (response) => ({
  type: LOGIN_SUCCESS,
  payload: response
})

export const loginFail = (err) => ({
  type: LOGIN_FAIL,
  payload: err
})

const loginPromise = (name) => {
  return new Promise((resolve, reject) => {
    let peerId
    if (name) {
      resolve({
        name,
        peerId: peer.id
      })
    } else {
      let err = new Error('Name field is empty!')
      reject(err.message)
    }
  })
}

export const broadcastUser = (response) => ({
  type: SERVER_ADD_USER,
  payload: response
})

export const login = (name) => {
  return async (dispatch) => {
    try {
      const data = await loginPromise(name)
      saveUser(data)
      dispatch(loginSuccess(data))
      dispatch(broadcastUser(data))
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
    currentUser: action.payload
  }),
  [LOGIN_FAIL]: (state, action) => state,
  [SOCKET_ADD_USER]: (state, action) => ({
    ...state,
    remoteUser: action.payload
  })
}

const loginReducer = (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default loginReducer
