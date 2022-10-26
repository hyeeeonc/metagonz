import React, { FunctionComponent, useContext, useEffect } from 'react'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

import Layout from 'components/layout'
import { DarkmodeContext } from '../contexts/DarkmodeProvider'

const GalleryPage: FunctionComponent = function () {
  const { setMode } = useContext(DarkmodeContext)

  useEffect(() => {
    setMode(true)
  }, [])

  return (
    <Layout>
      <Global styles={reset} />
    </Layout>
  )
}

export default GalleryPage
