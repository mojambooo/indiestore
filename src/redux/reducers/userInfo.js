import {SET_USER_DATA} from '../actions/user'

const USER_INFO = {
  userInfo: false
}

export function userInfo(state = USER_INFO, action) {
  switch (action.type) {
    case SET_USER_DATA: 
      return {...state, userInfo: action.payload}

    default:
      return state
  }
}