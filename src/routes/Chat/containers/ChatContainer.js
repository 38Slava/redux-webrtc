import { connect } from 'react-redux'
import { initVideo } from '../modules/video'
import VideoContainer from 'containers/VideoContainer'

const mapStateToProps = (state) => ({
  video: state.chat.stream
})

const mapActionCreators = {
  initVideo
}

export default connect(mapStateToProps, mapActionCreators)(VideoContainer)
