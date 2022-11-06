import React, { useContext, useEffect, useState, useRef } from 'react'
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

  transition: opacity 0.5s ease;

  @media (max-width: 767px) {
    top: 218px;
    left: 0px;

    width: calc(100vw);
    height: calc(100vh - calc(100vh - 100%) - 218px);
    padding-top: 50px;
    box-sizing: border-box;

    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`

const ConceptContentContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 311px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 240px;

  transition: opacity 0.3s ease;
  @media (max-width: 1550px) {
    box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.6);
    padding: 20px;
  }

  @media (max-height: 779px) {
    top: 180px;
  }

  @media (max-width: 767px) {
    position: static;

    display: block;

    width: calc(100vw - 40px);
    height: auto;
    margin-left: 20px;
    box-shadow: none;
    background-color: none;
    padding: 0;
  }
`

const ConceptContentNoBorder = styled.div`
  height: 38px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;

  color: #000000;

  @media (max-width: 767px) {
    height: auto;
    font-size: 13px;
    line-height: 16px;
  }
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

  transition: 0.2s ease;

  @media (max-width: 1550px) {
    left: 15px;
  }

  @media (max-width: 767px) {
    position: static;

    padding: 0;
    border: none;
    width: auto;
    height: auto;
    font-size: 13px;
    line-height: 16px;
  }
`

const ConceptContentButtonContainer = styled.div`
  position: absolute;
  top: 120px;
  display: flex;

  @media (max-width: 767px) {
    position: static;

    margin-top: 60px;
    margin-bottom: 20px;
  }
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

  @media (max-width: 767px) {
    width: 120px;
    height: 35px;

    font-size: 13px;
    line-height: 16px;
  }
`

const Concept3DImageContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;

  transition: opacity 0.5s ease;

  canvas {
    image-rendering: -webkit-optimize-contrast;
    transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-perspective: 1;
  }
`

const ConceptNftImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 800px;
  height: calc(100vh - calc(100vh - 100%));

  transition: opacity 0.5s ease;
  @media (max-width: 767px) {
    display: none;
  }
`

const ConceptNftImage = styled.img`
  position: absolute;
  top: -100px;
  width: 800px;

  @media (max-width: 767px) {
    width: 500px;
    top: 0px;
  }
`

const ConceptMobileNftImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: -40px;
  @media (min-width: 768px) {
    display: none;
  }
`

const Concept = ({
  edges,
  isMobile,
}: {
  edges: CharacterType[]
  isMobile: boolean
}) => {
  const { tabNum, scrollHandler } = useContext(AboutTabContext)
  const [conceptTab, setConceptTap] = useState<string>('3d')
  const [imgIdx, setImgIdx] = useState<number>(1)
  const [_, getImageSrc] = use3DCharacter()
  let videoImageCopy: any[] = []
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    /**
     * videoImages array state에 canvas로 컨트롤할 images 할당하는 함수
     */
    const setCanvasImages = () => {
      const videoImageCount = 100 //인터렉션에 사용되는 images 개수
      for (let i = 1; i <= videoImageCount; i++) {
        const imgElement = new Image()
        imgElement.src = `${getImageSrc(i)}`
        videoImageCopy.push(imgElement)
      }
    }

    setCanvasImages()

    // Canvas에 Image 할당
    if (videoImageCopy[imgIdx]) {
      canvasRef.current
        ?.getContext('2d')
        ?.drawImage(videoImageCopy[imgIdx], 0, 0)
    }
  })

  return (
    <ConceptBlock
      onWheel={e => {
        if (!isMobile) {
          scrollHandler(e)
        }
      }}
      style={{
        visibility: tabNum == 3 ? 'visible' : 'hidden',
        opacity: tabNum == 3 ? 1 : 0,
        zIndex: tabNum != 3 ? 0 : 1,
      }}
    >
      {/* <Concept3DImageContainer>
        <canvas
          ref={canvasRef}
          width="650"
          height="1900"
          style={{
            opacity: conceptTab == '3d' ? 1 : 0,
            transform: `scale(${0.42 + imgIdx * 0.007}) translate(${
              (-120 * imgIdx) / 100 + 80
            }px, ${(1050 * imgIdx) / 100 - 900}px)`,
          }}
        />
      </Concept3DImageContainer> */}

      <ConceptNftImageContainer
        style={{
          visibility: conceptTab == 'nft' ? 'visible' : 'hidden',
          opacity: conceptTab == 'nft' ? 1 : 0,
        }}
      >
        <ConceptNftImage
          style={{ left: -180 }}
          src={edges[7].node.pic.publicURL}
        />
        <ConceptNftImage
          style={{ left: 100 }}
          src={edges[3].node.pic.publicURL}
        />
      </ConceptNftImageContainer>

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
            METAROID
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
            display: conceptTab == '3d' ? 'block' : 'none',
            opacity: conceptTab == '3d' ? 1 : 0,
          }}
        >
          Metagonz was created as an iconic avatar representing the MetaOctagon
          Universe, and we call them Metaroids. It consists of a total of eight
          female DJs from Asian countries, mainly Koreans.
          <br />
          They will always be with you in the real world and metaverse as A.I,
          virtual human DJs, anytime anywhere.
        </ConceptContentWithBorder>
        <ConceptContentWithBorder
          style={{
            display: conceptTab == 'nft' ? 'block' : 'none',
            opacity: conceptTab == 'nft' ? 1 : 0,
          }}
        >
          A total of 8,888 limited edition Metagonz NFTs are released based on a
          total of 8 characters. It proves that it is a collectible item with
          unique digital art and is a member of the MetaOctagon community, which
          plays a pivotal role in the establishment and expansion of the
          MetaOctagon Universe.
        </ConceptContentWithBorder>

        <ConceptMobileNftImageContainer
          style={{
            visibility: conceptTab == 'nft' ? 'visible' : 'hidden',
            opacity: conceptTab == 'nft' ? 1 : 0,
          }}
        >
          <ConceptNftImage
            style={{ left: -150 }}
            src={edges[7].node.pic.publicURL}
          />
          <ConceptNftImage
            style={{ right: -130 }}
            src={edges[3].node.pic.publicURL}
          />
        </ConceptMobileNftImageContainer>
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
