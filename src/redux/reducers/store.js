import {GET_DEVICE_INFO, OPEN_MODAL, OPEN_LOGIN} from '../actions/store'

const STORE = {
  modal: false,
  loginModal: false,
  mobile: false
}

export function store(state = STORE, action) {
  switch (action.type) {
    case GET_DEVICE_INFO:
      return {...state, mobile: action.payload}

    case OPEN_LOGIN: 
      return {...state, loginModal: true, modal: true}

    default:
      return state
  }
}