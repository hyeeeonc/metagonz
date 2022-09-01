import React, {
  FunctionComponent,
  useState,
  useCallback,
  useEffect,
} from 'react'

import reset from '../../lib/styles/reset'
import indexStyle from '../../lib/styles/indexStyle'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

import Header from 'components/common/Header'

import Audio from 'components/common/Audio'

import Layout from 'components/layout'

const IndexBlock = styled.div`
  width: 100vw;
  height: 100vh;
`

const IndexBackgroundImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IndexBackgroundImage = styled.img``

const IndexPage: FunctionComponent = function () {
  const [windowSize, setWindowSize] = useState<{
    width: number
    height: number
  }>({
    width: 0,
    height: 0,
  })
  const [imageSize, setimageSize] = useState<boolean>(false)

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const IndexBackgroundImageSizeRation = windowSize.width / windowSize.height
    if (IndexBackgroundImageSizeRation > 1.5) {
      setimageSize(true)
    } else {
      setimageSize(false)
    }
  }, [windowSize])

  return (
    <Layout>
      <Global styles={reset} />
      <Global styles={indexStyle} />
      <Header headerDarkMode={false} />

      <IndexBlock>
        <IndexBackgroundImageContainer
          style={{ alignItems: imageSize === false ? `none` : `center` }}
        >
          <IndexBackgroundImage
            src="static/images/home.jpg"
            style={
              imageSize === false
                ? {
                    height: '100vh',
                    width: 'auto',
                  }
                : { width: '100vw', height: 'auto' }
            }
          />
        </IndexBackgroundImageContainer>
      </IndexBlock>
    </Layout>
  )
}

export default IndexPage
