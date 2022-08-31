import React, { FunctionComponent } from 'react'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

import Header from 'components/common/Header'

const GalleryPage: FunctionComponent = function () {
  return (
    <>
      <Global styles={reset} />
      <Header />
    </>
  )
}

export default GalleryPage
