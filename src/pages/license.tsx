import React, { FunctionComponent, useContext, useEffect } from 'react'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

import { DarkmodeContext } from '../contexts/DarkmodeProvider'
import Header from 'components/common/Header'

const LicensePage: FunctionComponent = function () {
  const { setMode } = useContext(DarkmodeContext)
  useEffect(() => {
    setMode(true)
  }, [])
  return (
    <>
      <Global styles={reset} />
    </>
  )
}

export default LicensePage
