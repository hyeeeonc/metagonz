import React, { FunctionComponent, useContext, useEffect } from 'react'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'
import { DarkmodeContext } from '../contexts/DarkmodeProvider'
const RoadmapPage: FunctionComponent = function () {
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

export default RoadmapPage
