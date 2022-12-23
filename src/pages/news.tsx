/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'
import { DarkmodeContext } from '../contexts/DarkmodeProvider'
import styled from '@emotion/styled'

import {
  PageNameIndicator,
  PageNavContainer,
  PageNavItems,
} from 'components/pageLayout/pageLayout'
import axios from 'axios'
import { object } from 'prop-types'

const NewsBlock = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`

const NewsItemContainer = styled.div`
  margin-top: 230px;
  width: 1300px;
  height: calc(100vh - 270px);

  // display: flex;
  // flex-direction: column;
  // align-items: center;

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

  @media (max-width: 1339px) {
    width: calc(100vw - 40px);
  }

  @media (max-width: 767px) {
    ::-webkit-scrollbar {
      display: none;
    }
    margin-top: 180px;
    width: calc(100vw - 40px);
  }
`

const NewsItemLinker = styled.a`
  text-decoration: none;
`

const NewsItems = styled.div`
  width: 1260px;

  border-top: 1px;
  border-radius: 5px;
  cursor: pointer;

  text-decoration: none;

  padding: 0 10px;
  box-sizing: border-box;

  :hover {
    background: rgba(0, 0, 0, 0.02);
  }

  :hover .news-title {
    color: #6200ee;
  }

  @media (max-width: 1339px) {
    width: calc(100vw - 80px);
  }

  @media (max-width: 767px) {
    width: calc(100vw - 40px);
  }
`

const NewsItemTitle = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 31px;
  text-align: center;

  padding: 30px 0 20px 0;

  color: #000000;

  transition: color 0.3s ease;

  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 19px;
  }
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

  padding-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 16px;
  }
`

const NewsSpacer = styled.div`
  min-width: 100vw;
  min-height: 200px;
`

const NewsItem = ({
  link,
  title,
  date,
}: {
  link: string
  title: string
  date: string
}) => {
  return (
    <NewsItems>
      <NewsItemLinker target="_blank" href={link}>
        <NewsItemTitle className="news-title">{title}</NewsItemTitle>
        <NewsItemDate>{date}</NewsItemDate>
      </NewsItemLinker>
    </NewsItems>
  )
}

type ArticleType = {
  link: string
  title: string
  published_at: string
  content: string
}

const NewsPage = () => {
  const { setMode, menuOpened } = useContext(DarkmodeContext)
  const [articles, setArticles] = useState<ArticleType[]>([])

  useEffect(() => {
    axios
      .get(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@metaoctagon',
      )
      .then(res => {
        const tempArr: Array<ArticleType> = []
        res.data?.items?.map((item: any) => {
          const tempObj: ArticleType = {
            link: item?.link,
            title: item.title,
            published_at: item.pubDate.split(' ')[0],
            content: item.content,
          }
          tempArr.push(tempObj)
        })
        setArticles(tempArr)
      })
      .catch(err => {
        console.log(err)
      })
      .then(() => {})
  }, [])

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
          {articles.map(({ link, title, published_at }, idx) => (
            <NewsItem link={link} title={title} date={published_at} key={idx} />
          ))}
          <NewsSpacer />
        </NewsItemContainer>
        <PageNameIndicator>news</PageNameIndicator>
      </NewsBlock>
    </>
  )
}

export default NewsPage
