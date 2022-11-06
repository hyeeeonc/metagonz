import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react'
import { AudioContext } from '../contexts/AudioProvider'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

import { AboutTabContext } from '../contexts/AboutTabProvider'
import { DarkmodeContext } from '../contexts/DarkmodeProvider'

import Story from 'components/about/Story'
import Characters from 'components/about/characters'
import Concept from 'components/about/Concept'
import Utility from 'components/about/Utility'
import { graphql, useStaticQuery } from 'gatsby'
import { globalHistory } from '@reach/router'
import { useMediaQuery } from 'react-responsive'

const AboutBlock = styled.div`
  position: relative;
  max-width: 1728px;
  height: 100vh;

  @media (min-width: 1728px) {
    margin: 0 calc((100vw - 1728px) / 2);
  }
`

const AboutPageIndicator = styled.div`
  position: absolute;
  width: 56px;
  height: 32px;
  left: 30px;
  top: 76px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 32px;
  text-transform: uppercase;

  color: #000000;

  @media (max-height: 779px) {
    top: 56px;
  }
  @media (max-width: 767px) {
    left: 20px;
    top: 110px;
  }
`

const AboutNavContainer = styled.nav`
  position: absolute;
  left: 30px;
  top: 230px;

  display: flex;

  cursor: pointer;
  z-index: 2;

  transition: top 0.3s;

  @media (max-height: 779px) {
    top: 100px;
  }

  @media (max-width: 767px) {
    top: 192px;
    left: 20px;
  }
`

const AboutNavItems = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 31px;
  text-transform: uppercase;

  color: #000000;

  opacity: 0.1;

  margin-right: 30px;

  transition: 0.5s;

  @media (min-width: 767px) {
    :hover {
      color: #6200ee;
    }
  }
  flex: none;

  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 25px;

    margin-right: 20px;
  }

  @media (max-width: 499px) {
    font-size: 13px;
    line-height: 16px;

    margin-right: 15px;
  }
`
export type CharacterType = {
  node: {
    name: string
    main_job: string
    second_job: string
    music_style: string
    nationality: string
    age: number
    hight: number
    weight: number
    mbti: string
    likes: string
    pic: {
      publicURL: string
    }
    audio: {
      publicURL: string
    }
  }
}

export type CharacterListType = {
  allCharacterJson: {
    edges: CharacterType[]
  }
}

const AboutPage: FunctionComponent = function () {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })
  const { setDefaultAudio } = useContext(AudioContext)
  const { setMode, menuOpened } = useContext(DarkmodeContext)
  const { tabNum, setTabNum } = useContext(AboutTabContext)

  const [hover, setHover] = useState<string>('') //hover 상태 저장

  useEffect(() => {
    if (!menuOpened) {
      setMode(true)
    }
  }, [menuOpened])

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH' || action === 'POP') setDefaultAudio()
    })
  }, [setDefaultAudio])

  useEffect(() => {
    if (tabNum !== 2) {
      setDefaultAudio()
    }
  }, [tabNum])

  const {
    allCharacterJson: { edges },
  }: CharacterListType = useStaticQuery(graphql`
    query getCharacters {
      allCharacterJson {
        edges {
          node {
            name
            main_job
            second_job
            music_style
            nationality
            age
            hight
            weight
            mbti
            likes
            pic {
              publicURL
            }
            audio {
              publicURL
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Global styles={reset} />
      <AboutBlock>
        <Story isMobile={isMobile} edges={edges} />
        <Concept isMobile={isMobile} edges={edges} />
        <Characters isMobile={isMobile} edges={edges} />
        <Utility isMobile={isMobile} edges={edges} />
        <AboutNavContainer>
          <AboutNavItems
            onClick={() => setTabNum(1)}
            onMouseEnter={() => setHover('story')}
            onMouseLeave={() => setHover('')}
            style={{ opacity: tabNum == 1 || hover == 'story' ? 1 : 0.1 }}
          >
            story
          </AboutNavItems>
          <AboutNavItems
            onClick={() => setTabNum(2)}
            onMouseEnter={() => setHover('characters')}
            onMouseLeave={() => setHover('')}
            style={{ opacity: tabNum == 2 || hover == 'characters' ? 1 : 0.1 }}
          >
            characters
          </AboutNavItems>
          <AboutNavItems
            onClick={() => setTabNum(3)}
            onMouseEnter={() => setHover('concept')}
            onMouseLeave={() => setHover('')}
            style={{ opacity: tabNum == 3 || hover == 'concept' ? 1 : 0.1 }}
          >
            concept
          </AboutNavItems>
          <AboutNavItems
            onClick={() => setTabNum(4)}
            onMouseEnter={() => setHover('utility')}
            onMouseLeave={() => setHover('')}
            style={{ opacity: tabNum == 4 || hover == 'utility' ? 1 : 0.1 }}
          >
            utility
          </AboutNavItems>
        </AboutNavContainer>
        <AboutPageIndicator>about</AboutPageIndicator>
      </AboutBlock>
    </>
  )
}

export default AboutPage
