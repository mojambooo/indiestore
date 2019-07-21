export const
  OPEN_MODAL = "OPEN_MODAL",
  OPEN_LOGIN = "OPEN_LOGIN",
  CLOSE_MODAL = "CLOSE_MODAL"

export function openLogin(data) {
  return {
    type: OPEN_LOGIN,
    payload: data,
  }
}

export function modalClose(){
  return {
    type: CLOSE_MODAL
  }
}