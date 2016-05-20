export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const SEND_MESSAGE_FAIL = 'SEND_MESSAGE_FAIL'

const SERVER_SEND_MESSAGE = 'server/SEND_MESSAGE';
const SOCKET_SEND_MESSAGE = 'socket/SEND_MESSAGE';

export const sendMessageRequest = () => {
  return {
    type: SEND_MESSAGE_REQUEST
  }
}

export const sendMessageSuccess = (response) => {
  return {
    type: SEND_MESSAGE_SUCCESS,
    payload: response
  }
}

export const sendMessageFail = (err) => {
  return {
    type: SEND_MESSAGE_FAIL,
    payload: err
  }
}

export const broadcastMessage = (response) => {
  return {
    type: SERVER_SEND_MESSAGE,
    payload: response
  }
}

const sendMessagePromise = (message) => {
  return new Promise((resolve, reject) => {
    if (message) {
      resolve(message)
    } else {
      let err = new Error('Message field is empty!')
      reject(err.message)
    }
  })
}

export const sendMessage = (message) => {
  return async (dispatch) => {
    try {
      const data = await sendMessagePromise(message)
      dispatch(sendMessageSuccess({
        name: localStorage.getItem('name'),
        message: data
      }))
      dispatch(broadcastMessage({
        name: localStorage.getItem('name'),
        message: data
      }))
    } catch (err) {
      dispatch(sendMessageFail(err))
    }
  }
}

const ACTION_HANDLERS = {
  [SEND_MESSAGE_REQUEST]: (state, action) => state,
  [SEND_MESSAGE_SUCCESS]: (state, action) => ([
    ...state,
    action.payload
  ]),
  [SEND_MESSAGE_FAIL]: (state, action) => state,
  [SOCKET_SEND_MESSAGE]: (state, action) => ([
    ...state,
    action.payload
  ])
}

const chatReducer = (state = [], action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action): state
}

export default chatReducer
