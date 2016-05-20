import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Login = require('./containers/LoginContainer').default
      const reducer = require('./modules/login').default

      injectReducer(store, { key: 'users', reducer })

      cb(null, Login)
    }, 'login')
  }
})
