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

const NewsBlock = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`

const NewsItemContainer = styled.div`
  margin-top: 230px;
  width: calc(100vw - 60px);
  height: calc(100vh - 270px);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 30px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 30px;
  }
`

const NewsItems = styled.div`
  // display: flex;
  // flex-direction: column;

  width: 1260px;
  height: 130px;
  padding-bottom: 30px;

  border-top: 1px;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background: rgba(0, 0, 0, 0.02);
  }

  :hover .news-title {
    color: #6200ee;
  }
`

const NewsItemTitle = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 31px;
  text-align: center;

  margin: 30px 0 20px 0;

  color: #000000;

  transition: 0.3s ease;
`

const NewsItemDate = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;

  color: #000000;
`

const NewsItem = ({ title, date }: { title: string; date: string }) => {
  return (
    <NewsItems>
      <NewsItemTitle className="news-title">{title}</NewsItemTitle>
      <NewsItemDate>{date}</NewsItemDate>
    </NewsItems>
  )
}

const NewsPage = () => {
  const { setMode, menuOpened } = useContext(DarkmodeContext)

  useEffect(() => {
    if (!menuOpened) {
      setMode(true)
    }
  }, [menuOpened])

  return (
    <>
      <Global styles={reset} />
      <NewsBlock>
        <NewsItemContainer>
          <NewsItem
            title="HelloHelloHelloHelloHelloHello"
            date="nov. 9. 2022"
          />
          <NewsItem title="Hello" date="nov. 9. 2022" />
          <NewsItem title="Hello" date="nov. 9. 2022" />
          <NewsItem title="Hello" date="nov. 9. 2022" />
          <NewsItem title="Hello" date="nov. 9. 2022" />
          <NewsItem title="Hello" date="nov. 9. 2022" />
          <NewsItem title="Hello" date="nov. 9. 2022" />
          <NewsItem title="Hello" date="nov. 9. 2022" />
          <NewsItem title="Hello" date="nov. 9. 2022" />
          <NewsItem title="Hello" date="nov. 9. 2022" />
          <NewsItem title="Hello" date="nov. 9. 2022" />
          <NewsItem title="Hello" date="nov. 9. 2022" />
          <NewsItem title="Hello" date="nov. 9. 2022" />
          <NewsItem title="Hello" date="nov. 9. 2022" />
          <NewsItem title="Hello" date="nov. 9. 2022" />
        </NewsItemContainer>
        <PageNameIndicator>news</PageNameIndicator>
      </NewsBlock>
    </>
  )
}

export default NewsPage
