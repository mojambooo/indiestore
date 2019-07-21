import {GET_DEVICE_INFO} from '../actions/store'

const STORE = {
  mobile: false
}

export function store(state = STORE, action) {
  switch (action.type) {
    case GET_DEVICE_INFO:
      console.log(action)
      return {...state, mobile: action.payload}

    default:
      return state
  }
}