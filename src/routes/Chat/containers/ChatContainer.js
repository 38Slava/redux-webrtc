import { connect } from 'react-redux'
import { initVideo, call } from '../modules/video'
import { sendMessage } from '../modules/chat'
import ChatView from '../components/ChatView'

const mapStateToProps = (state) => ({
  users: state.users,
  messages: state.chat,
  blob: state.video.blob,
  remoteBlob: state.video.remoteBlob
})

const mapActionCreators = {
  initVideo,
  sendMessage,
  call
}

export default connect(mapStateToProps, mapActionCreators)(ChatView)
