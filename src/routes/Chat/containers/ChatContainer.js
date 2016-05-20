import { connect } from 'react-redux'
import { initVideo } from '../modules/video'
import { sendMessage } from '../modules/chat'
import ChatView from '../components/ChatView'

const mapStateToProps = (state) => ({
  users: state.users,
  messages: state.chat
})

const mapActionCreators = {
  initVideo,
  sendMessage
}

export default connect(mapStateToProps, mapActionCreators)(ChatView)
