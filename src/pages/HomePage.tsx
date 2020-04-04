/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import Page from '../components/Page'
import { jsx } from '@emotion/core'
import { Request } from '../types'
import { getRequests } from '../api'

const HomePage: React.FunctionComponent = () => {
  const [requests, setRequests] = useState<Request[]>([])

  useEffect(() => {
    const fetchRequests = async (): Promise<void> => {
      const requests = await getRequests(true)
      setRequests(requests)
    }
    fetchRequests()
  })

  return (
    <Page>
      <h1>Requests</h1>
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
    </Page>
  )
}

export default HomePage
