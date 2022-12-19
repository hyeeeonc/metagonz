import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
  MoreContentContainer,
  MoreContentContent,
  MoreContentTitle,
  MoredBlock,
  MoreSpacer,
} from './moreSubPageLayout'

const WorldContentContent = styled(MoreContentContent)`
  max-width: 1157px;
`

const World = ({ tabNum }: { tabNum: number }) => {
  return (
    <MoredBlock
      style={{
        visibility: tabNum == 1 ? 'visible' : 'hidden',
        opacity: tabNum == 1 ? 1 : 0,
        zIndex: tabNum != 1 ? 0 : 1,
      }}
    >
      <MoreContentContainer>
        <MoreContentTitle
          style={{
            marginBottom: '40px',
          }}
        >
          MetaOctagon
        </MoreContentTitle>
        <MoreContentTitle
          style={{
            textTransform: 'uppercase',
            marginBottom: '25px',
          }}
        >
          anything can happen here, again
        </MoreContentTitle>
        <WorldContentContent>
          In the past, Club Octagon has broken everyone's doubts and concerns
          and created a world class cultural space more than just a dance club.
          <br />
          <br />
          Now we want to create the MetaOctagon Universe, an infinite complex
          cultural space, with all members of Metagonz, who form a consensus of
          the digital generation and lead the culture, presenting a paradigm
          shift of high energy digital entertainment culture beyond reality.
        </WorldContentContent>
        <MoreSpacer />
      </MoreContentContainer>
    </MoredBlock>
  )
}

export default World
