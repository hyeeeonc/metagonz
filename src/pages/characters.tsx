import React, { FunctionComponent, useState } from 'react'

import reset from '../../lib/styles/reset'
import charactersStyle from '../../lib/styles/charactersStyle'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

import Header from 'components/common/Header'

const CharactersBlock = styled.main`
  width: 100vw;
  height: calc(100vh - 6rem);
  position: fixed;
  left: 0;
  top: 6rem;
`

const CharactersItemsContainer = styled.div`
  width: calc(100vw - 4rem);
  height: calc(100vh - 6rem - 4rem);

  margin: 0 2rem;

  position: fixed;
  bottom: 1rem;
  left: 0;

  display: flex;
  justify-content: space-between;
`

const CharactersItems = styled.div`
  width: 10vw;
  height: 100%;

  border: 1px solid black;
  margin-top: auto;

  transition: height 0.5s ease;

  display: flex;
  justify-content: center;
  overflow: hidden;
`

const CharactersPage: FunctionComponent = function () {
  /**
   * 선택된 Character 결정하기 / null일때는 선택되지 않은 것
   */
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
    null,
  )
  /**
   * height: 100% 만들기
   */
  const [characterDefaultMode, setCharacterDefaultMode] =
    useState<boolean>(true)

  return (
    <>
      <Global styles={reset} />
      <Global styles={charactersStyle} />
      <Header headerDarkMode={true} />

      <CharactersBlock>
        <CharactersItemsContainer>
          <CharactersItems
            onClick={() => setSelectedCharacter(0)}
            style={{
              height: selectedCharacter === 0 || null ? '40%' : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => setSelectedCharacter(1)}
            style={{
              height: selectedCharacter === 1 || null ? '100%' : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => setSelectedCharacter(2)}
            style={{
              height: selectedCharacter === 2 || null ? '100%' : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => setSelectedCharacter(3)}
            style={{
              height: selectedCharacter === 3 || null ? '100%' : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => setSelectedCharacter(4)}
            style={{
              height: selectedCharacter === 4 || null ? '100%' : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => setSelectedCharacter(5)}
            style={{
              height: selectedCharacter === 5 || null ? '100%' : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => setSelectedCharacter(6)}
            style={{
              height: selectedCharacter === 6 || null ? '100%' : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => setSelectedCharacter(7)}
            style={{
              height: selectedCharacter === 7 || null ? '100%' : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>
        </CharactersItemsContainer>
      </CharactersBlock>
    </>
  )
}

export default CharactersPage
