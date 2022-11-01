import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { DarkmodeContext } from '../../contexts/DarkmodeProvider'
import { AudioContext } from '../../contexts/AudioProvider'

const AudioBlock = styled.div`
  display: flex;
  flex: none;

  height: 100px;

  position: fixed;
  bottom: 57px;
  left: 30px;
  z-index: 3;
`

const AudioObject = styled.audio`
  visibility = hidden;
`

const AudioCharactorContainer = styled.div`
  position: relative;
  width: 86px;
  height: 100px;

  margin-left: 5px;

  transition: width 0.5s ease;
`

const AudioCharactorBackground = styled.div`
  position: absolute;
  left: 0;
  botton: 0;

  width: 86px;
  height: 60px;
  left: 0px;
  bottom: 0px;

  background: linear-gradient(180deg, #fda4ff 0%, #ffffff 100%);
  border-radius: 5px;

  transition: opacity 0.3s ease;
`

const AudioCharactorImageContainer = styled.img`
  position: absolute;
  right: 0;
  botton: 0;
  height: 100px;

  transition: opacity 0.3s ease;
`

const AudioPlayer = styled.div`
  position: absolute;
  left: 96px;
  bottom: 0px;

  width: 330px;
  height: 60px;

  background: #ffffff;
  border-radius: 5px;

  flex: none;

  transition: 0.5s ease;
`

const AudioTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;

  width: 154px;
  height: 20px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  text-transform: uppercase;

  color: #000000;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  transition: 0.5s ease;
`

const AudioSinger = styled.div`
  position: absolute;
  left: 20px;
  bottom: 10px;

  width: 150px;
  height: 20px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  text-transform: uppercase;

  color: #000000;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  transition: 0.5s ease;
`

const AudioContorllerPrev = styled.div`
  position: absolute;
  right: 115px;
  top: 23px;

  cursor: pointer;

  transition: 0.5s ease;

  path {
    transition: 0.5s ease;
  }

  rect {
    transition: 0.5s ease;
  }
`

const AudioControllerPlayPause = styled.div`
  position: absolute;
  top: 20px;
  right: 83px;

  cursor: pointer;

  transition: 0.5s ease;

  path {
    transition: 0.5s ease;
  }

  reck {
    transition: 0.5s ease;
  }
`

const AudioControllerNext = styled.div`
  position: absolute;
  top: 23px;
  right: 57px;

  cursor: pointer;

  transition: 0.5s ease;

  path {
    transition: 0.5s ease;
  }

  rect {
    transition: 0.5s ease;
  }
`

const AudioFoldingButton = styled.div`
  position: absolute;
  top: 21px;
  right: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 10px;

  width: 16px;
  height: 16px;

  background: rgba(0, 0, 0, 0.08);
  border-radius: 3px;

  flex: none;
  order: 1;
  flex-grow: 0;

  cursor: pointer;

  transition: 0.5s ease;
`

type ImgType = {
  file: {
    publicURL: string
  }
}

const Audio: FunctionComponent = function () {
  const audioImg: ImgType = useStaticQuery(graphql`
    query {
      file(name: { eq: "audio" }) {
        publicURL
      }
    }
  `)
  const { isDarkmode } = useContext(DarkmodeContext)

  const [hover, setHover] = useState<string>('') //hover 상태 저장
  const [isFolded, setIsFolded] = useState<boolean>(false) // fold 컨트롤러
  const { src, audioRef, isPlaying, playAudio, pauseAudio } =
    useContext(AudioContext)
  //const audioRefinLocal = useRef<HTMLAudioElement>(null)

  const foldingHandler = () => {
    if (!isFolded) setIsFolded(true)
    else setIsFolded(false)
  }

  return (
    <AudioBlock>
      <AudioObject ref={audioRef} controls style={{ display: 'none' }}>
        <source src={src} />
      </AudioObject>

      <AudioCharactorContainer style={{ width: isFolded ? 0 : '' }}>
        <AudioCharactorBackground style={{ opacity: isFolded ? 0 : 1 }} />
        <AudioCharactorImageContainer
          src={audioImg.file.publicURL}
          style={{ opacity: isFolded ? 0 : 1 }}
        />
      </AudioCharactorContainer>
      <AudioPlayer
        style={{
          width: isFolded ? '131px' : '330px',
          left: isFolded ? 0 : '96px',
          background: isDarkmode
            ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), #ffffff'
            : isFolded
            ? 'rgba(255, 255, 255, 0.08)'
            : 'white',
        }}
      >
        <AudioTitle style={{ opacity: isFolded ? 0 : 1 }}>
          BE A PART OF US
        </AudioTitle>
        <AudioSinger style={{ opacity: isFolded ? 0 : 1 }}>
          METAGONZ ARA feat.Pure 100%
        </AudioSinger>
        <AudioContorllerPrev
          style={{ right: isFolded ? 101 : '' }}
          onMouseEnter={() => setHover('prev')}
          onMouseLeave={() => setHover('')}
        >
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path
              d="M1.96289 7L12.1897 0.937822L12.1897 13.0622L1.96289 7Z"
              fill={
                hover == 'prev'
                  ? '#6200ee'
                  : isFolded
                  ? isDarkmode
                    ? 'black'
                    : 'white'
                  : 'black'
              }
            />
            <rect
              x="0.599609"
              y="0.699707"
              width="1.36358"
              height="12.6"
              fill={
                hover == 'prev'
                  ? '#6200ee'
                  : isFolded
                  ? isDarkmode
                    ? 'black'
                    : 'white'
                  : 'black'
              }
            />
          </svg>
        </AudioContorllerPrev>
        <AudioControllerPlayPause
          onClick={() => {
            if (isPlaying) pauseAudio()
            else playAudio()
          }}
          style={{ right: isFolded ? 71 : '' }}
          onMouseEnter={() => setHover('playNPause')}
          onMouseLeave={() => setHover('')}
        >
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
            <path
              d="M15.5996 9L0.599608 17.6603L0.599609 0.339744L15.5996 9Z"
              fill={
                hover == 'playNPause'
                  ? '#6200ee'
                  : isFolded
                  ? isDarkmode
                    ? 'black'
                    : 'white'
                  : 'black'
              }
            />
          </svg>
        </AudioControllerPlayPause>
        <AudioControllerNext
          style={{ right: isFolded ? 47 : '' }}
          onMouseEnter={() => setHover('next')}
          onMouseLeave={() => setHover('')}
        >
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
            <path
              d="M14.5996 7L4.09961 13.0622L4.09961 0.937822L14.5996 7Z"
              fill={
                hover == 'next'
                  ? '#6200ee'
                  : isFolded
                  ? isDarkmode
                    ? 'black'
                    : 'white'
                  : 'black'
              }
            />
            <rect
              x="14.5996"
              y="0.700439"
              width="1.4"
              height="12.6"
              fill={
                hover == 'next'
                  ? '#6200ee'
                  : isFolded
                  ? isDarkmode
                    ? 'black'
                    : 'white'
                  : 'black'
              }
            />
          </svg>
        </AudioControllerNext>
        <AudioFoldingButton onClick={() => foldingHandler()}>
          <svg width="5" height="10" viewBox="0 0 5 10" fill="none">
            <path
              opacity="0.3"
              d={
                isFolded
                  ? 'M0.900391 1.25L4.65039 5L0.900391 8.75'
                  : 'M4.5 8.75L0.75 5L4.5 1.25'
              }
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </AudioFoldingButton>
      </AudioPlayer>
      {/* <audio controls ref={audioRef}>
        <source src={src} />
      </audio> */}
    </AudioBlock>
  )
}

export default Audio
