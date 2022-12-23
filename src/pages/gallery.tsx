import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AudioContext } from '../contexts/AudioProvider'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'

import { DarkmodeContext } from '../contexts/DarkmodeProvider'

import { graphql, useStaticQuery } from 'gatsby'
import { globalHistory } from '@reach/router'
import styled from '@emotion/styled'
import { PageNameIndicator } from 'components/pageLayout/pageLayout'

import { Trait } from '../types/Trait.type'
import { Item } from '../types/Item.type'

const GalleryBlock = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`

const GalleryWholeContainer = styled.div`
  margin: 130px 0 100px 30px;

  height: calc(100vh - 150px);

  display: flex;

  overflow-y: scroll;
  overflow-x: hidden;
  width: 1500px;
`

const GalleryNftContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 1500px;
`

const GalleryNftItems = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: 0px 10px;
`

const GalleryNftImageContainer = styled.div`
  width: 320px;
  height: 480px;

  background: none;
  video,
  img {
    width: 100%;
  }
`

const GalleryNftItemAuthor = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;

  color: #000000;
`

const GalleryNftItemNumber = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;

  color: #000000;
`

const GallerySelectMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 207px;
`

const GallerySelectMenuAttributeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  width: 207px;
  height: 32px;
  box-sizing: border-box;

  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(5px);
  border-radius: 5px;

  overflow: hidden;
`

const GallerySelectMenuAttributeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;

  width: 207px;
  height: 32px;
  box-sizing: border-box;

  overflow: hidden;
`

const GallerySelectMenuAttributeTitle = styled.div`
  width: 150px;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  text-transform: uppercase;

  color: #000000;

  cursor: pointer;
`

const GallerySelectMenuAttributeSelectNumber = styled.div`
  width: 20px;
  height: 20px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  text-align: center;

  color: #ff1d61;

  opacity: 0.5;
`

const GallerySelectMenuValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  gap: 5px;

  cursor: pointer;
`

const GallerySelectMenuValues = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex: none;

  width: 183px;
  height: 20px;

  :hover {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
  }
`

const GallerySelectMenuValuesSelectButton = styled.div`
  width: 12px;
  height: 12px;

  margin: 4px;

  background: #d9d9d9;
  border-radius: 2px;
`

const GallerySelectMenuValuesText = styled.div`
  width: 158px;
  height: 20px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #000000;
`

const GallerySelectMenuSearchContainer = styled.div`
  width: 205px;
  height: 30px;

  border: none;
  border-bottom: 1px solid black;

  display: flex;

  margin-bottom: 5px;
`

const GallerySelectMenuSearch = styled.input`
  width: 205px;
  height: 30px;

  box-sizing: border-box;

  border: none;

  margin-bottom: 5px;

  ::placeholder {
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    text-transform: capitalize;

    color: #000000;

    opacity: 0.2;
  }
  :focus {
    outline: none;
  }
`

const GallerySelectMenuSearchIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`

const GalleryNftItemComponent = ({
  image,
  imageName,
  edition,
}: {
  image: string
  imageName: string
  edition: string
}) => {
  return (
    <GalleryNftItems>
      <GalleryNftImageContainer>
        {imageName.split('.')[1] === 'png' ||
        imageName.split('.')[1] === 'gif' ? (
          <img src={image} alt="" />
        ) : (
          <video width="100%" controls>
            <source src={image} type="video/mp4" />
          </video>
        )}
      </GalleryNftImageContainer>
      <GalleryNftItemAuthor>META GONZ</GalleryNftItemAuthor>
      <GalleryNftItemNumber>NO. {edition}</GalleryNftItemNumber>
    </GalleryNftItems>
  )
}

// eslint-disable-next-line
const items: Array<Item> = require('../resources/metadata.json')
const traits: Array<Trait> = require('../resources/traits.json')

const GalleryPage = () => {
  const { setDefaultAudio } = useContext(AudioContext)
  const { setMode, menuOpened } = useContext(DarkmodeContext)

  const [currentItems, setCurrentItems] = useState<Array<Item>>(items)
  const [itemRange, setItemRange] = useState<number>(12)
  // const [menuOpen, setMenuOpen] = useState<Array<Array<number>>>([
  //   [],
  //   [],
  //   [],
  //   [],
  //   [],
  //   [],
  //   [],
  //   [],
  //   [],
  // ])
  //rarelity background hair body cloth accessary sunglasses outer music Music Equipment

  const [searchQuery, setSearchQuery] = useState<Map<string, Set<string>>>(
    new Map([
      ['Background', new Set()],
      ['Rarity', new Set()],
      ['Hair', new Set()],
      ['Body', new Set()],
      ['Clothes', new Set()],
      ['Accessory', new Set()],
      ['Sunglassess', new Set()],
      ['Outer', new Set()],
      ['Music', new Set()],
      ['Music Equipment', new Set()],
    ]),
  )

  // 기본 height
  const [menuOpenHeight, setMenuOpenHeight] = useState<Array<number>>([
    32, 32, 32, 32, 32, 32, 32, 32, 32,
  ])

  // 메뉴 title 선택했을 때 => 특성값들 보이게 하는 handler
  const titleClickHandler = (idx: number, numberOfData: number) => {
    if (menuOpenHeight[idx] === 32) {
      // 닫혔으면 height 키워줌
      const tempArr = [...menuOpenHeight]
      tempArr[idx] = 32 + 25 * numberOfData + 5
      setMenuOpenHeight(tempArr)
    } else {
      // 열렸으면 다시 닫게 height 32로
      const tempArr = [...menuOpenHeight]
      tempArr[idx] = 32
      setMenuOpenHeight(tempArr)
    }
  }

  // 특성값 클릭했을 때 => 검색에 직접 영향
  const valueClickHandler = (mapKey: string, sub: string) => {
    setSearchQuery(searchQuery => {
      const temp = new Map(searchQuery)
      if (searchQuery.get(mapKey)?.has(sub)) {
        temp.get(mapKey)?.delete(sub)
      } else {
        temp.get(mapKey)?.add(sub)
      }
      return temp
    })
  }

  useEffect(() => {
    if (!menuOpened) {
      setMode(true)
    }
  }, [menuOpened])

  useEffect(() => {
    setCurrentItems(_ => {
      const attrs = [
        'Rarity',
        'Background',
        'Hair',
        'Body',
        'Clothes',
        'Accessory',
        'Sunglasses',
        'Outer',
        'Music',
        'Music Equipment',
      ]
      return items.reduce<Array<Item>>((acc, item) => {
        const temp = Array.from(item.attributes)
        attrs.forEach(attr => {
          const result = temp.filter(({ trait_type }) => trait_type === attr)
          if (result.length === 0) {
            temp.push({ trait_type: attr, value: '' })
          }
        })
        const test = temp.reduce<boolean>(
          (acc, { trait_type, value }) =>
            acc &&
            (searchQuery.get(trait_type)?.size === 0 ||
              (searchQuery.get(trait_type)?.has(value) ?? true)),
          true,
        )
        if (test) {
          return acc.concat(item)
        } else {
          return acc
        }
      }, [])
    })

    setItemRange(12)
  }, [searchQuery])

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH' || action === 'POP') setDefaultAudio()
    })
  }, [setDefaultAudio])

  const scrollHandler = useCallback((e: React.WheelEvent) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
      e.currentTarget.clientHeight + 200
    ) {
      console.log('test')
      setItemRange(range => range + 12)
    }
  }, [])

  return (
    <>
      <Global styles={reset} />
      <GalleryBlock>
        <GalleryWholeContainer onWheel={scrollHandler}>
          <GallerySelectMenuContainer>
            <GallerySelectMenuAttributeContainer>
              <GallerySelectMenuAttributeTitleContainer>
                special
              </GallerySelectMenuAttributeTitleContainer>
            </GallerySelectMenuAttributeContainer>
            <GallerySelectMenuSearchContainer>
              <GallerySelectMenuSearchIcon>
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4.8" cy="8.8" r="4.3" stroke="black" />
                  <path d="M7.80078 11.8008L12.0008 16.0008" stroke="black" />
                </svg>
              </GallerySelectMenuSearchIcon>
              <GallerySelectMenuSearch
                type="number"
                placeholder="Sort By Serial"
              />
            </GallerySelectMenuSearchContainer>

            {traits.map((trait, idx) => (
              <GallerySelectMenuAttributeContainer
                key={idx}
                style={{
                  height: `${menuOpenHeight[idx]}px`,
                }}
              >
                <GallerySelectMenuAttributeTitleContainer>
                  <GallerySelectMenuAttributeTitle
                    onClick={() => {
                      // console.log(idx)
                      titleClickHandler(idx, trait.values.length)
                    }}
                  >
                    {trait.trait_type}
                  </GallerySelectMenuAttributeTitle>
                  <GallerySelectMenuAttributeSelectNumber>
                    {searchQuery.get(trait.trait_type)?.size}
                  </GallerySelectMenuAttributeSelectNumber>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L5 5L9 1" stroke="black" />
                  </svg>
                </GallerySelectMenuAttributeTitleContainer>

                <GallerySelectMenuValueContainer
                  style={{
                    display: menuOpenHeight[idx] === 32 ? 'none' : 'flex',
                  }}
                >
                  {trait.values.map((value, subIdx) => (
                    <GallerySelectMenuValues
                      key={subIdx}
                      onClick={e => {
                        valueClickHandler(trait.trait_type, value)
                      }}
                    >
                      <GallerySelectMenuValuesSelectButton
                        style={{
                          background: searchQuery
                            .get(trait.trait_type)
                            ?.has(value)
                            ? '#FF1D61'
                            : '#D9D9D9',
                        }}
                      />
                      <GallerySelectMenuValuesText>
                        {value}
                      </GallerySelectMenuValuesText>
                    </GallerySelectMenuValues>
                  ))}
                </GallerySelectMenuValueContainer>
              </GallerySelectMenuAttributeContainer>
            ))}
          </GallerySelectMenuContainer>

          <GalleryNftContainer>
            {currentItems
              .slice(0, itemRange)
              .map(({ name, image, imageName, edition }) => (
                <GalleryNftItemComponent
                  image={image}
                  imageName={imageName}
                  edition={edition}
                />
              ))}
          </GalleryNftContainer>
          <PageNameIndicator>gallery</PageNameIndicator>
        </GalleryWholeContainer>
      </GalleryBlock>
    </>
  )
}

export default GalleryPage
