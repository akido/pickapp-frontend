/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import Page from '../components/Page'
import { jsx } from '@emotion/core'
import { Request } from '../types'
import { getRequest } from '../api'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .person-details {
    display: flex;
    margin-bottom: 16px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 60px;
      margin-right: 16px;
    }
    .person-name {
      font-weight: bold;
      margin: 12px 0;
    }
  }
  .block {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    > div:first-of-type {
      margin-bottom: 8px;
    }
  }
  .description {
    color: #aaa;
  }
  .reward {
    background-color: #00a3ff;
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    align-self: flex-start;
  }
  .btn-accept {
    margin-top: 16px;
    padding: 8px 16px;
    background-color: transparent;
    border: 2px solid;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    border-color: #00a3ff;
    color: #00a3ff;
    height: 52px;
    &:hover {
      background-color: #00a3ff;
      color: white;
    }
  }
`

const DetailsPage: React.FunctionComponent = () => {
  const [request, setRequest] = useState<Request | null>(null)
  const params = useParams() as { id: string }

  useEffect(() => {
    const fetchRequests = async (): Promise<void> => {
      const request = await getRequest(params.id, true)
      setRequest(request)
    }
    fetchRequests()
  })

  const acceptRequest = (event: React.MouseEvent): void => {
    console.log('move to my errands...')
  }

  return (
    <Page>
      <h1>Details</h1>
      {request ? (
        <Container>
          <div className="person-details">
            <img src={request.image} alt={request.createdBy} />
            <div>
              <div className="person-name">
                {request.firstName} {request.lastName}
              </div>
              <div>{request.address}</div>
            </div>
          </div>
          <div className="block">
            <div>{request.category}</div>
            <div className="description">{request.description}</div>
          </div>
          <div className="block">
            <div>Reward:</div>
            <div className="reward">{request.reward}</div>
          </div>
          <button className="btn-accept" onClick={acceptRequest}>
            Accept
          </button>
        </Container>
      ) : (
        <div>404</div>
      )}
    </Page>
  )
}

export default DetailsPage
