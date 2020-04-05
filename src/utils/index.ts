import { User } from '../types'

export const isUserCreator = (createdBy: string, user?: User): boolean => {
  if (user && user.email === createdBy) return true
  return false
}

export const isTakenBy = (takenBy: string, user?: User): boolean => {
  if (user && user.email === takenBy) return true
  return false
}
