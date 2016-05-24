import { PropTypes } from 'react'
import Message from './Message'
import classes from './MessageList.scss'

let key = 0

const MessageList = (props) => (
  <div className={classes.container}>
    {
      _.map(props.items, (item) => (
        <Message key={key++} {...item} />
      ))
    }
  </div>
)

MessageList.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

export default MessageList
