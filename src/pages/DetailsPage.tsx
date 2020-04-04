/** @jsx jsx */
import React, { useState, useEffect, Fragment } from 'react'
import Page from '../components/Page'
import { jsx } from '@emotion/core'
import { Request } from '../types'
import { getRequest } from '../api'
import { useParams } from 'react-router-dom'

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

  return (
    <Page>
      <h1>Details</h1>
      {request && (
        <Fragment>
          <div>{request.createdBy}</div>
          <div>{request.location}</div>
          <div>{request.category}</div>
          <div>{request.reward} SEK</div>
          <div>{request.description}</div>
          <button>Accept</button>
        </Fragment>
      )}
    </Page>
  )
}

export default DetailsPage
