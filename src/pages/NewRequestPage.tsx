/** @jsx jsx */
import React, { useState } from 'react'
import Page from '../components/Page'
import { jsx, css } from '@emotion/core'

const NewRequestPage: React.FunctionComponent = () => {
  const [category, setCategory] = useState<string>('groceries')
  const [location, setLocation] = useState<string>('')
  const [reward, setReward] = useState<string>('') // TODO: Number input or regexp
  const [description, setDescription] = useState<string>('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (!category || !location || !description) return
    // const success = auth.login(email, password)
    // if (success) history.push('/')
  }

  return (
    <Page>
      <h1>Create request</h1>
      <form css={css``} onSubmit={onSubmit}>
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
          <option value="food">Food</option>
          <option value="post">Post</option>
        </select>
        <input
          id="location"
          name="location"
          type="text" // TODO: autofetch from profile and select from PostNord API
          placeholder="location"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value)
          }}
        />
        <input
          id="reward"
          name="reward"
          type="text" // TODO: maybe number input
          placeholder="reward"
          value={reward}
          onChange={(event) => {
            setReward(event.target.value)
          }}
        />
        <textarea
          id="description"
          name="description"
          placeholder="description"
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
