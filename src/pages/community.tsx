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

type TwitterData = {
  data: {
    id: number
    username: string
    created_at: Date
    name: string
    public_metrics: {
      followers_count: number
      following_count: number
      tweet_count: number
      listed_count: number
    }
  }
}

const CommunityPage = () => {
  const { setMode, menuOpened } = useContext(DarkmodeContext)
  const { tabNum, setTabNum } = useContext(AboutTabContext)
  const [hover, setHover] = useState<string>('') //hover 상태 저장

  useEffect(() => {
    ;(async function () {
      const res = await fetch(
        `https://api.twitter.com/2/users/by/username/WkfxjfrP?user.fields=public_metrics`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer CvSYS1IDuvDCUID4vnnzjFlTO',
            'Access-Control-Allow-Origin': '*',
          },
          credentials: 'include',
          mode: 'no-cors',
        },
      )
      console.log(res)
    })()
  }, [])

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
