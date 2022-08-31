import React, { FunctionComponent } from 'react'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

import Header from 'components/common/Header'

const LicensePage: FunctionComponent = function () {
  return (
    <>
      <Global styles={reset} />
      <Header headerDarkMode={true} />
    </>
  )
}

export default LicensePage
