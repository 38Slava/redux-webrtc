import { PropTypes } from 'react'
import UserListContainer from 'containers/UserListContainer'

const ChatView = (props) => (
  <div>
    <UserListContainer items={props.users} />
  </div>
)

ChatView.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default ChatView
