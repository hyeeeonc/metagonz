import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import reset from '../../lib/styles/reset'
import charactersStyle from '../../lib/styles/charactersStyle'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

import { DarkmodeContext } from '../contexts/DarkmodeProvider'

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
  const [makeDefault, setMakeDefault] = useState<boolean>(false)
  const { setMode } = useContext(DarkmodeContext)
  useEffect(() => {
    setMode(true)
  }, [])
  /**
   * 캐릭터 image에서 onClick시 발동하는 함수 / selectedCharacter 값 넣음
   * @param order 클릭한 character 받음
   */
  const characterSelectHandler = (order: number) => {
    if (makeDefault == false) {
      setSelectedCharacter(order)
      setMakeDefault(true)
    } else if (makeDefault === true && selectedCharacter !== order) {
      setSelectedCharacter(order)
      setMakeDefault(true)
    } else {
      setSelectedCharacter(null)
      setMakeDefault(false)
    }
  }

  return (
    <>
      <Global styles={reset} />
      <Global styles={charactersStyle} />

      <CharactersBlock>
        <CharactersItemsContainer>
          <CharactersItems
            onClick={() => characterSelectHandler(0)}
            style={{
              height:
                selectedCharacter === 0
                  ? '40%'
                  : selectedCharacter === null
                  ? '100%'
                  : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => characterSelectHandler(1)}
            style={{
              height:
                selectedCharacter === 1
                  ? '40%'
                  : selectedCharacter === null
                  ? '100%'
                  : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => characterSelectHandler(2)}
            style={{
              height:
                selectedCharacter === 2
                  ? '40%'
                  : selectedCharacter === null
                  ? '100%'
                  : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => characterSelectHandler(3)}
            style={{
              height:
                selectedCharacter === 3
                  ? '40%'
                  : selectedCharacter === null
                  ? '100%'
                  : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => characterSelectHandler(4)}
            style={{
              height:
                selectedCharacter === 4
                  ? '40%'
                  : selectedCharacter === null
                  ? '100%'
                  : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => characterSelectHandler(5)}
            style={{
              height:
                selectedCharacter === 5
                  ? '40%'
                  : selectedCharacter === null
                  ? '100%'
                  : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => characterSelectHandler(6)}
            style={{
              height:
                selectedCharacter === 6
                  ? '40%'
                  : selectedCharacter === null
                  ? '100%'
                  : '25%',
              zIndex: selectedCharacter === 0 ? 1 : 2,
            }}
          >
            <img src="static/images/charactertest.jpg" />
          </CharactersItems>

          <CharactersItems
            onClick={() => characterSelectHandler(7)}
            style={{
              height:
                selectedCharacter === 7
                  ? '40%'
                  : selectedCharacter === null
                  ? '100%'
                  : '25%',
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
