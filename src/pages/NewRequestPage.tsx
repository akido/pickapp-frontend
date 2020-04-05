/** @jsx jsx */
import React, { useState } from 'react'
import Page from '../components/Page'
import { jsx, css } from '@emotion/core'
import { createRequest } from '../api'
import { useHistory } from 'react-router-dom'

const formStyles = css`
  display: flex;
  flex-direction: column;
  .block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    label {
      flex: 1;
    }
    select {
      flex: 3;
      align-self: flex-start;
    }
    input {
      flex: 3;
      height: 52px;
      border: 2px solid black;
      padding: 16px;
      box-sizing: border-box;
      font-size: 16px;
    }
  }
  textarea {
    border: 2px solid black;
    padding: 16px;
    font-size: 16px;
    height: 100px;
    margin-bottom: 16px;
  }
  /* The same as on Login, Profile TODO: make a common style component */
  button {
    height: 52px;
    font-size: 16px;
    background-color: transparent;
    color: #00a3ff;
    border: 2px solid #00a3ff;
    border-radius: 4px;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
      background-color: #065c8c;
      border: 1px solid #065c8c;
      color: white;
    }
  }
`

const NewRequestPage: React.FunctionComponent = () => {
  const history = useHistory()
  const [category, setCategory] = useState<string>('groceries')
  const [address, setAddress] = useState<string>('')
  const [reward, setReward] = useState<string>('') // TODO: Number input or regexp
  const [description, setDescription] = useState<string>('')

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    if (!category || !address || !description) return
    const user = JSON.parse(localStorage.getItem('user'))
    const response = await createRequest(
      {
        createdBy: user.email,
        category,
        address,
        description,
        reward,
      },
      true
    )
    if (response.id) history.push('/')
  }

  return (
    <Page>
      <h1>Create request</h1>
      <form css={formStyles} onSubmit={onSubmit}>
        <div className="block">
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value)
            }}
          >
            <option value="groceries">Groceries</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="restaurant">Restaurant</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>
        <div className="block">
          <label htmlFor="address">Address: </label>
          <input
            id="address"
            name="address"
            type="text" // TODO: autofetch from profile and select from PostNord API
            placeholder="address"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value)
            }}
          />
        </div>
        <div className="block">
          <label htmlFor="reward">Reward: </label>
          <input
            id="reward"
            name="reward"
            type="text" // TODO: maybe number input
            placeholder="Reward"
            value={reward}
            onChange={(event) => {
              setReward(event.target.value)
            }}
          />
        </div>
        <label
          css={css`
            margin-bottom: 8px;
          `}
          htmlFor="description"
        >
          Description:{' '}
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value)
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </Page>
  )
}

export default NewRequestPage
