/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const TabPanel = styled.div`
  display: flex;
  width: 100%;
  > div {
    flex: 1;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    text-align: center;
    padding: 16px;
    cursor: pointer;
    &:hover {
      background-color: #065c8c;
      border: 1px solid #065c8c;
      color: white;
    }
    &:first-of-type {
      border-right: 1px solid #aaa;
    }
    &.active {
      background-color: #00a3ff;
      border: none;
      color: white;
    }
  }
`

const TabContent = styled.div``

interface TabProps {
  label: string
  active?: boolean
  onSelect?: (label: string) => void
  children: React.ReactNode
}

const Tab: React.FunctionComponent<TabProps> = ({ children }: TabProps) => {
  return <div>{children}</div>
}

const Tabs: React.FunctionComponent = ({ children }: any) => {
  const labels = children.map((kid: any) => kid.props.label)
  const [active, setActive] = useState<string>(labels[0])

  const toShow = children.find((kid: any) => kid.props.label === active)
  return (
    <div>
      <TabPanel>
        {labels.map((label: string) => (
          <div
            onClick={() => setActive(label)}
            key={label}
            className={label === active ? 'active' : ''}
          >
            {label}
          </div>
        ))}
      </TabPanel>
      <TabContent>{toShow}</TabContent>
    </div>
  )
}

export { Tabs, Tab }
