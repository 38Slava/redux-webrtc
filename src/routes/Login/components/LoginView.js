import { Component, PropTypes } from 'react'

class LoginView extends Component {
  static propTypes = {
    login: PropTypes.func
  }
  handleSubmit (e) {
    e.preventDefault()
    let input = this.refs
    this.props.login(input.name.value)
  }
  render () {
    return (
      <div>
        <form onSubmit={::this.handleSubmit}>
          <div>
            <input type='text' ref='name' placeholder='Type your name' />
          </div>
          <button type='submit'>
            Log in
          </button>
          </form>
      </div>
    )
  }
}

export default LoginView
