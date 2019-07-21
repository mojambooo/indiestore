import {combineReducers} from 'redux'
import {store} from './store'
import {userInfo} from './userInfo'

const allReducers = combineReducers({
  store: store,
  userInfo: userInfo
})

export default allReducers
