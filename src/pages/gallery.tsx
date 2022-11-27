import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { AudioContext } from '../contexts/AudioProvider'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'

import { DarkmodeContext } from '../contexts/DarkmodeProvider'

import { graphql, useStaticQuery } from 'gatsby'
import { globalHistory } from '@reach/router'
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

  height: calc(100vh - 150px);

  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-wrap: wrap;
  width: 1500px;
`

const GalleryNftItems = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: 0px 10px;
`

const GalleryNftImageContainer = styled.div`
  width: 320px;
  height: 480px;

  background: none;
  video,
  img {
    width: 100%;
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

const GalleryNftItemComponent = ({ src }: { src: string }) => {
  return (
    <GalleryNftItems>
      <GalleryNftImageContainer>
        <video muted width="100%" autoPlay loop playsInline>
          <source src={src} type="video/mp4"></source>
        </video>
      </GalleryNftImageContainer>
      <GalleryNftItemAuthor>META GONZ</GalleryNftItemAuthor>
      <GalleryNftItemNumber>NO. 0001</GalleryNftItemNumber>
    </GalleryNftItems>
  )
}

const GalleryPage = () => {
  const { setDefaultAudio } = useContext(AudioContext)
  const { setMode, menuOpened } = useContext(DarkmodeContext)

  const [items, _] = useState<Array<any>>(Array(8888).fill(0))
  const [itemRange, setItemRange] = useState<number>(20)

  const {
    reveal: { publicURL },
  }: { reveal: { publicURL: string } } = useStaticQuery(graphql`
    query {
      reveal: file(relativePath: { eq: "videos/reveal.mp4" }) {
        publicURL
      }
    }
  `)

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

  useEffect(() => {})

  const scrollHandler = useCallback((e: React.WheelEvent) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
      e.currentTarget.clientHeight + 200
    ) {
      setItemRange(range => range + 12)
    }
  }, [])

  return (
    <>
      <Global styles={reset} />
      <GalleryBlock>
        <GalleryNftContainer onWheel={scrollHandler}>
          {items.slice(0, itemRange).map(_ => (
            <GalleryNftItemComponent src={publicURL} />
          ))}
        </GalleryNftContainer>
      </GalleryBlock>
    </>
  )
}

export default GalleryPage
