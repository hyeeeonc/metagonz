import React, { FunctionComponent, useContext, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { AboutTabContext } from '../../contexts/AboutTabProvider'
import { CharacterType } from 'pages/about'

const StoryBlock = styled.main`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;

  transition: opacity 0.5s ease, visibility 0.5s ease;

  @media (max-width: 767px) {
    top: 268px;
    left: 0px;

    width: calc(100vw);
    height: calc(100vh - calc(100vh - 100%) - 268px);

    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`

const StoryContentContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 311px;

  transition: 0.3s ease;
  @media (max-width: 1690px) {
    box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.6);
    padding: 20px;
  }

  @media (max-height: 779px) {
    top: 180px;
  }

  @media (max-width: 767px) {
    position: static;
    width: calc(100vw - 40px);
    margin-left: 20px;
    box-shadow: none;
    background-color: none;
    padding: 0;
  }
`

const StoryContentNoBorder = styled.div`
  width: 408px;
  height: 76px;

  margin-bottom: 50px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;

  color: #000000;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    margin-bottom: 60px;
  }
`
const StoryContentWithBorder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 655px;
  height: 223px;

  border-left: 1px solid black;
  border-right: 1px solid black;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;

    border: none;
  }
`

const StoryContentWithBorderItems = styled.div`
  width: 593px;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;

  color: #000000;

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 30px;
  }
`

const StoryImageContainer = styled.div`
  position: absolute;

  top: 0;
  right: 0px;
  width: 1000px;
  height: calc(100vh - calc(100vh - 100%));

  @media (max-width: 767px) {
    display: none;
  }
`

const StoryMobileImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: -50px;
  @media (min-width: 768px) {
    display: none;
  }
`

const Story = ({
  edges,
  isMobile,
}: {
  edges: CharacterType[]
  isMobile: boolean
}) => {
  const { tabNum, scrollHandler } = useContext(AboutTabContext)

  return (
    <StoryBlock
      onWheel={() => {
        if (!isMobile) {
          scrollHandler
        }
      }}
      style={{
        visibility: tabNum == 1 ? 'visible' : 'hidden',
        opacity: tabNum == 1 ? 1 : 0,
        zIndex: tabNum != 1 ? 0 : 1,
      }}
    >
      {/* <StoryImage src={edges[0].node.pic.publicURL} /> */}
      <StoryImageContainer>
        <img
          src={edges[0].node.pic.publicURL}
          style={{
            position: 'absolute',
            left: '-300px',
            top: -120,
            height: 2200,
          }}
        />
        <img
          src={edges[1].node.pic.publicURL}
          style={{
            position: 'absolute',
            left: '100px',
            top: -80,
            height: 2200,
          }}
        />
        <img
          src={edges[2].node.pic.publicURL}
          style={{
            position: 'absolute',
            left: '300px',
            top: -100,
            height: 2200,
          }}
        />
      </StoryImageContainer>
      <StoryContentContainer>
        <StoryContentNoBorder>
          When Metaverse is commercialized in the near future, one of the
          landmarks is called the MetaOctagon Universe.
          <br />
          <br /> At its center is the world famous Metagonz.
        </StoryContentNoBorder>
        <StoryContentWithBorder>
          <StoryContentWithBorderItems
            style={{
              fontWeight: 700,
              fontSize: 20,
              lineHeight: '25px',
              textTransform: 'uppercase',
            }}
          >
            HELLO WORLD,
            <br />
            WE ARE METAGONZ
          </StoryContentWithBorderItems>
          <StoryContentWithBorderItems
            style={{
              fontWeight: 300,
              fontSize: 15,
              lineHeight: '19px',
              letterSpacing: '0.05em',
            }}
          >
            “We love electronic dance music and we’re party lovers.”
            <br />
            “Wherever in the MetaOctagon universe, we will always be with you.”
          </StoryContentWithBorderItems>
          <StoryContentWithBorderItems
            style={{
              fontWeight: 600,
              fontSize: 15,
              lineHeight: '19px',
            }}
          >
            In the virtual world, Our unrealistic dreams and desires will be
            realized by Metagonz. They have no feelings of anxiety and sadness,
            and they exist to convey only pleasant and positive emotions. They
            will exist as virtual influencers in the digital world and in the
            physical real world.
          </StoryContentWithBorderItems>
        </StoryContentWithBorder>
      </StoryContentContainer>
      <StoryMobileImageContainer>
        <img
          src={edges[0].node.pic.publicURL}
          style={{
            position: 'absolute',
            left: '-100px',
            height: 1000,
          }}
        />
        <img
          src={edges[1].node.pic.publicURL}
          style={{
            position: 'absolute',
            left: 'calc(50vw - 150px)',
            height: 1000,
          }}
        />
        <img
          src={edges[2].node.pic.publicURL}
          style={{
            position: 'absolute',
            right: '-50px',
            height: 1000,
          }}
        />
      </StoryMobileImageContainer>
    </StoryBlock>
  )
}

export default Story
