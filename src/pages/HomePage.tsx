/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import Page from '../components/Page'
import { jsx, css } from '@emotion/core'
import { Request } from '../types'
import { getRequests } from '../api'
import { Tabs, Tab } from '../components/Tabs'
import Search from '../components/Search'
import RequestList from '../components/RequestList'
import { isUserCreator, isTakenBy } from '../utils'

const HomePage: React.FunctionComponent = () => {
  const [requests, setRequests] = useState<Request[]>([])
  const [search, setSearch] = useState<string>('')
  // TODO: move use to context
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    const fetchRequests = async (): Promise<void> => {
      const requests = await getRequests(null, true)
      setRequests(requests)
    }
    fetchRequests()
  })

  return (
    <Page>
      <h1>Requests</h1>
      <Tabs>
        <Tab label="List">
          <Search value={search} onSearch={setSearch} />
          <RequestList
            requests={requests.filter(
              (req) =>
                !isUserCreator(req.createdBy, user) &&
                !isTakenBy(req.takenBy, user) &&
                req.category.toLowerCase().includes(search.toLowerCase())
            )}
          />
        </Tab>
        <Tab label="Map">
          <div
            css={css`
              padding: 16px;
            `}
          >
            To be implemented
          </div>
        </Tab>
      </Tabs>
    </Page>
  )
}

export default HomePage
