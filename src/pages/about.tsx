import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react'
import { AudioContext } from '../contexts/AudioProvider'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'

import { AboutTabContext } from '../contexts/AboutTabProvider'
import { DarkmodeContext } from '../contexts/DarkmodeProvider'

import Story from 'components/about/Story'
import Characters from 'components/about/characters'
import Concept from 'components/about/Concept'
import Utility from 'components/about/Utility'
import { graphql, useStaticQuery } from 'gatsby'
import { globalHistory } from '@reach/router'
import { useMediaQuery } from 'react-responsive'
import {
  PageBlock,
  PageNameIndicator,
  PageNavContainer,
  PageNavItems,
} from 'components/pageLayout/pageLayout'

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
      <PageBlock>
        <Story isMobile={isMobile} edges={edges} />
        <Concept isMobile={isMobile} edges={edges} />
        <Characters isMobile={isMobile} edges={edges} />
        <Utility isMobile={isMobile} edges={edges} />
        <PageNavContainer>
          <PageNavItems
            onClick={() => setTabNum(1)}
            onMouseEnter={() => setHover('story')}
            onMouseLeave={() => setHover('')}
            style={{ opacity: tabNum == 1 || hover == 'story' ? 1 : 0.1 }}
          >
            story
          </PageNavItems>
          <PageNavItems
            onClick={() => setTabNum(2)}
            onMouseEnter={() => setHover('characters')}
            onMouseLeave={() => setHover('')}
            style={{ opacity: tabNum == 2 || hover == 'characters' ? 1 : 0.1 }}
          >
            characters
          </PageNavItems>
          <PageNavItems
            onClick={() => setTabNum(3)}
            onMouseEnter={() => setHover('concept')}
            onMouseLeave={() => setHover('')}
            style={{ opacity: tabNum == 3 || hover == 'concept' ? 1 : 0.1 }}
          >
            concept
          </PageNavItems>
          <PageNavItems
            onClick={() => setTabNum(4)}
            onMouseEnter={() => setHover('utility')}
            onMouseLeave={() => setHover('')}
            style={{ opacity: tabNum == 4 || hover == 'utility' ? 1 : 0.1 }}
          >
            utility
          </PageNavItems>
        </PageNavContainer>
        <PageNameIndicator>about</PageNameIndicator>
      </PageBlock>
    </>
  )
}

export default AboutPage
