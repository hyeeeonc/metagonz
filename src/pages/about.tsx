import React, { FunctionComponent, useContext } from 'react'
import { AudioContext } from '../contexts/AudioProvider'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

import Header from 'components/common/Header'
import AboutTabProvider from '../contexts/AboutTabProvider'

const AboutBlock = styled.main`
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
`

const AboutNavItems = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 31px;
  text-transform: uppercase;

  color: #000000;

  margin-left: 30px;

  transition: 0.5s;

  :hover {
    color: #6200ee;
  }
  flex: none;
`

const AboutPage: FunctionComponent = function () {
  const TabProvider = AboutTabProvider(4)
  const { setAudio } = useContext(AudioContext)

  return (
    <TabProvider>
      <Global styles={reset} />
      <Header headerDarkMode={true} />

      <AboutBlock>
        <AboutNavContainer>
          <AboutNavItems>story</AboutNavItems>
          <AboutNavItems>characters</AboutNavItems>
          <AboutNavItems>concept</AboutNavItems>
          <AboutNavItems>utility</AboutNavItems>
          <button onClick={() => setAudio('audios/1. ARA (Future Bass).mp3')}>
            test button
          </button>
        </AboutNavContainer>
      </AboutBlock>
    </TabProvider>
  )
}

export default AboutPage
