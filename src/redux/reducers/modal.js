import {OPEN_MODAL, OPEN_LOGIN, CLOSE_MODAL} from '../actions/modal'

const MODAL = {
  open: false,
  login: false
}

export function modal(state = MODAL, action) {
  switch (action.type) {
    case OPEN_LOGIN:
      return {...state, open: true, login: true}

    
    case CLOSE_MODAL: 
      return MODAL

    default:
      return state
  }
}