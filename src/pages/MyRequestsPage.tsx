/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import Page from '../components/Page'
import { jsx } from '@emotion/core'
import { Request } from '../types'
import { getRequests } from '../api'
import { Tabs, Tab } from '../components/Tabs'
import RequestList from '../components/RequestList'

const MyRequestsPage: React.FunctionComponent = () => {
  const [requests, setRequests] = useState<Request[]>([])
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    const fetchRequests = async (): Promise<void> => {
      const requests = await getRequests(
        {
          createdBy: user.email,
        },
        true
      )
      setRequests(requests)
    }
    fetchRequests()
  })

  return (
    <Page>
      <h1>My requests</h1>
      <Tabs>
        <Tab label="Active">
          <RequestList
            requests={requests.filter((request) => request.status === 'active')}
          />
        </Tab>
        <Tab label="Done">
          <RequestList
            requests={requests.filter((request) => request.status === 'done')}
          />
        </Tab>
      </Tabs>
    </Page>
  )
}

export default MyRequestsPage
