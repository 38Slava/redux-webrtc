import Message from './Message'
import classes from './MessageList.scss'

const MessageList = (props) => (
  <div className={classes.container}>
    {
      _.map(props.items, (item) => (
        <Message {...item} className={classes.item} />
      ))
    }
  </div>
)

export default MessageList
