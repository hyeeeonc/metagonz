import React, { useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { AudioContext } from '../../contexts/AudioProvider'
import { AboutTabContext } from '../../contexts/AboutTabProvider'
import { CharacterType } from 'pages/about'
import DragBar from './aboutElement/DragBar'

const CharacterBlock = styled.main`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;

  transition: opacity 0.5s ease;
`

const CharacterSelectorContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 311px;

  width: 550px;
  display: flex;

  transition: 0.3s ease;

  @media (max-height: 779px) {
    top: 180px;
  }
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

  transition: 0.3s ease;
  @media (max-width: 1100px) {
    box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.6);
    padding: 20px;
  }

  @media (max-height: 779px) {
    top: 247px;
  }
`

const CharactorInfoHead = styled.div`
  width: 88px;

  font-weight: 700;

  margin-right: 50px;
`
const CharacterInfoData = styled.div`
  width: 352px;

  font-weight: 400;
`

const CharactorInfoCell = styled.div`
  font-family: 'SUIT';
  font-style: normal;

  font-size: 15px;
  line-height: 18px;

  margin: 10px 0;

  color: #000000;
`

const CharacterImage = styled.img`
  position: absolute;
  top: -1430px;
  right: -250px;

  height: 4000px;

  display: flex;
  align-items: center;

  transition: 0.3s ease;

  @media (max-width: 1300px) {
    right: -500px;
  }
`

const CharacterSelectionCarouselWindow = styled.div`
  position: absolute;
  left: 0;
  top: 347px;

  width: 100vw;
  height: 560px;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  align-items: center;

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #1c0044 0%, #6200ee 100%);
    border-radius: 30px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }

  @media (max-height: 779px) {
    height: 480px;
    top: 187px;

    @media (min-width: 1520px) {
      width: 1550px;
      margin: 0 calc((100vw - 1550px) / 2);
      @media (min-width: 1728px) {
        margin: 0 calc((1728px - 1550px) / 2);
      }
    }
  }
`

const CharacterSelectionCarousel = styled.div`
  width: 3000px;
  display: flex;
  align-items: center;

  margin-left: -20px;

  // overflow: hidden;

  @media (max-height: 779px) {
    @media (min-width: 1520px) {
      margin-left: 0px;
    }
  }
`

const CharacterSelectionCarouselItems = styled.div`
  position: relative;
  width: 217px;
  height: 410px;

  margin: 0 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(180deg, #1c0044 0%, #6200ee 100%);
  border-radius: 10px;

  overflow: hidden;

  transition: 0.3s ease;

  :hover {
    transform: scale(1.2);
    z-index: 1;

    background: linear-gradient(180deg, #34312e 0%, #f3e2da 100%);
  }

  :hover div {
    opacity: 0.3;
  }

  @media (max-height: 779px) {
    width: 189px;
    height: 350px;
  }
`

const CharacterSelectionCarouselItemImag = styled.img`
  width: 600px;
  margin-top: 920px;

  transition: 0.3s ease;

  :hover {
    width: 650px;
    transform: translate(0, 85px);
  }

  @media (max-height: 779px) {
    width: 540px;
  }
`

const CharacterSelectionCarouselItemName = styled.div`
  position: absolute;
  left: calc(50% - 15px);
  top: 15px;

  width: 30px;
  height: 17px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  transition: 0.3s ease;

  opacity: 0;
`

const CharactersCarouselItem = ({
  idx,
  marginLeft,
  marginTop,
  setSelected,
  edges,
}: {
  idx: number
  marginLeft: number
  marginTop: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
  edges: CharacterType[]
}) => {
  return (
    <CharacterSelectionCarouselItems onClick={() => setSelected(idx)}>
      <CharacterSelectionCarouselItemImag
        src={edges[idx]?.node.pic.publicURL}
        style={{ marginLeft: marginLeft, marginTop: marginTop }}
      />
      <CharacterSelectionCarouselItemName>
        {edges[idx].node.name}
      </CharacterSelectionCarouselItemName>
    </CharacterSelectionCarouselItems>
  )
}

const Characters = ({ edges }: { edges: CharacterType[] }) => {
  const { tabNum, scrollHandler } = useContext(AboutTabContext)
  const [imgIdx, setImgIdx] = useState<number>(1)
  const { setCharacterAudio } = useContext(AudioContext)

  const [selected, setSelected] = useState<number>(-1)

  useEffect(() => {
    if (edges[selected]) {
      setCharacterAudio(edges[selected].node.audio.publicURL)
    }
  }, [selected])

  return (
    <CharacterBlock
      onWheel={scrollHandler}
      style={{
        visibility: tabNum == 2 ? 'visible' : 'hidden',
        opacity: tabNum == 2 ? 1 : 0,
        zIndex: tabNum != 2 ? 0 : 1,
      }}
    >
      <CharacterSelectionCarouselWindow
        style={{
          visibility: selected == -1 ? 'visible' : 'hidden',
          opacity: selected == -1 ? 1 : 0,
          zIndex: selected == -1 ? 3 : 0,
        }}
      >
        <CharacterSelectionCarousel>
          <CharactersCarouselItem
            idx={0}
            marginLeft={0}
            marginTop={920}
            setSelected={setSelected}
            edges={edges}
          />

          <CharactersCarouselItem
            idx={1}
            marginLeft={130}
            marginTop={920}
            setSelected={setSelected}
            edges={edges}
          />

          <CharactersCarouselItem
            idx={2}
            marginLeft={-60}
            marginTop={800}
            setSelected={setSelected}
            edges={edges}
          />

          <CharactersCarouselItem
            idx={3}
            marginLeft={-40}
            marginTop={920}
            setSelected={setSelected}
            edges={edges}
          />

          <CharactersCarouselItem
            idx={4}
            marginLeft={110}
            marginTop={960}
            setSelected={setSelected}
            edges={edges}
          />

          <CharactersCarouselItem
            idx={5}
            marginLeft={0}
            marginTop={920}
            setSelected={setSelected}
            edges={edges}
          />

          <CharactersCarouselItem
            idx={6}
            marginLeft={40}
            marginTop={900}
            setSelected={setSelected}
            edges={edges}
          />

          <CharactersCarouselItem
            idx={7}
            marginLeft={20}
            marginTop={960}
            setSelected={setSelected}
            edges={edges}
          />
        </CharacterSelectionCarousel>
      </CharacterSelectionCarouselWindow>
      <CharacterImage
        style={{
          opacity: selected != -1 ? 1 : 0,
          zIndex: selected != -1 ? 0 : -1,
          marginRight:
            selected == 1 || selected == 4 ? -100 : selected == 0 ? -100 : 0,
          // marginTop:
          //   selected == 2 ? -100 : selected == 4 || selected == 7 ? 100 : 0,
          transform: `scale(${0.3 + imgIdx * 0.005}) translate(0px, ${
            (4000 * imgIdx * 0.005 + 300) / 2
          }px)`,
          // transform:
          //   imgIdx > 50
          //     ? `scale(${0.5 + imgIdx * 0.005}) translate(0px, ${
          //         imgIdx * 13 - 1300
          //       }px)`
          //     : `scale(${0.2 + imgIdx * 0.011}) translate(0px, ${
          //         imgIdx * 93 - 5300
          //       }px)`,
        }}
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
      <CharactorInfoContainer
        style={{
          opacity: selected != -1 ? 1 : 0,
          zIndex: selected != -1 ? 3 : 0,
        }}
      >
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
      <DragBar
        page="character"
        setImgIdx={setImgIdx}
        isOn={selected == -1 ? false : true}
        initProgress={100}
      />
    </CharacterBlock>
  )
}

export default Characters
