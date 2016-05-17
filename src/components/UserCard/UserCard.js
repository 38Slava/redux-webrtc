import { PropTypes } from 'react'

const UserCard = (props) => (
  <div>
    <div>
      <img src={props.avatar} alt="UserAvatar"/>
    </div>
    <div>
      <span>{props.name}</span>
    </div>
  </div>
)

UserCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string
}

export default UserCard
