import React, { useContext, useEffect, useState } from 'react'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'

import { DarkmodeContext } from '../contexts/DarkmodeProvider'

import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

import {
  PageBlock,
  PageNameIndicator,
  PageNavContainer,
  PageNavItems,
} from 'components/pageLayout/pageLayout'
import GlobalPartners from 'components/community/GlobalPartners'
import CommunitySubPage from 'components/community/CommunitySubPage'

const CommunityPageNavContainer = styled(PageNavContainer)`
  transition: none;

  @media (max-height: 859px) {
    top: 100px;
  }

  @media (max-width: 767px) {
    top: 192px;
    left: 20px;
  }
`

const CommunityPageNameIndicator = styled(PageNameIndicator)`
  @media (max-height: 859px) {
    top: 56px;
  }

  @media (max-width: 767px) {
    left: 20px;
    top: 110px;
  }
`

const CommunityBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(180deg, #1c0044 0%, #6200ee 100%);
  backdrop-filter: blur(15px);

  overflow: hidden;
`

const CommunityBackgroundImage = styled.img`
  width: 100%;
  height: auto;

  @media (max-aspect-ratio: 3456/1960) {
    width: auto;
    height: 100%;
  }
`

const CommunityBackgroundFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 1728px;
  min-height: calc(100vh - calc(100vh - 100%));

  background: linear-gradient(
    110.41deg,
    rgba(0, 0, 0, 0.7) 9.55%,
    rgba(0, 0, 0, 0.5) 60%,
    rgba(0, 0, 0, 0) 70%
  );
`

type ImgType = {
  background: {
    publicURL: string
  }
}

const CommunityPage = () => {
  const backImg: ImgType = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/community.png" }) {
        publicURL
      }
    }
  `)
  const { setMode, menuOpened } = useContext(DarkmodeContext)
  const [tabNum, setTabNum] = useState<number>(1)
  const [hover, setHover] = useState<string>('') //hover 상태 저장

  useEffect(() => {
    if (!menuOpened) {
      setMode(false)
    }
  }, [menuOpened])
  return (
    <>
      <Global styles={reset} />
      <CommunityBackground>
        {tabNum == 1 ? (
          <>
            <CommunityBackgroundImage src={backImg.background.publicURL} />
            <CommunityBackgroundFilter />
          </>
        ) : (
          <></>
        )}
      </CommunityBackground>
      <PageBlock>
        <CommunitySubPage tabNum={tabNum} />
        <GlobalPartners tabNum={tabNum} />
        <CommunityPageNavContainer>
          <PageNavItems
            onMouseEnter={() => setHover('community')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'white',
              opacity: tabNum == 1 || hover == 'community' ? 1 : 0.5,
            }}
            onClick={() => {
              setTabNum(1)
            }}
          >
            community
          </PageNavItems>
          <PageNavItems
            onMouseEnter={() => setHover('global')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'white',
              opacity: tabNum == 2 || hover == 'global' ? 1 : 0.5,
            }}
            onClick={() => {
              setTabNum(2)
            }}
          >
            global partners
          </PageNavItems>
        </CommunityPageNavContainer>
        <CommunityPageNameIndicator style={{ color: 'white' }}>
          community
        </CommunityPageNameIndicator>
      </PageBlock>
    </>
  )
}

export default CommunityPage
