import { PropTypes } from 'react'
import UserAvatar from 'components/UserAvatar'
import classes from './Message.scss'

const Message = (props) => (
  <div className={classes.container}>
    <div className={classes.user}>
      <UserAvatar name={props.name} size={50} />
      <span>{props.name}</span>
    </div>
    <div className={classes.message}>
      <span>{props.message}</span>
    </div>
  </div>
)

Message.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string
}

export default Message
