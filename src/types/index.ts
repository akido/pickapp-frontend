export interface Request {
  id: string
  image: string
  firstName: string
  lastName: string
  category: string
  location: string
  address: string
  description: string
  reward?: string
  createdBy?: string // TODO: Must be a relation to a person created
  takenBy?: string // TODO: Must be a relation to a person who took a request
}
