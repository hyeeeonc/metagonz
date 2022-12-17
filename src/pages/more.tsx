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
import World from 'components/more/World'
import EcoSystem from 'components/more/Ecosystem'
import MotgToken from 'components/more/MotgToken'
import CreatedByMany from 'components/more/CreatedByMany'
import WhitePaper from 'components/more/WhitePaper'
import Partners from 'components/more/Partners'

const MoreBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`

const MoreBackgroundImage = styled.img`
  width: 100%;
  height: auto;

  @media (max-aspect-ratio: 3456/1960) {
    width: auto;
    height: 100%;
  }
`

const MoreBackgroundFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: calc(100vh - calc(100vh - 100%));

  background: linear-gradient(
    148.09deg,
    rgba(0, 0, 0, 0.9) 46.79%,
    rgba(0, 0, 0, 0.5) 75.26%,
    rgba(0, 0, 0, 0) 95.34%
  );
`

type ImgType = {
  background: {
    publicURL: string
  }
}

const MorePage = () => {
  const backImg: ImgType = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/more.png" }) {
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
      <MoreBackground>
        <MoreBackgroundImage src={backImg.background.publicURL} />
        <MoreBackgroundFilter />
      </MoreBackground>
      <PageBlock>
        <World tabNum={tabNum} />
        <EcoSystem tabNum={tabNum} />
        <MotgToken tabNum={tabNum} />
        <CreatedByMany tabNum={tabNum} />
        <Partners tabNum={tabNum} />
        <WhitePaper tabNum={tabNum} />

        <PageNavContainer>
          <PageNavItems
            onMouseEnter={() => setHover('world')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'white',
              opacity: tabNum == 1 || hover == 'world' ? 1 : 0.5,
            }}
            onClick={() => {
              setTabNum(1)
            }}
          >
            world
          </PageNavItems>
          <PageNavItems
            onMouseEnter={() => setHover('eco')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'white',
              opacity: tabNum == 2 || hover == 'eco' ? 1 : 0.5,
            }}
            onClick={() => {
              setTabNum(2)
            }}
          >
            ecosystem
          </PageNavItems>
          <PageNavItems
            onMouseEnter={() => setHover('token')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'white',
              opacity: tabNum == 3 || hover == 'token' ? 1 : 0.5,
            }}
            onClick={() => {
              setTabNum(3)
            }}
          >
            motg&nbsp;token
          </PageNavItems>
          <PageNavItems
            onMouseEnter={() => setHover('created')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'white',
              opacity: tabNum == 4 || hover == 'created' ? 1 : 0.5,
            }}
            onClick={() => {
              setTabNum(4)
            }}
          >
            created&nbsp;by&nbsp;many
          </PageNavItems>
          <PageNavItems
            onMouseEnter={() => setHover('partners')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'white',
              opacity: tabNum == 5 || hover == 'partners' ? 1 : 0.5,
            }}
            onClick={() => {
              setTabNum(5)
            }}
          >
            partners
          </PageNavItems>
          <PageNavItems
            onMouseEnter={() => setHover('whitepaper')}
            onMouseLeave={() => setHover('')}
            style={{
              color: 'white',
              opacity: tabNum == 6 || hover == 'whitepaper' ? 1 : 0.5,
            }}
            onClick={() => {
              setTabNum(6)
            }}
          >
            white&nbsp;paper
          </PageNavItems>
        </PageNavContainer>
        <PageNameIndicator style={{ color: 'white' }}>more</PageNameIndicator>
      </PageBlock>
    </>
  )
}

export default MorePage
