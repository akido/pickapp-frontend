import requests from '../mocks/requests.json'
import { Request } from '../types'

const baseUrl = 'https://www.pickapp.com'
const mockTimeout = 500

export const getRequests = (isMock?: boolean): Promise<Request[]> => {
  if (isMock) {
    return new Promise((resolve) => {
      // setTimeout(() => {
      resolve(requests)
      // }, mockTimeout)
    })
  } else {
    // TODO: implement actual server call
    // return fetch(baseUrl + '/requests').then(resp => resp.json())
  }
}

export const getRequest = (
  requestId: string,
  isMock?: boolean
): Promise<Request> => {
  if (isMock) {
    return new Promise((resolve) => {
      // setTimeout(() => {
      const req = requests.find((request) => request.id === requestId)
      resolve(req)
      // }, mockTimeout)
    })
  } else {
    // TODO: implement actual server call
    // return fetch(baseUrl + '/request' + requestId).then(resp => resp.json())
  }
}
