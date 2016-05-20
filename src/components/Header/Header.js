import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <h1>Chaterino</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Login
    </IndexLink>
    {' · '}
    <Link to='/chat' activeClassName={classes.activeRoute}>
      Chat
    </Link>
  </div>
)

export default Header
