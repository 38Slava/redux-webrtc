import { Component, PropTypes } from 'react'
import UserListContainer from 'containers/UserListContainer'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import classes from './ChatView.scss'
import Video from 'components/Video'
import peer from 'peers'

class ChatView extends Component {
  static propTypes = {
    users: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    messages: PropTypes.array,
    initVideo: PropTypes.func,
    blob: PropTypes.string,
    remoteBlob: PropTypes.string,
    sendMessage: PropTypes.func
  }
  componentWillMount() {
    this.props.initVideo()
  }
  componentDidMount () {
    let constraints = {
      audio: true,
      video: true
    }
    peer.on('call', async (call) => {
      console.log('CALLED')
      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      call.answer(stream)
    })
  }
  render () {
    return (
      <div className={classes.container}>
        <button onClick={this.props.call}>Call</button>
        <Video src={this.props.remoteBlob} width='320' />
        <Video src={this.props.blob} width='240' />
        <div className={classes['user-list']}>
          <UserListContainer items={this.props.users} />
        </div>
        <div className={classes['messages']}>
          <MessageList items={this.props.messages} />
          <MessageForm sendMessage={this.props.sendMessage} />
        </div>
      </div>
    )
  }
}

ChatView.propTypes = {

}

export default ChatView
