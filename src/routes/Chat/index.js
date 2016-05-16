import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'chat',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Video = require('./containers/ChatContainer').default
      const reducer = require('./modules/video').default

      injectReducer(store, {key: 'chat', reducer})

      cb(null, Video)

    }, 'chat')
  }
})
