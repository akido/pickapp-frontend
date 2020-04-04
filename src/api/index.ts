import requests from '../mocks/requests.json'
import { Request } from '../types'

const baseUrl = 'https://www.pickapp.com'
const mockTimeout = 500

interface RequestsFilter {
  category?: string
  createdBy?: string
  takenBy?: string
}

export const getRequests = (
  filter?: RequestsFilter,
  isMock?: boolean
): Promise<Request[]> => {
  if (isMock) {
    return new Promise((resolve) => {
      // setTimeout(() => {
      // const loggedInUser = JSON.parse(localStorage.getItem('user'))
      // if (filter && filter.createdBy && loggedInUser && loggedInUser.email === filter.createdBy) {
      if (filter && filter.createdBy) {
        resolve(requests.filter((req) => req.createdBy === filter.createdBy))
      }
      if (filter && filter.takenBy) {
        resolve(requests.filter((req) => req.takendBy === filter.takenBy))
      }
      resolve(requests)
      // }, mockTimeout)
    })
  } else {
    // TODO: implement actual server call
    // TODO: Form a proper query params from the filter
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
