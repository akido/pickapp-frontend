/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import Page from '../components/Page'
import { jsx } from '@emotion/core'
import { Request } from '../types'
import { getRequests } from '../api'
import { Tabs, Tab } from '../components/Tabs'
import RequestList from '../components/RequestList'

const MyErrandsPage: React.FunctionComponent = () => {
  const [requests, setRequests] = useState<Request[]>([])

  useEffect(() => {
    const fetchRequests = async (): Promise<void> => {
      const user = JSON.parse(localStorage.getItem('user'))
      const requests = await getRequests(
        {
          takenBy: user.email,
        },
        true
      )
      setRequests(requests)
    }
    fetchRequests()
  })

  return (
    <Page>
      <h1>My errands</h1>
      <Tabs>
        <Tab label="Active">
          <RequestList requests={requests} />
          {/* TODO: Cancel button */}
        </Tab>
        <Tab label="Done">
          <RequestList requests={requests} />
        </Tab>
      </Tabs>
    </Page>
  )
}

export default MyErrandsPage
