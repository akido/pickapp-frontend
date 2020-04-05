import { User } from '../types'

export const isUserCreator = (createdBy: string, user?: User) => {
  if (user && user.email === createdBy) return true
  return false
}
