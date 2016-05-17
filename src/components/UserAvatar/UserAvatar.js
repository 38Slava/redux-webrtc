import { Component, PropTypes } from 'react'

class UserAvatar extends Component {
  static propTypes = {
    name: PropTypes.string
  }
  static defaultProps = {
    size: 100
  }
  render () {
    let { name, size } = this.props
    let url = `https://robohash.org/${name}.png?size=${size}x${size}`
    return (
      <div>
        <img src={url} alt="User avatar"/>
      </div>
    )
  }
}

export default UserAvatar
