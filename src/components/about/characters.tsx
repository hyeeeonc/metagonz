import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { AudioContext } from '../../contexts/AudioProvider'

const CharacterBlock = styled.main`
  position: relative;

  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;
`

const CharacterSelectorContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 311px;

  width: 543px;
  display: flex;
  justify-content: space-between;
`

const CharacterSelectoritems = styled.div`
  width: 27px;
  height: 16px;

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
  width: 88px;
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

  const [selected, setSelected] = useState<number>(0)

  useEffect(() => {
    setAudio(edges[selected].node.audio.publicURL)
  }, [selected])

  return (
    <CharacterBlock>
      <CharacterImage src={edges[selected].node.pic.publicURL} />

      <CharacterSelectorContainer>
        {edges.map(({ node }, index) => (
          <CharacterSelectoritems onClick={() => setSelected(index)}>
            {node.name}
          </CharacterSelectoritems>
        ))}
      </CharacterSelectorContainer>

      <CharactorInfoContainer>
        <CharactorInfoHead>
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
          <CharactorInfoCell>{edges[selected].node.name}</CharactorInfoCell>
          <CharactorInfoCell>{edges[selected].node.main_job}</CharactorInfoCell>
          <CharactorInfoCell>
            {edges[selected].node.second_job}
          </CharactorInfoCell>
          <CharactorInfoCell>
            {edges[selected].node.music_style}
          </CharactorInfoCell>
          <CharactorInfoCell>
            {edges[selected].node.nationality}
          </CharactorInfoCell>
          <CharactorInfoCell>{edges[selected].node.age}</CharactorInfoCell>
          <CharactorInfoCell>{edges[selected].node.hight}</CharactorInfoCell>
          <CharactorInfoCell>{edges[selected].node.weight}</CharactorInfoCell>
          <CharactorInfoCell>{edges[selected].node.mbti}</CharactorInfoCell>
          <CharactorInfoCell>{edges[selected].node.likes}</CharactorInfoCell>
        </CharacterInfoData>
      </CharactorInfoContainer>
    </CharacterBlock>
  )
}

export default Characters
