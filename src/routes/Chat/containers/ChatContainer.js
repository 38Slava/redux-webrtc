import { connect } from 'react-redux'
import { initVideo } from '../modules/video'
import ChatView from '../components/ChatView'

const mapStateToProps = (state) => ({
  users: state.users
})

const mapActionCreators = {
  initVideo
}

export default connect(mapStateToProps, mapActionCreators)(ChatView)
