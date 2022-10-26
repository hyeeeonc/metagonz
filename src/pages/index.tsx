import React, {
  FunctionComponent,
  useState,
  useCallback,
  useEffect,
  useContext,
} from 'react'

import reset from '../../lib/styles/reset'
import indexStyle from '../../lib/styles/indexStyle'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

import Header from 'components/common/Header'
import { DarkmodeContext } from '../contexts/DarkmodeProvider'
import { graphql, useStaticQuery } from 'gatsby'

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

type ImgType = {
  file: {
    publicURL: string
  }
}

const IndexPage: FunctionComponent = function () {
  const [windowSize, setWindowSize] = useState<{
    width: number
    height: number
  }>({
    width: 0,
    height: 0,
  })
  const [imageSize, setimageSize] = useState<boolean>(false)

  const { setMode } = useContext(DarkmodeContext)
  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    setMode(false)
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
    const IndexBackgroundImageSizeRatio = windowSize.width / windowSize.height
    if (IndexBackgroundImageSizeRatio > 3456 / 2234) {
      setimageSize(true)
    } else {
      setimageSize(false)
    }
  }, [windowSize])

  const homeImg: ImgType = useStaticQuery(graphql`
    query {
      file(name: { eq: "home" }) {
        publicURL
      }
    }
  `)

  return (
    <>
      <Global styles={reset} />
      <Global styles={indexStyle} />

      <IndexBlock>
        <IndexBackgroundImageContainer
          style={{ alignItems: imageSize === false ? `none` : `center` }}
        >
          <IndexBackgroundImage
            src={homeImg.file.publicURL}
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
    </>
  )
}

export default IndexPage
