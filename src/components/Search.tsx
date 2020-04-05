/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { IoIosSearch } from 'react-icons/io'

const Container = styled.div`
  width: 100%;
  height: 52px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #aaa;
  svg {
    font-size: 20px;
    margin-right: 12px;
  }
  input {
    border: none;
    font-size: 16px;
  }
`

interface SearchProps {
  value: string
  onSearch: (value: string) => void
}

const Search: React.FunctionComponent<SearchProps> = ({
  value,
  onSearch,
}: SearchProps) => (
  <Container>
    <IoIosSearch />
    <input
      type="text"
      placeholder="Search by category"
      value={value}
      onChange={(event) => {
        onSearch(event.target.value)
      }}
    />
  </Container>
)

export default Search
