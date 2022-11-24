import React, { useContext, useEffect, useState } from 'react'
import { AudioContext } from '../contexts/AudioProvider'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'

import { AboutTabContext } from '../contexts/AboutTabProvider'
import { DarkmodeContext } from '../contexts/DarkmodeProvider'

import { graphql, useStaticQuery } from 'gatsby'
import { globalHistory } from '@reach/router'
import { useMediaQuery } from 'react-responsive'
import styled from '@emotion/styled'

import {
  PageBlock,
  PageNameIndicator,
  PageNavContainer,
  PageNavItems,
} from 'components/pageLayout/pageLayout'
import GlobalPartners from 'components/community/GlobalPartners'

const CommunityPage = () => {
  const { setMode, menuOpened } = useContext(DarkmodeContext)
  const { tabNum, setTabNum } = useContext(AboutTabContext)
  const [hover, setHover] = useState<string>('') //hover 상태 저장

  useEffect(() => {
    if (!menuOpened) {
      setMode(false)
    }
  }, [menuOpened])
  return (
    <>
      <Global styles={reset} />
      <PageBlock>
        <GlobalPartners />
        <PageNavContainer>
          <PageNavItems
            onMouseEnter={() => setHover('community')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'white',
              opacity: tabNum == 1 || hover == 'community' ? 1 : 0.1,
            }}
          >
            community
          </PageNavItems>
          <PageNavItems
            onMouseEnter={() => setHover('global')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'white',
              opacity: tabNum == 2 || hover == 'global' ? 1 : 0.1,
            }}
          >
            global partners
          </PageNavItems>
        </PageNavContainer>
        <PageNameIndicator style={{ color: 'white' }}>
          community
        </PageNameIndicator>
      </PageBlock>
    </>
  )
}

export default CommunityPage
