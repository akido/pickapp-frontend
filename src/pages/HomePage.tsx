/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import Page from '../components/Page'
import { jsx, css } from '@emotion/core'
import { Request } from '../types'
import { getRequests } from '../api'
import { Tabs, Tab } from '../components/Tabs'
import { Link } from 'react-router-dom'

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
      <Tabs>
        <Tab label="List">
          <ul>
            {requests.map((request) => (
              <li
                key={request.id}
                css={css`
                  border-bottom: 1px solid black;
                  margin-bottom: 16px;
                `}
              >
                <Link to={`/requests/${request.id}`}>
                  <div>{request.category}</div>
                  <div>
                    {request.firstName} {request.lastName}
                  </div>
                  <div>{request.location}</div>
                  <div>{request.reward} SEK</div>
                  <div>{request.description}</div>
                </Link>
              </li>
            ))}
          </ul>
        </Tab>
        <Tab label="Map">* To be implemented *</Tab>
      </Tabs>
    </Page>
  )
}

export default HomePage
