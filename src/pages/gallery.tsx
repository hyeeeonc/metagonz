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

import { graphql, useStaticQuery } from 'gatsby'
import { globalHistory } from '@reach/router'
import { useMediaQuery } from 'react-responsive'
import {
  PageBlock,
  PageNameIndicator,
  PageNavContainer,
  PageNavItems,
} from 'components/pageLayout/pageLayout'
import styled from '@emotion/styled'

const GalleryBlock = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`

const GalleryNftContainer = styled.div`
  margin-top: 150px;
  margin-bottom: 100px;

  display: flex:
  flex-wrap: wrap;
  width: 1500px
`

const GalleryNftItems = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const GalleryNftImageContainer = styled.div`
  width: 320px;
  height: 420px;

  margin: 0px 10px;

  video, img {
    width: 100%
    height: auto;
  }
`

const GalleryNftItemAuthor = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;

  color: #000000;
`

const GalleryNftItemNumber = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  text-align: center;
  text-transform: uppercase;

  color: #000000;
`

const GalleryNftItemComponent = () => {
  return (
    <GalleryNftItems>
      <GalleryNftImageContainer>
        <video></video>
        <GalleryNftItemAuthor>META GONZ</GalleryNftItemAuthor>
        <GalleryNftItemNumber>NO. 0001</GalleryNftItemNumber>
      </GalleryNftImageContainer>
    </GalleryNftItems>
  )
}

const GalleryPage = () => {
  const { setDefaultAudio } = useContext(AudioContext)
  const { setMode, menuOpened } = useContext(DarkmodeContext)
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

  return (
    <GalleryBlock>
      <GalleryNftContainer></GalleryNftContainer>
    </GalleryBlock>
  )
}

export default GalleryPage
