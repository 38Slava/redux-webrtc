import peer from 'peers'

export const INIT_VIDEO_REQUEST = 'INIT_VIDEO_REQUEST'
export const INIT_VIDEO_SUCCESS = 'INIT_VIDEO_SUCCESS'
export const INIT_VIDEO_FAIL = 'INIT_VIDEO_FAIL'

const SERVER_SEND_BLOB = 'server/SEND_BLOB'
const SOCKET_SEND_BLOB = 'socket/SEND_BLOB'

const CALL_SUCCESS = 'CALL_SUCCESS'

const ADD_REMOTE_BLOB = 'ADD_REMOTE_BLOB'

export const initVideoRequest = () => ({
  type: INIT_VIDEO_REQUEST
})

export const initVideoSuccess = (response) => ({
  type: INIT_VIDEO_SUCCESS,
  payload: response
})

export const initVideoFail = (err) => ({
  type: INIT_VIDEO_FAIL,
  payload: err
})

const broadcastBlob = (blob) => ({
  type: SERVER_SEND_BLOB,
  payload: blob
})

export const initVideo = () => {
  let constraints = {
    audio: true,
    video: true
  }
  return async (dispatch) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      const blob = URL.createObjectURL(stream)
      // dispatch(broadcastBlob(blob))
      dispatch(initVideoSuccess(blob))
    } catch (err) {
      console.log(err)
      dispatch(initVideoFail(err))
    }
  }
}

export const callSuccess = () => ({
  type: CALL_SUCCESS
})

export const addRemoteBlob = (blob) => ({
  type: ADD_REMOTE_BLOB,
  payload: blob
})

export const call = () => {
  let constraints = {
    audio: true,
    video: true
  }
  return async (dispatch, getState) => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints)
    let remotePeerId = getState().users.remoteUser.peerId
    console.log(`Remote peerId ${remotePeerId}`)
    let call = peer.call(remotePeerId, stream)
    call.on('stream', (remoteStream) => {
      console.log(`Remote stream ${URL.createObjectURL(remoteStream)}`)
      dispatch(addRemoteBlob(URL.createObjectURL(remoteStream)))
    })

    dispatch(callSuccess())
  }
}

const ACTION_HANDLERS = {
  [INIT_VIDEO_REQUEST]: (state, action) => state,
  [INIT_VIDEO_SUCCESS]: (state, action) => ({
    ...state,
    blob: action.payload
  }),
  [INIT_VIDEO_FAIL]: (state, action) => ({
    ...state,
    error: action.payload
  }),
  [ADD_REMOTE_BLOB]: (state, action) => ({
    ...state,
    remoteBlob: action.payload
  })
}

const videoReducer = (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default videoReducer
