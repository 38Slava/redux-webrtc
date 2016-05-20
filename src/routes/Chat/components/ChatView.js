import { PropTypes } from 'react'
import UserListContainer from 'containers/UserListContainer'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import classes from './ChatView.scss'

const ChatView = (props) => (
  <div className={classes.container}>
    <div className={classes['user-list']}>
      <UserListContainer items={props.users} />
    </div>
    <div className={classes['messages']}>
      <MessageList items={props.messages} />
      <MessageForm sendMessage={props.sendMessage} />
    </div>
  </div>
)

ChatView.propTypes = {
  users: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  messages: PropTypes.array
}

export default ChatView
