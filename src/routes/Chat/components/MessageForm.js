import { Component, PropTypes } from 'react'
import classes from './MessageForm.scss'

class MessageForm extends Component {
  handleSubmit (e) {
    e.preventDefault()
    let input = this.refs
    this.props.sendMessage(input.message.value)
    input.message.value = ''
  }
  render () {
    return (
      <div>
        <form onSubmit={::this.handleSubmit} className={classes.container}>
          <input type='text' ref='message' placeholder='Type message' className={classes.input} />
          <button type='submit' className={classes.button}>
            Send
          </button>
          </form>
      </div>
    )
  }
}

export default MessageForm
