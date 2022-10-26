import React, { FunctionComponent, useContext } from 'react'
import styled from '@emotion/styled'
import { AudioContext } from '../../contexts/AudioProvider'

const AudioBlock = styled.div`
  height: 100px;
  position: fixed;
  bottom: 100px;
  left: 100px;
`

const Audio: FunctionComponent = function () {
  const { src, audioRef } = useContext(AudioContext)
  return (
    <AudioBlock>
      <audio controls ref={audioRef}>
        <source src={src} />
      </audio>
    </AudioBlock>
  )
}

export default Audio
