import { Component, PropTypes } from 'react'
import UserCard from 'components/UserCard'

class UserListContainer extends Component {
  static propTypes = {
    items: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ])
  }
  render () {
    return (
      <div>
        {
          _.map(this.props.items, (item) => {
            return (<UserCard key={item.name} {...item} />)
          })
        }
      </div>
    )
  }
}

export default UserListContainer
