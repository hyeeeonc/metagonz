import React, { FunctionComponent } from 'react'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import Header from 'components/common/Header'

const Block = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`

const IndexPage: FunctionComponent = function () {
  return (
    <>
      <Global styles={reset} />
      <Block />
    </>
  )
}

export default IndexPage
