import React, { useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { AboutTabContext } from '../../contexts/AboutTabProvider'
import DragBar from './aboutElement/DragBar'

import { use3DCharacter } from 'hooks/use3DCharacter'
import { CharacterType } from 'pages/about'

const ConceptBlock = styled.main`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;

  transition: opacity 0.5s ease, visibility 0.5s ease;
`

const ConceptContentContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 311px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 240px;
`

const ConceptContentNoBorder = styled.div`
  height: 38px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;

  color: #000000;
`
const ConceptContentWithBorder = styled.div`
  position: absolute;
  left: 0px;
  top: 200px;
  width: 800px;
  height: 57px;
  padding: 0 30px;
  border-left: 1px solid black;
  border-right: 1px solid black;

  box-sizing: border-box;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;

  color: #000000;
`

const ConceptContentButtonContainer = styled.div`
  position: absolute;
  top: 120px;
  display: flex;
`

const ConceptContentButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 130px;
  height: 42px;
  border: 1px solid black;
  border-radius: 5px;
  box-sizing: border-box;
  margin-right: 5px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  text-transform: uppercase;

  opacity: 0.2;

  transition: 0.2s ease;

  color: #000000;
`

const ConceptImage = styled.img`
  position: absolute;
  top: -200px;
  right: 0px;

  // background: black;

  transition: opacity 0.5s ease, visibility 0.5s ease;
`

const Concept = ({ edges }: { edges: CharacterType[] }) => {
  const { tabNum, scrollHandler } = useContext(AboutTabContext)
  const [conceptTab, setConceptTap] = useState<string>('3d')
  const [imgIdx, setImgIdx] = useState<number>(1)
  const [_, getImageSrc] = use3DCharacter()

  return (
    <ConceptBlock
      onWheel={scrollHandler}
      style={{
        visibility: tabNum == 3 ? 'visible' : 'hidden',
        opacity: tabNum == 3 ? 1 : 0,
        zIndex: tabNum != 3 ? 0 : 1,
      }}
    >
      <ConceptImage
        style={{
          visibility: conceptTab == '3d' ? 'visible' : 'hidden',
          opacity: conceptTab == '3d' ? 1 : 0,
          transform: `scale(${0.6 + imgIdx * 0.01}) translate(${
            (-120 * imgIdx) / 100
          }px, ${(400 * imgIdx) / 100}px)`,
        }}
        src={getImageSrc(imgIdx)}
      />
      <ConceptContentContainer>
        <ConceptContentNoBorder>
          Metagonz has been developed by experts in various fields based on
          K-beauty, fashion,
          <br />
          and culture by club & festival promoters, EDM DJ producers, graphic
          designers, stylists and blockchain developers.
        </ConceptContentNoBorder>
        <ConceptContentButtonContainer>
          <ConceptContentButton
            onClick={() => setConceptTap('3d')}
            style={{
              opacity: conceptTab == '3d' ? 1 : 0.2,
            }}
          >
            3D
          </ConceptContentButton>
          <ConceptContentButton
            onClick={() => setConceptTap('nft')}
            style={{
              opacity: conceptTab == 'nft' ? 1 : 0.2,
            }}
          >
            nft
          </ConceptContentButton>
        </ConceptContentButtonContainer>
        <ConceptContentWithBorder
          style={{
            visibility: conceptTab == '3d' ? 'visible' : 'hidden',
            opacity: conceptTab == '3d' ? 1 : 0,
          }}
        >
          A total of 8,888 limited edition Metagonz NFTs are released based on a
          total of 8 characters.
          <br />
          It proves that it is a collectible item with unique digital art and is
          a member of the MetaOctagon community,
          <br />
          which plays a pivotal role in the establishment and expansion of the
          MetaOctagon Universe.
        </ConceptContentWithBorder>
        <ConceptContentWithBorder
          style={{
            visibility: conceptTab == 'nft' ? 'visible' : 'hidden',
            opacity: conceptTab == 'nft' ? 1 : 0,
          }}
        >
          A total of 8,888 limited edition Metagonz NFTs are released based on a
          total of 8 characters. It proves that it is a collectible item with
          unique digital art and is a member of the MetaOctagon community, which
          plays a pivotal role in the establishment and expansion of the
          MetaOctagon Universe.
        </ConceptContentWithBorder>
      </ConceptContentContainer>

      <DragBar
        page="concept"
        setImgIdx={setImgIdx}
        isOn={conceptTab == '3d' ? true : false}
      />
    </ConceptBlock>
  )
}

export default Concept
