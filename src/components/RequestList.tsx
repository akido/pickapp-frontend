/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Request } from '../types'
import { useHistory } from 'react-router-dom'
import { isUserCreator } from '../utils'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
  li {
    border-bottom: 1px solid #aaa;
    padding: 16px;
    .item {
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
      .item-options {
        flex: 1;
        text-align: right;
        button {
          padding: 8px 16px;
          background-color: transparent;
          border: 2px solid;
          border-radius: 4px;
          text-transform: uppercase;
          font-size: 14px;
          font-weight: bold;
          &.item-btn-done {
            border-color: #00a3ff;
            color: #00a3ff;
            &:hover {
              background-color: #00a3ff;
              color: white;
            }
          }
          &.item-btn-cancel {
            border-color: #f24f4f;
            color: #f24f4f;
            margin-left: 12px;
            &:hover {
              background-color: #f24f4f;
              color: white;
            }
          }
        }
      }
    }
  }
`

interface RequestListProps {
  requests: Request[]
}

const RequestList: React.FunctionComponent<RequestListProps> = ({
  requests,
}: RequestListProps) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const history = useHistory()

  const onDoneClick = (event: React.MouseEvent): void => {
    event.stopPropagation()
    console.log('move to done...')
  }

  const onCancelClick = (event: React.MouseEvent): void => {
    event.stopPropagation()
    console.log('remove from everywhere...')
  }

  return (
    <List>
      {requests.map((req) => (
        <li key={req.id}>
          <div
            className="item"
            onClick={() => {
              history.push(`/requests/${req.id}`)
            }}
          >
            {!isUserCreator(req.createdBy, user) && (
              <img className="item-img" src={req.image} alt={req.id} />
            )}
            <div className="item-content">
              {!isUserCreator(req.createdBy, user) && (
                <div>
                  <span className="item-name">
                    {req.firstName} {req.lastName}
                  </span>
                  , {req.location}
                </div>
              )}
              <div className="item-category">{req.category}</div>
              <div className="item-reward">{req.reward}</div>
              <div className="item-description">{req.description} ...</div>
            </div>
            {isUserCreator(req.createdBy, user) && (
              <div className="item-options">
                <button className="item-btn-done" onClick={onDoneClick}>
                  Done
                </button>
                <button className="item-btn-cancel" onClick={onCancelClick}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </li>
      ))}
    </List>
  )
}

export default RequestList
