import React, { useContext, useEffect, useState, useCallback } from 'react'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'

import { DarkmodeContext } from '../contexts/DarkmodeProvider'

import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

import { PageNameIndicator } from 'components/pageLayout/pageLayout'
import { JsonDataContext } from '../contexts/JsonDataProvider'

const RoadmapBlock = styled.div`
  width: 100vw;
  height: 100vh;
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

  @media (max-width: 767px) {
    top: 192px;
    left: 20px;

    width: calc(100vw - 40px);
    height: 16px;

    flex-direction: row;
  }
`

const RoadmapSectionItems = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 35px;
  text-transform: uppercase;

  color: black;
  cursor: pointer;

  transition: opacity 0.2s ease;

  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 16px;
  }

  @media (max-width: 500px) {
    font-size: 10px;
    line-height: 16px;
  }
`

const RoadmapItemContainer = styled.div`
  position: absolute;
  top: 230px;
  left: 400px;

  width: calc(100vw - 400px - 60px);
  min-height: calc(100vh - 250px);
  padding-right: 20px;

  overflow-y: scroll;
  overflow-x: hidden;

  gap: 30px;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: #000;

    border-radius: 100px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1200px) {
    left: 200px;
    width: calc(100vw - 200px - 60px);
  }

  @media (max-width: 767px) {
    top: 261px;
    left: 0px;
    width: calc(100vw - 40px);
    min-height: calc(100vh - 200px);
    padding: 0 30px 0 20px;
  }
`

const RoadmapItemWrapper = styled.div`
  position: absolute;
  width: calc(100vw - 400px - 60px);

  @media (max-width: 1200px) {
    width: calc(100vw - 200px - 60px);
  }

  @media (max-width: 767px) {
    width: calc(100vw - 40px);
  }
`

const RoadmapItemYear = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;

  color: black;

  margin-bottom: 50px;

  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 35px;

    margin-bottom: 20px;
  }
`

const RoadmapItems = styled.div`
  display: flex;

  margin-bottom: 30px;

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`

const RoadmapItemProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 130px;
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

  @media (max-width: 767px) {
    min-width: 80px;
    height: 23px;

    font-size: 8px;
    line-height: 20px;

    margin-right: 10px;

    color: black;
  }
`

const RoadRoadmapItemText = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;

  width: calc(100% - 155px);

  color: black;

  word-break: break-all;

  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 20px;

    width: auto;
  }
`

const RoadmapCharacterPCContainer = styled.div`
  opacity: 0.8;
  @media (max-width: 767px) {
    display: none;
  }
`

const RoadmapCharacterMobileContainer = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`

const RoadmapCharacters = styled.img`
  position: absolute;

  height: 1500px;
`

const RoadmapSpacer = styled.div`
  min-width: 100vw;
  min-height: 150px;

  @media (max-width: 767px) {
    display: none;
  }
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
  yua: {
    publicURL: string
  }
  jua: {
    publicURL: string
  }
}

type RoadmapType = {
  progress: number
  text: string
  year: number
}

const RoadmapPage = () => {
  const characters: ImgType = useStaticQuery(graphql`
    query {
      yua: file(relativePath: { eq: "images/characters/03 Yua.png" }) {
        publicURL
      }
      jua: file(relativePath: { eq: "images/characters/04 Jua.png" }) {
        publicURL
      }
    }
  `)

  const { setMode, menuOpened } = useContext(DarkmodeContext)
  const [currentIndex, setCurrentIndex] = useState<number>(-1)
  const [currentItems, setCurrentItems] = useState<Array<RoadmapType>>([])
  const [hover, setHover] = useState<string>('')

  const { roadmap } = useContext(JsonDataContext)

  useEffect(() => {
    if (!menuOpened) {
      setMode(true)
    }
  }, [menuOpened])

  useEffect(() => {
    if (currentIndex === -1) {
      setCurrentItems(roadmap)
      // console.log(currentItems.group(item => item.year))
    } else {
      setCurrentItems(roadmap.filter(item => item.progress === currentIndex))
    }
  }, [currentIndex, roadmap])

  const clickHandler = (progress: number) => () => setCurrentIndex(progress)

  return (
    <>
      <Global styles={reset} />
      <RoadmapBlock>
        <RoadmapCharacterPCContainer
          style={{
            opacity: 0.7,
          }}
        >
          <RoadmapCharacters
            style={{
              top: '-50px',
              right: '170px',
            }}
            src={characters.yua.publicURL}
          />
          <RoadmapCharacters
            style={{
              top: '-50px',
              right: '-50px',
            }}
            src={characters.jua.publicURL}
          />
        </RoadmapCharacterPCContainer>
        <RoadmapSectionContainer>
          <RoadmapSectionItems
            onMouseEnter={() => setHover('all')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'black',
              opacity: currentIndex == -1 || hover == 'all' ? 1 : 0.5,
            }}
            onClick={clickHandler(-1)}
          >
            all
          </RoadmapSectionItems>
          <RoadmapSectionItems
            onMouseEnter={() => setHover('complete')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'black',
              opacity: currentIndex == 1 || hover == 'complete' ? 1 : 0.5,
            }}
            onClick={clickHandler(1)}
          >
            complete
          </RoadmapSectionItems>
          <RoadmapSectionItems
            onMouseEnter={() => setHover('progress')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'black',
              opacity: currentIndex == 2 || hover == 'progress' ? 1 : 0.5,
            }}
            onClick={clickHandler(2)}
          >
            in progress
          </RoadmapSectionItems>
          <RoadmapSectionItems
            onMouseEnter={() => setHover('preparing')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'black',
              opacity: currentIndex == 3 || hover == 'preparing' ? 1 : 0.5,
            }}
            onClick={clickHandler(3)}
          >
            preparing
          </RoadmapSectionItems>
          <RoadmapSectionItems
            onMouseEnter={() => setHover('redacted')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'black',
              opacity: currentIndex == 4 || hover == 'redacted' ? 1 : 0.5,
            }}
            onClick={clickHandler(4)}
          >
            redacted
          </RoadmapSectionItems>
        </RoadmapSectionContainer>

        <RoadmapItemContainer>
          <RoadmapItemWrapper>
            <RoadmapItemYear>2022</RoadmapItemYear>
            {currentItems.map(({ progress, text }) => (
              <RoadmapItem progress={progress} text={text} />
            ))}
            <RoadmapSpacer />
            <RoadmapCharacterMobileContainer>
              <img
                src={characters.yua.publicURL}
                style={{
                  position: 'absolute',
                  bottom: '-1100px',
                  height: '1200px',
                  left: '-160px',
                }}
              />
              <img
                src={characters.jua.publicURL}
                style={{
                  position: 'absolute',
                  bottom: '-1090px',
                  height: '1200px',
                  right: '-100px',
                }}
              />
            </RoadmapCharacterMobileContainer>
          </RoadmapItemWrapper>
        </RoadmapItemContainer>
        <PageNameIndicator>roadmap</PageNameIndicator>
      </RoadmapBlock>
    </>
  )
}

export default RoadmapPage
