export const 
  SET_USER_DATA = 'SET_USER_DATA',
  LOGOUT = 'LOGOUT'

export function setUserData(data) {
  return {
    type: SET_USER_DATA,
    payload: data,
  }
}

export function logout(data) {
  return {
    type: LOGOUT,
    payload: data,
  }
}