import { PropTypes } from 'react'
import UserAvatar from 'components/UserAvatar'

const UserCardContainer = (props) => (
  <div>
    <div>
      <UserAvatar name={props.name} size={props.size} />
    </div>
    <div>
      <span>{props.name}</span>
    </div>
  </div>
)

UserCardContainer.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number
}

export default UserCardContainer
