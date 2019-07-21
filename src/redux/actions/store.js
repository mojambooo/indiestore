export const 
  OPEN_MODAL = "OPEN_MODAL",
  OPEN_LOGIN = "OPEN_LOGIN",
  GET_DEVICE_INFO = "GET_DEVICE_INFO"

export function getDeviceInfo(data){
  return {
    type: GET_DEVICE_INFO,
    payload: data
  }
}

export function openModal(data) {
  return {
    type: OPEN_MODAL,
    payload: data,
  }
}

export function openLogin(data) {
  return {
    type: OPEN_LOGIN,
    payload: data,
  }
}