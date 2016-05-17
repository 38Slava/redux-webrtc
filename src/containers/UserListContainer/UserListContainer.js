import { Component, PropTypes } from 'react'
import UserCardContainer from 'containers/UserCardContainer'

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
            return (<UserCardContainer key={item.name} {...item} />)
          })
        }
      </div>
    )
  }
}

export default UserListContainer
