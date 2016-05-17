import { connect } from 'react-redux'
import { initVideo } from '../modules/video'
import ChatView from '../components/ChatView'
import VideoContainer from 'containers/VideoContainer'

const mapStateToProps = (state) => ({
  users: state.users
})

const mapActionCreators = {
  initVideo
}

export default connect(mapStateToProps, mapActionCreators)(ChatView)
