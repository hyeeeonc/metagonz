import React, { FunctionComponent } from 'react'

import styled from '@emotion/styled'

const AudioBlock = styled.div`
  height: 100px;
  position: fixed;
  bottom: 100px;
  left: 100px;
`

const Audio: FunctionComponent = function () {
  return (
    <AudioBlock>
      <audio controls>
        <source src="static/audios/emaj01.mp3" />
      </audio>
    </AudioBlock>
  )
}

export default React.memo(Audio)
