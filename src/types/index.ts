export interface Request {
  id: string
  image: string
  firstName: string
  lastName: string
  category: string
  location: string
  address: string
  description: string
  createdBy: string // TODO: Must be a relation to a person created
  status: string
  takenBy?: string // TODO: Must be a relation to a person who took a request
  reward?: string
}

export interface User {
  email: string
  password: string
}
