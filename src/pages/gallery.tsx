import React, { FunctionComponent } from 'react'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

import Header from 'components/common/Header'

import Audio from 'components/common/Audio'

import Layout from 'components/layout'

const GalleryPage: FunctionComponent = function () {
  return (
    <Layout>
      <Global styles={reset} />
      <Header headerDarkMode={true} />
      <Audio />
    </Layout>
  )
}

export default GalleryPage
