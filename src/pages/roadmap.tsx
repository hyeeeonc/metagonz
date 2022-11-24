import React, { useContext, useEffect, useState, useCallback } from 'react'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'

import { DarkmodeContext } from '../contexts/DarkmodeProvider'

import { graphql, useStaticQuery } from 'gatsby'
import { globalHistory } from '@reach/router'
import { useMediaQuery } from 'react-responsive'
import styled from '@emotion/styled'

import {
  PageBlock,
  PageNameIndicator,
  PageNavContainer,
  PageNavItems,
} from 'components/pageLayout/pageLayout'

const RoadmapBlock = styled.div`
  width: 100vw;
  height: 100vh;
`

const RoadmapBackgroundImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RoadmapSectionContainer = styled.div`
  position: absolute;
  top: 230px;
  left: 30px;

  width: 141px;
  height: 215px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const RoadmapSectionItems = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 35px;
  text-transform: uppercase;

  color: #ffffff;
  cursor: pointer;
`

const RoadmapItemContainer = styled.div`
  position: absolute;
  top: 230px;
  left: 400px;

  gap: 30px;
`
const RoadmapItemYear = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;

  color: #ffffff;

  margin-bottom: 50px;
`

const RoadmapItems = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 30px;
`

const RoadmapItemProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 130px;
  height: 35px;
  border-radius: 5px;

  margin-right: 25px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 35px;
  text-transform: uppercase;

  color: #ffffff;
`

const RoadRoadmapItemText = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;

  color: #ffffff;
`

const RoadmapItem = ({
  progress,
  text,
}: {
  progress: number
  text: string
}) => {
  return (
    <RoadmapItems>
      {progress == 1 ? (
        <RoadmapItemProgress
          style={{
            background: '#6200EE',
          }}
        >
          complete
        </RoadmapItemProgress>
      ) : progress == 2 ? (
        <RoadmapItemProgress
          style={{
            background: '#00E0D3',
          }}
        >
          in progress
        </RoadmapItemProgress>
      ) : progress == 3 ? (
        <RoadmapItemProgress
          style={{
            background: '#F7D210',
          }}
        >
          preparing
        </RoadmapItemProgress>
      ) : (
        <RoadmapItemProgress
          style={{
            background: '#FF5BF8',
          }}
        >
          redacted
        </RoadmapItemProgress>
      )}
      <RoadRoadmapItemText>{text}</RoadRoadmapItemText>
    </RoadmapItems>
  )
}

type ImgType = {
  background: {
    publicURL: string
  }
}

const RoadmapPage = () => {
  const background: ImgType = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/roadmapback.jpg" }) {
        publicURL
      }
    }
  `)
  const { setMode, menuOpened } = useContext(DarkmodeContext)

  useEffect(() => {
    if (!menuOpened) {
      setMode(false)
    }
  }, [menuOpened])

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
    const IndexBackgroundImageSizeRatio = windowSize.width / windowSize.height
    if (IndexBackgroundImageSizeRatio > 1728 / 980) {
      setimageSize(true)
    } else {
      setimageSize(false)
    }
  }, [windowSize])

  return (
    <>
      <Global styles={reset} />
      <RoadmapBlock>
        <RoadmapBackgroundImageContainer>
          <img
            style={
              imageSize === false
                ? {
                    height: '100vh',
                    width: 'auto',
                  }
                : { width: '100vw', height: 'auto' }
            }
            src={background.background.publicURL}
          />
        </RoadmapBackgroundImageContainer>
        <RoadmapSectionContainer>
          <RoadmapSectionItems>all</RoadmapSectionItems>
          <RoadmapSectionItems>complete</RoadmapSectionItems>
          <RoadmapSectionItems>in progress</RoadmapSectionItems>
          <RoadmapSectionItems>preparing</RoadmapSectionItems>
          <RoadmapSectionItems>redacted</RoadmapSectionItems>
        </RoadmapSectionContainer>
        <RoadmapItemContainer>
          <RoadmapItemYear>2022</RoadmapItemYear>
          <RoadmapItem progress={1} text="Music" />
          <RoadmapItem progress={2} text="Music" />
          <RoadmapItem progress={3} text="Music" />
          <RoadmapItem progress={4} text="Music" />
          <RoadmapItem progress={1} text="Music" />
          <RoadmapItem progress={1} text="Music" />
          <RoadmapItem progress={1} text="Music" />
          <RoadmapItem progress={1} text="Music" />
          <RoadmapItem progress={1} text="Music" />
        </RoadmapItemContainer>
        <PageNameIndicator>roadmap</PageNameIndicator>
      </RoadmapBlock>
    </>
  )
}

export default RoadmapPage
