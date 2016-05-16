export const INIT_VIDEO_REQUEST = 'INIT_VIDEO_REQUEST'
export const INIT_VIDEO_SUCCESS = 'INIT_VIDEO_SUCCESS'
export const INIT_VIDEO_FAIL = 'INIT_VIDEO_FAIL'

export const initVideoRequest = () => {
  return {
    type: INIT_VIDEO_REQUEST
  }
}

export const initVideoSuccess = (stream) => {
  return {
    type: INIT_VIDEO_SUCCESS,
    payload: stream
  }
}

export const initVideoFail = (err) => {
  return {
    type: INIT_VIDEO_FAIL,
    payload: err
  }
}

// export const initVideo = () => {
//   let constraints = {
//     audio: false,
//     video: true
//   }
//   let video = document.querySelector('video')
//   console.log(video.srcObject)
//   return async (dispatch) => {
//     try {
//       let stream = await navigator.mediaDevices.getUserMedia(constraints)
//       let videoTracks = stream.getVideoTracks()
//       video.srcObject = stream
//       console.log(`Got stream with constraints ${JSON.stringify(constraints)}`)
//       console.log(`Useing video device ${videoTracks[0].label}`)
//       console.log(stream)
//       dispatch(initVideoSuccess(stream))
//     } catch (err) {
//       dispatch(initVideoFail(err))
//     }
//   }
// }

export const initVideo = () => {
  let constraints = {
    audio: false,
    video: true
  }
  let video = document.querySelector('video')
  console.log(video.srcObject)
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      let videoTracks = stream.getVideoTracks()
      video.srcObject = stream
      console.log(`Got stream with constraints ${JSON.stringify(constraints)}`)
      console.log(`Useing video device ${videoTracks[0].label}`)
      console.log(stream)
    })
    .catch((err) => console.log(err))
}

const ACTION_HANDLERS = {
  [INIT_VIDEO_REQUEST]: (state, action) => state,
  [INIT_VIDEO_SUCCESS]: (state, action) => ({
    ...state,
    stream: action.payload
  }),
  [INIT_VIDEO_FAIL]: (state, action) => ({
    ...state,
    error: action.payload
  })
}

const videoReducer = (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default videoReducer
