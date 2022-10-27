import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { AudioContext } from '../../contexts/AudioProvider'
import { AboutTabContext } from '../../contexts/AboutTabProvider'

const CharacterBlock = styled.main`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;

  transition: opacity 0.5s ease, visibility 0.5s ease;
`

const CharacterSelectorContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 311px;

  width: 550px;
  display: flex;
`

const CharacterSelectoritems = styled.div`
  // width: 27px;
  height: 16px;

  margin: 0 15px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;

  color: #000000;

  opacity: 0.3;

  cursor: pointer;

  transition: 0.3s ease;
  :hover {
    opacity: 1;
    color: #6200ee;
  }
`

const CharactorInfoContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 377px;

  display: flex;
`

const CharactorInfoHead = styled.div`
  width: 88px;
  height: 228px;

  font-weight: 700;

  margin-right: 50px;
`
const CharacterInfoData = styled.div`
  width: 352px;
  height: 228px;

  font-weight: 400;
`

const CharactorInfoCell = styled.div`
  font-family: 'SUIT';
  font-style: normal;

  font-size: 15px;
  line-height: 12px;

  margin: 10px 0;

  color: #000000;
`

const CharacterImage = styled.img`
  position: absolute;
  top: 0;
  right: 50px;

  display: flex;
  align-items: center;
`

const CharacterSelectionCarouselWindow = styled.div`
  width: 100vw;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  align-items: center;

  transition: 0.5s ease;
`

const CharacterSelectionCarousel = styled.div`
  width: 1728px;
  display: flex;

  position: absolute;
  left: 0;
  top: 357px;
`

const CharacterSelectionCarouselItems = styled.div`
  width: 220px;
  height: 450px;
  left: 636px;
  top: 357px;

  background: #d9d9d9;
  border-radius: 10px;
  transform: matrix(-1, 0, 0, 1, 0, 0);

  transition: 0.3s ease;

  :hover {
    width: 270px;
    height: 540px;
    left: 1111px;
    top: 312px;

    background: #d9d9d9;
    border-radius: 10px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`

type CharacterType = {
  node: {
    name: string
    main_job: string
    second_job: string
    music_style: string
    nationality: string
    age: number
    hight: number
    weight: number
    mbti: string
    likes: string
    pic: {
      publicURL: string
    }
    audio: {
      publicURL: string
    }
  }
}

type CharacterListType = {
  allCharacterJson: {
    edges: CharacterType[]
  }
}

const Characters: FunctionComponent = function () {
  const { tabNum, scrollHandler } = useContext(AboutTabContext)

  const { setAudio } = useContext(AudioContext)
  const {
    allCharacterJson: { edges },
  }: CharacterListType = useStaticQuery(graphql`
    query getCharacters {
      allCharacterJson {
        edges {
          node {
            name
            main_job
            second_job
            music_style
            nationality
            age
            hight
            weight
            mbti
            likes
            pic {
              publicURL
            }
            audio {
              publicURL
            }
          }
        }
      }
    }
  `)

  const [selected, setSelected] = useState<number>(-1)
  useEffect(() => {
    console.log(selected)
  }, [selected])

  useEffect(() => {
    setAudio(edges[selected]?.node.audio.publicURL)
  }, [selected])

  return (
    <CharacterBlock
      onWheel={scrollHandler}
      style={{
        visibility: tabNum == 2 ? 'visible' : 'hidden',
        opacity: tabNum == 2 ? 1 : 0,
      }}
    >
      <CharacterSelectionCarouselWindow
        style={{
          visibility: selected == -1 ? 'visible' : 'hidden',
          opacity: selected == -1 ? 1 : 0,
        }}
      >
        <CharacterSelectionCarousel>
          <CharacterSelectionCarouselItems></CharacterSelectionCarouselItems>
          <CharacterSelectionCarouselItems></CharacterSelectionCarouselItems>
          <CharacterSelectionCarouselItems></CharacterSelectionCarouselItems>
          <CharacterSelectionCarouselItems></CharacterSelectionCarouselItems>
          <CharacterSelectionCarouselItems></CharacterSelectionCarouselItems>
          <CharacterSelectionCarouselItems></CharacterSelectionCarouselItems>
          <CharacterSelectionCarouselItems></CharacterSelectionCarouselItems>
          <CharacterSelectionCarouselItems></CharacterSelectionCarouselItems>
          <CharacterSelectionCarouselItems></CharacterSelectionCarouselItems>
        </CharacterSelectionCarousel>
      </CharacterSelectionCarouselWindow>
      <CharacterImage
        style={{ visibility: selected != -1 ? 'visible' : 'hidden' }}
        src={edges[selected]?.node.pic.publicURL}
      />

      <CharacterSelectorContainer>
        <CharacterSelectoritems onClick={() => setSelected(-1)}>
          all
        </CharacterSelectoritems>
        {edges.map(({ node }, index) => (
          <CharacterSelectoritems onClick={() => setSelected(index)}>
            {node.name}
          </CharacterSelectoritems>
        ))}
      </CharacterSelectorContainer>

      <CharactorInfoContainer>
        <CharactorInfoHead
          style={{
            visibility: selected != -1 ? 'visible' : 'hidden',
          }}
        >
          <CharactorInfoCell>Name</CharactorInfoCell>
          <CharactorInfoCell>Main Job</CharactorInfoCell>
          <CharactorInfoCell>2nd Job</CharactorInfoCell>
          <CharactorInfoCell>Music Style</CharactorInfoCell>
          <CharactorInfoCell>Nationality</CharactorInfoCell>
          <CharactorInfoCell>Age</CharactorInfoCell>
          <CharactorInfoCell>Hight / cm</CharactorInfoCell>
          <CharactorInfoCell>Weight / Kg</CharactorInfoCell>
          <CharactorInfoCell>MBTI</CharactorInfoCell>
          <CharactorInfoCell>Likes</CharactorInfoCell>
        </CharactorInfoHead>
        <CharacterInfoData>
          <CharactorInfoCell>{edges[selected]?.node.name}</CharactorInfoCell>
          <CharactorInfoCell>
            {edges[selected]?.node.main_job}
          </CharactorInfoCell>
          <CharactorInfoCell>
            {edges[selected]?.node.second_job}
          </CharactorInfoCell>
          <CharactorInfoCell>
            {edges[selected]?.node.music_style}
          </CharactorInfoCell>
          <CharactorInfoCell>
            {edges[selected]?.node.nationality}
          </CharactorInfoCell>
          <CharactorInfoCell>{edges[selected]?.node.age}</CharactorInfoCell>
          <CharactorInfoCell>{edges[selected]?.node.hight}</CharactorInfoCell>
          <CharactorInfoCell>{edges[selected]?.node.weight}</CharactorInfoCell>
          <CharactorInfoCell>{edges[selected]?.node.mbti}</CharactorInfoCell>
          <CharactorInfoCell>{edges[selected]?.node.likes}</CharactorInfoCell>
        </CharacterInfoData>
      </CharactorInfoContainer>
    </CharacterBlock>
  )
}

export default Characters
