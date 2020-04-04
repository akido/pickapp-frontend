/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'

const TabPanel = styled.div`
  display: flex;
  width: 100%;
  > div {
    flex: 1;
    border: 1px solid black;
    text-align: center;
    padding: 16px;
    cursor: pointer;
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
          <div onClick={() => setActive(label)} key={label}>
            {label}
          </div>
        ))}
      </TabPanel>
      <TabContent>{toShow}</TabContent>
    </div>
  )
}

export { Tabs, Tab }
