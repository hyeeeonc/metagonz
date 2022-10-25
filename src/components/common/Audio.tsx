import React, { FunctionComponent, useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import { AudioContext } from '../../contexts/AudioProvider'

const AudioBlock = styled.div`
  height: 100px;
  position: fixed;
  bottom: 100px;
  left: 100px;
`

const Audio: FunctionComponent = function () {
  const { src } = useContext(AudioContext)

  return (
    <AudioBlock>
      <audio controls>
        <source src={src} />
      </audio>
    </AudioBlock>
  )
}

export default Audio
