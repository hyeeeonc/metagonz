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

type ArticleType = {
  title: string
  published_at: Date
  content: string
}

const NewsPage = () => {
  const { setMode, menuOpened } = useContext(DarkmodeContext)
  const [articles, setArticles] = useState<ArticleType[]>([])

  useEffect(() => {
    const user_id = 'minsuk4820'
    ;(async function () {
      const username = 'cndro'
      const RSSUrl = `https://medium.com/feed/@${username}`
      const RSSConverter = `https://api.rss2json.com/v1/api.json?rss_url=${RSSUrl}`
      const res = await fetch(RSSConverter)
      const data = await res.json()
    })()
    ;(async function () {
      const res = await fetch(
        `https://medium2.p.rapidapi.com/user/${user_id}/articles`,
        {
          headers: {
            Authorization:
              'Token 205c6d266873f04dff993c80d541df335d0ea715ec04b0039008961639d1c11eb',
          },
        },
      )
      const { associated_articles }: { associated_articles: Array<string> } =
        await res.json()

      setArticles(
        await Promise.all(
          associated_articles.map(async article_id => {
            // get article info
            const res1 = await fetch(
              `https://medium2.p.rapidapi.com/article/${article_id}`,
              {
                headers: {
                  Authorization:
                    '205c6d266873f04dff993c80d541df335d0ea715ec04b0039008961639d1c11eb',
                },
              },
            )
            const {
              title,
              published_at,
            }: { title: string; published_at: Date } = await res1.json()

            // get article content
            const res2 = await fetch(
              `https://medium2.p.rapidapi.com/article/${article_id}/content`,
            )
            const { content }: { content: string } = await res2.json()

            return {
              title,
              published_at,
              content,
            } as ArticleType
          }),
        ),
      )
    })
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
          <NewsItem
            title="HelloHelloHelloHelloHelloHello"
            date="nov. 9. 2022"
          />
          {articles.map(({ title, published_at, content }) => (
            <NewsItem title={title} date={published_at.toString()} />
          ))}
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
