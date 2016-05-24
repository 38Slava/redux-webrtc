import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'chat',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Chat = require('./containers/ChatContainer').default
      const chatReducer = require('./modules/chat').default
      const videoReducer = require('./modules/video').default

      injectReducer(store, {key: 'chat', reducer: chatReducer})
      injectReducer(store, {key: 'video', reducer: videoReducer})

      cb(null, Chat)
    }, 'chat')
  }
})
