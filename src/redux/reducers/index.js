import {combineReducers} from 'redux'
import {store} from './store'
import {userInfo} from './userInfo'
import {modal} from './modal'

const allReducers = combineReducers({
  store: store,
  userInfo: userInfo,
  modal: modal
})

export default allReducers
