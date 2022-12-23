/* eslint-disable */
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AudioContext } from '../contexts/AudioProvider'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'

import { DarkmodeContext } from '../contexts/DarkmodeProvider'
import { globalHistory } from '@reach/router'
import styled from '@emotion/styled'
import { PageNameIndicator } from 'components/pageLayout/pageLayout'

import { Trait } from '../types/Trait.type'
import { Item } from '../types/Item.type'
import { useMediaQuery } from 'react-responsive'

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
  align-items: flex-start;

  overflow-y: scroll;
  overflow-x: hidden;
  width: 1500px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  @media (max-width: 949px) {
    margin-left: 10px;
    margin-top: 192px;
  }
`

const GalleryNftContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 1500px;
`

const GalleryNftItems = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: 0px 5px;

  @media (max-width: 1506px) {
    margin: 0px calc((100vw - (30px + 207px + 30px) - 900px) / 6);
  }

  @media (max-width: 1200px) {
    margin: 0px calc((100vw - 40px - 900px) / 6);
  }

  @media (max-width: 949px) {
    margin: 0px 10px;
    width: calc((100vw - 60px) / 2);
  }
`

const GalleryNftImageContainer = styled.div`
  width: 300px;
  height: 400px;

  background: none;
  video,
  img {
    width: 100%;
  }

  @media (max-width: 949px) {
    width: calc((100vw - 60px) / 2);
    height: calc((100vw - 60px) / 6 * 4);
    overflow: hidden;

    border-radius: 5px;
  }
`

const GalleryNftItemAuthor = styled.div`
  margin-top: 20px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;

  color: #000000;

  @media (max-width: 949px) {
    margin-top: 15px;
  }
`

const GalleryNftItemNumber = styled.div`
  margin-bottom: 50px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;

  color: #000000;

  @media (max-width: 949px) {
    margin-bottom: 40px;
  }
`

const GallerySelectMenuMobileBackground = styled.div`
  position: fixed;
  top: 75px;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.1);
`

const GallerySelectMenuMobileBlock = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;

  width: 247px;
  height: 100vh;

  background: white;

  overflow-y: scroll;
  overflow-x: hidden;
`

const GallerySelectMenuMobileSpacer = styled.div`
  min-width: 100vw;
  min-height: 200px;
`

const GallerySelectMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 207px;
  margin-right: 30px;

  @media (max-width: 1200px) {
    position: absolute;
    top: 20px;
    left: 20px;
  }
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

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  text-transform: uppercase;

  cursor: pointer;
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

const GallerySelectMobileButton = styled.div`
  position: absolute;
  top: 100px;
  right: calc((100vw - 40px - 900px) / 6 + 10px);

  cursor: pointer;

  @media (min-width: 1201px) {
    display: none;
  }

  @media (max-width: 949px) {
    top: 150px;
    right: 20px;
  }

  @media (max-width: 767px) {
    top: 115px;
  }
`

const GallerySpacer = styled.div`
  min-width: 100vw;
  min-height: 200px;
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
  const imageUrl: string = `${image}#t=0.001`
  return (
    <GalleryNftItems>
      <GalleryNftImageContainer>
        {imageName.split('.')[1] === 'png' ||
        imageName.split('.')[1] === 'gif' ? (
          <img src={image} alt="" />
        ) : (
          <video playsInline width="100%" controls>
            <source src={imageUrl} type="video/mp4" />
          </video>
        )}
      </GalleryNftImageContainer>
      <GalleryNftItemAuthor>META GONZ</GalleryNftItemAuthor>
      <GalleryNftItemNumber>NO. {edition}</GalleryNftItemNumber>
    </GalleryNftItems>
  )
}

const items: Array<Item> = require('../resources/metadata.json')
const traits: Array<Trait> = require('../resources/traits.json')

const GalleryPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:1200px)',
  })
  const { setDefaultAudio } = useContext(AudioContext)
  const { setMode, menuOpened } = useContext(DarkmodeContext)
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false)
  const [currentItems, setCurrentItems] = useState<Array<Item>>(items)
  const [itemRange, setItemRange] = useState<number>(12)
  const [searchQuery, setSearchQuery] = useState<Map<string, Set<string>>>(
    new Map([
      ['Background', new Set()],
      ['Rarity', new Set()],
      ['Hair', new Set()],
      ['Body', new Set()],
      ['Clothes', new Set()],
      ['Accessory', new Set()],
      ['Sunglasses', new Set()],
      ['Outer', new Set()],
      ['Music', new Set()],
      ['Music Equipment', new Set()],
    ]),
  )

  // 기본 height
  const [menuOpenHeight, setMenuOpenHeight] = useState<Array<number>>([
    32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
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

  useEffect(() => {
    if (searchQuery.get('Rarity')?.has('Legendary')) {
      // 탭 다 닫기
      setMenuOpenHeight([32, 32, 32, 32, 32, 32, 32, 32, 32, 32])

      // 설정된 특성값 초기화
      searchQuery.get('Rarity')?.clear()
      searchQuery.get('Rarity')?.add('Legendary')
      searchQuery.get('Background')?.clear()
      searchQuery.get('Hair')?.clear()
      searchQuery.get('Body')?.clear()
      searchQuery.get('Clothes')?.clear()
      searchQuery.get('Accessory')?.clear()
      searchQuery.get('Sunglasses')?.clear()
      searchQuery.get('Outer')?.clear()
      searchQuery.get('Music')?.clear()
    }
  }, [searchQuery])

  const scrollHandler = useCallback((e: React.WheelEvent) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
      e.currentTarget.clientHeight + 200
    ) {
      setItemRange(range => range + 12)
    }
  }, [])

  return (
    <>
      <Global styles={reset} />
      <GalleryBlock>
        {/* ios에서 wholeContainer 안에 있으면 position 속성을 바꾸더라도 overflow에 걸림.
        해결하기 위해 width별로 selection menu dom의 위계를 다르게 놓았음. */}
        {isMobile ? (
          <div
            style={{
              zIndex: 1, // video 튀어나옴 방지
            }}
          >
            <GallerySelectMobileButton
              onClick={() => {
                setSideMenuOpen(() => {
                  if (sideMenuOpen) return false
                  else return true
                })
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.61892 4.125H18.383C18.5163 4.12504 18.6468 4.16387 18.7585 4.23675C18.8702 4.30963 18.9582 4.41341 19.012 4.53546C19.0657 4.65751 19.0828 4.79255 19.0611 4.92414C19.0395 5.05572 18.98 5.17817 18.89 5.27656L13.2439 11.4898C13.1264 11.6156 13.0618 11.7818 13.0635 11.9539V16.818C13.0645 16.9322 13.0367 17.0449 12.9826 17.1455C12.9285 17.2462 12.8499 17.3316 12.7541 17.3937L10.0041 19.2242C9.90092 19.2922 9.78137 19.3311 9.65798 19.3368C9.53459 19.3426 9.41193 19.315 9.3029 19.257C9.19386 19.1989 9.10247 19.1126 9.03834 19.007C8.97421 18.9014 8.93971 18.7805 8.93845 18.657V11.9539C8.94011 11.7818 8.87549 11.6156 8.75799 11.4898L3.11189 5.27656C3.02188 5.17817 2.96242 5.05572 2.94077 4.92414C2.91911 4.79255 2.93619 4.65751 2.98993 4.53546C3.04367 4.41341 3.13174 4.30963 3.24342 4.23675C3.3551 4.16387 3.48557 4.12504 3.61892 4.125V4.125Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </GallerySelectMobileButton>
            <GallerySelectMenuMobileBackground
              onClick={() => {
                setSideMenuOpen(false)
              }}
              style={{
                display: sideMenuOpen ? 'flex' : 'none',
              }}
            >
              <GallerySelectMenuMobileBlock
                onClick={e => {
                  e.preventDefault()
                  e.stopPropagation()
                }}
              >
                <GallerySelectMenuContainer>
                  <GallerySelectMenuAttributeContainer>
                    <GallerySelectMenuAttributeTitleContainer
                      style={{
                        color: 'white',
                        background: '#FF1D61',
                        cursor: 'pointer',
                      }}
                      onClick={e => {
                        valueClickHandler('Rarity', 'Legendary')
                      }}
                    >
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
                        <path
                          d="M7.80078 11.8008L12.0008 16.0008"
                          stroke="black"
                        />
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
                      <GallerySelectMenuAttributeTitleContainer
                        onClick={() => {
                          if (!searchQuery.get('Rarity')?.has('Legendary'))
                            titleClickHandler(idx, trait.values.length)
                        }}
                      >
                        <GallerySelectMenuAttributeTitle
                          style={{
                            opacity: searchQuery.get('Rarity')?.has('Legendary')
                              ? 0.5
                              : 1,
                          }}
                        >
                          {trait.trait_type}
                        </GallerySelectMenuAttributeTitle>
                        <GallerySelectMenuAttributeSelectNumber>
                          {searchQuery.get(trait.trait_type)?.has('Legendary')
                            ? 0
                            : searchQuery.get(trait.trait_type)?.size}
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
                  <GallerySelectMenuMobileSpacer />
                </GallerySelectMenuContainer>
              </GallerySelectMenuMobileBlock>
            </GallerySelectMenuMobileBackground>
          </div>
        ) : (
          <></>
        )}
        <GalleryWholeContainer onWheel={scrollHandler}>
          {!isMobile ? (
            <GallerySelectMenuContainer>
              <GallerySelectMenuAttributeContainer>
                <GallerySelectMenuAttributeTitleContainer
                  style={{
                    color: 'white',
                    background: '#FF1D61',
                    cursor: 'pointer',
                  }}
                  onClick={e => {
                    valueClickHandler('Rarity', 'Legendary')
                  }}
                >
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
                  <GallerySelectMenuAttributeTitleContainer
                    onClick={() => {
                      if (!searchQuery.get('Rarity')?.has('Legendary'))
                        titleClickHandler(idx, trait.values.length)
                    }}
                  >
                    <GallerySelectMenuAttributeTitle
                      style={{
                        opacity: searchQuery.get('Rarity')?.has('Legendary')
                          ? 0.5
                          : 1,
                      }}
                    >
                      {trait.trait_type}
                    </GallerySelectMenuAttributeTitle>
                    <GallerySelectMenuAttributeSelectNumber>
                      {searchQuery.get(trait.trait_type)?.has('Legendary')
                        ? 0
                        : searchQuery.get(trait.trait_type)?.size}
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
              <GallerySelectMenuMobileSpacer />
            </GallerySelectMenuContainer>
          ) : (
            <></>
          )}
          <GalleryNftContainer>
            {currentItems
              .slice(0, itemRange)
              .map(({ name, image, imageName, edition }, idx) => (
                <GalleryNftItemComponent
                  key={idx}
                  image={image}
                  imageName={imageName}
                  edition={edition}
                />
              ))}
            <GallerySpacer />
          </GalleryNftContainer>
          <PageNameIndicator>gallery</PageNameIndicator>
        </GalleryWholeContainer>
      </GalleryBlock>
    </>
  )
}

export default GalleryPage
