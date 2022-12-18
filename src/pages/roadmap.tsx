import React, { useContext, useEffect, useState, useCallback } from 'react'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'

import { DarkmodeContext } from '../contexts/DarkmodeProvider'

import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

import { PageNameIndicator } from 'components/pageLayout/pageLayout'
import { PublicDataContext } from '../contexts/PublicDataProvider'
import { JsonDataContext } from '../contexts/JsonDataProvider'

const RoadmapBlock = styled.div`
  width: 100vw;
  height: 100vh;
`

const RoadmapCharacters = styled.img`
  position: absolute;

  height: 1500px;

  opacity: 0.9;
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

  color: black;
  cursor: pointer;

  transition: opacity 0.2s ease;
`

const RoadmapItemContainer = styled.div`
  position: absolute;
  top: 210px;
  left: 400px;

  width: calc(100vw - 400px - 100px);
  padding: 20px;
  gap: 30px;

  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.6);

  @media (max-width: 1200px) {
    left: 200px;
    width: calc(100vw - 200px - 100px);
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

  color: black;
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
    console.log(roadmap)
  }, [])

  useEffect(() => {
    if (!menuOpened) {
      setMode(true)
    }
  }, [menuOpened])

  useEffect(() => {
    if (currentIndex === -1) {
      setCurrentItems(roadmap)
    } else {
      setCurrentItems(roadmap.filter(item => item.progress === currentIndex))
    }
  }, [currentIndex, roadmap])

  const clickHandler = (progress: number) => () => setCurrentIndex(progress)

  return (
    <>
      <Global styles={reset} />
      <RoadmapBlock>
        <RoadmapCharacters
          style={{
            top: '-50px',
            right: '120px',
          }}
          src={characters.yua.publicURL}
        />
        <RoadmapCharacters
          style={{
            top: '-50px',
            right: '-100px',
          }}
          src={characters.jua.publicURL}
        />
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
          <RoadmapItemYear>2022</RoadmapItemYear>
          {currentItems.map(({ progress, text }) => (
            <RoadmapItem progress={progress} text={text} />
          ))}
        </RoadmapItemContainer>
        <PageNameIndicator>roadmap</PageNameIndicator>
      </RoadmapBlock>
    </>
  )
}

export default RoadmapPage
