export const
  GET_DEVICE_INFO = "GET_DEVICE_INFO"

export function getDeviceInfo(data){
  console.log(data)
  return {
    type: GET_DEVICE_INFO,
    payload: data
  }
}
