import React, { useState } from 'react'

interface Request {
  id: string
  firstName: string
  lastName: string
  category: string
  location: string
  description: string
}

const HomePage = (): React.FunctionComponentElement<{}> => {
  const [requests, setRequests] = useState<Request[]>([])

  return (
    <div>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <div>{request.category}</div>
            <div>
              {request.firstName} {request.lastName}
            </div>
            <div>{request.location}</div>
            <div>{request.description}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
