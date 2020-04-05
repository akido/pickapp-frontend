/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import Page from '../components/Page'
import { jsx, css } from '@emotion/core'
import { Request } from '../types'
import { getRequests } from '../api'
import { Tabs, Tab } from '../components/Tabs'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import styled from '@emotion/styled'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
  li {
    border-bottom: 1px solid #aaa;
    padding: 16px;
    a {
      text-decoration: none;
      color: black;
      display: flex;
      align-items: center;
      > .item-img {
        width: 100px;
        height: 100px;
        border-radius: 60px;
        margin-right: 16px;
      }
      > .item-content {
        display: flex;
        flex-direction: column;
        > div {
          margin-bottom: 8px;
        }
      }
      .item-name {
        font-weight: bold;
      }
      .item-reward {
        background-color: #00a3ff;
        color: white;
        padding: 4px 8px;
        border-radius: 12px;
        align-self: flex-start;
      }
      .item-description {
        color: #b9b9b9;
      }
    }
  }
`

const HomePage: React.FunctionComponent = () => {
  const [requests, setRequests] = useState<Request[]>([])
  const [search, setSearch] = useState<string>('')

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
          <List>
            {requests
              .filter((request) => request.category.includes(search))
              .map((request) => (
                <li key={request.id}>
                  <Link to={`/requests/${request.id}`}>
                    <img
                      className="item-img"
                      src={request.image}
                      alt={request.id}
                    />
                    <div className="item-content">
                      <div>
                        <span className="item-name">
                          {request.firstName} {request.lastName}
                        </span>
                        , {request.location}
                      </div>
                      <div className="item-category">{request.category}</div>
                      <div className="item-reward">{request.reward}</div>
                      <div className="item-description">
                        {request.description}...
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
          </List>
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
