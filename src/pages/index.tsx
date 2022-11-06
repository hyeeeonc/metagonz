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
import { graphql, useStaticQuery } from 'gatsby'

import { DarkmodeContext } from '../contexts/DarkmodeProvider'
import { useMediaQuery } from 'react-responsive'

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

const MobileIndexBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;
`

const MobileIndexImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;
`

const MobileIndexChar = styled.img`
  position: absolute;
  top: 20px;
  left: calc((100vw - 700px) / 2);
  width: 700px;
  transition: opacity 0.5s ease-out;
`

const IndexBackgroundImage = styled.video``

type Node = {
  node: {
    publicURL: string
  }
}

type ImgType = {
  video: {
    publicURL: string
  }
  background: {
    publicURL: string
  }

  allFile: {
    edges: Node[]
  }
}

const IndexPage: FunctionComponent = function () {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })

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
    if (IndexBackgroundImageSizeRatio > 16 / 9) {
      setimageSize(true)
    } else {
      setimageSize(false)
    }
  }, [windowSize])

  const assets: ImgType = useStaticQuery(graphql`
    query {
      video: file(relativePath: { eq: "videos/home.mp4" }) {
        publicURL
      }
      background: file(relativePath: { eq: "images/tempback.jpg" }) {
        publicURL
      }
      allFile(
        filter: { relativeDirectory: { eq: "images/characters" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  //for mobile
  const [selectedImg, setSelectedImg] = useState<number>(0)
  const [imgOpacity, setImgOpacity] = useState<number>(1)
  useEffect(() => {
    const imgCount = assets.allFile.edges.length
    const changeChar: NodeJS.Timer = setInterval(() => {
      setTimeout(() => {
        setSelectedImg(before => {
          // eslint-disable-next-line
          while (true) {
            const idx = Math.floor(imgCount * Math.random())
            if (before === idx) continue
            return idx
          }
        })
      }, 700)
    }, 5000)

    const toggleOpacity: NodeJS.Timer = setInterval(() => {
      setImgOpacity(0)
      setTimeout(() => {
        setImgOpacity(1)
      }, 700)
    }, 5000)

    return () => {
      clearInterval(changeChar)
      clearInterval(toggleOpacity)
    }
  }, [])

  return (
    <>
      <Global styles={reset} />
      <Global styles={indexStyle} />
      {isPc && (
        <IndexBlock>
          <IndexBackgroundImageContainer
            style={{ alignItems: imageSize === false ? `none` : `center` }}
          >
            <IndexBackgroundImage
              autoPlay
              muted
              loop
              playsInline
              style={
                imageSize === false
                  ? {
                      height: '100vh',
                      width: 'auto',
                    }
                  : { width: '100vw', height: 'auto' }
              }
            >
              <source src={assets.video.publicURL} type="video/mp4" />
            </IndexBackgroundImage>
          </IndexBackgroundImageContainer>
        </IndexBlock>
      )}
      {isMobile && (
        <>
          <MobileIndexBlock>
            <Global styles={reset} />
            <MobileIndexImage src={assets.background.publicURL} />
            <MobileIndexChar
              style={{
                opacity: imgOpacity,
                top: selectedImg == 2 ? -50 : 20,
                transform:
                  selectedImg == 1
                    ? `translate(50px, 0)`
                    : selectedImg == 2
                    ? `translate(-38px, 0)`
                    : selectedImg == 4
                    ? `translate(58px, 0)`
                    : selectedImg == 3
                    ? `translate(-28px, 0)`
                    : '',
              }}
              src={assets.allFile.edges[selectedImg].node.publicURL}
            />
          </MobileIndexBlock>
        </>
      )}
    </>
  )
}

export default IndexPage
