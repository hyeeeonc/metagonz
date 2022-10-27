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

const AboutBlock = styled.div`
  position: relative;
  max-width: 1728px;
  height: 100vh;

  @media (min-width: 1728px) {
    margin: 0 calc((100vw - 1728px) / 2);
  }
`

const AboutNavContainer = styled.nav`
  position: absolute;
  left: 30px;
  top: 230px;

  display: flex;

  cursor: pointer;
  z-index: 2;
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

  :hover {
    color: #6200ee;
  }
  flex: none;
`

const AboutPage: FunctionComponent = function () {
  const { setAudio } = useContext(AudioContext)
  const { setMode } = useContext(DarkmodeContext)
  const { tabNum, setTabNum } = useContext(AboutTabContext)

  const [hover, setHover] = useState<string>('') //hover 상태 저장

  useEffect(() => {
    setMode(true)
  }, [])

  return (
    <>
      <Global styles={reset} />
      <AboutBlock>
        <Characters />
        <Story />
        <Concept />
        <Utility />
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
      </AboutBlock>
    </>
  )
}

export default AboutPage
