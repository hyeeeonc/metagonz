import React, { FunctionComponent, useContext, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { AboutTabContext } from '../../contexts/AboutTabProvider'
import { CharacterType } from 'pages/about'

const UtilityBlock = styled.main`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;

  transition: opacity 0.5s ease, visibility 0.5s ease;

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

const UtilityContentContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 311px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 418px;

  transition: opacity 0.3s ease;
  @media (max-width: 1550px) {
    box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.6);
    padding: 20px;
  }

  @media (max-height: 779px) {
    top: 160px;
  }

  @media (max-width: 767px) {
    position: static;
    width: calc(100vw - 40px);
    height: auto;
    margin-left: 20px;
    box-shadow: none;
    background-color: none;
    padding: 0;
  }
`

const UtilityContentItems = styled.div`
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`

const UtilityContentItemTitle = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
`

const UtilityContentItemContent = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
`

const UtilityNftImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 800px;
  height: calc(100vh - calc(100vh - 100%));

  transition: 0.5s ease;

  @media (max-width: 767px) {
    display: none;
  }
`

const UtilityNftImage = styled.img`
  position: absolute;

  width: 800px;

  @media (max-width: 767px) {
    width: 380px;
  }
`

const UtilityMobileImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: -50px;
  @media (min-width: 768px) {
    display: none;
  }
`

const Utility = ({
  edges,
  isMobile,
}: {
  edges: CharacterType[]
  isMobile: boolean
}) => {
  const { tabNum, scrollHandler } = useContext(AboutTabContext)

  return (
    <UtilityBlock
      onWheel={e => {
        if (!isMobile) scrollHandler(e)
      }}
      style={{
        visibility: tabNum == 4 ? 'visible' : 'hidden',
        opacity: tabNum == 4 ? 1 : 0,
        zIndex: tabNum != 4 ? 0 : 1,
      }}
    >
      <UtilityNftImageContainer>
        <UtilityNftImage
          style={{ left: -320 }}
          src={edges[4].node.pic.publicURL}
        />
        <UtilityNftImage
          style={{ left: -115 }}
          src={edges[5].node.pic.publicURL}
        />
        <UtilityNftImage
          src={edges[6].node.pic.publicURL}
          style={{ left: 160 }}
        />
      </UtilityNftImageContainer>
      <UtilityContentContainer>
        <UtilityContentItems>
          <UtilityContentItemTitle>Club Free Pass</UtilityContentItemTitle>
          <UtilityContentItemContent>
            Maintaining at least 8 partnerships with famous dance clubs.
          </UtilityContentItemContent>
        </UtilityContentItems>

        <UtilityContentItems>
          <UtilityContentItemTitle>
            Music Festival Ticket Airdrop & Discount Pass
          </UtilityContentItemTitle>
          <UtilityContentItemContent>
            Offering ticket airdrops or discounted tickets to the music
            festivals.
          </UtilityContentItemContent>
        </UtilityContentItems>

        <UtilityContentItems>
          <UtilityContentItemTitle>
            Metagonz Party VIP Invitation
          </UtilityContentItemTitle>
          <UtilityContentItemContent>
            You can receive invitations to Metagonz parties as VIP.
          </UtilityContentItemContent>
        </UtilityContentItems>

        <UtilityContentItems>
          <UtilityContentItemTitle>
            MTGZ Governance Suffrage
          </UtilityContentItemTitle>
          <UtilityContentItemContent>
            You can participate in Metagonz governance and exercise your rights.
          </UtilityContentItemContent>
        </UtilityContentItems>

        <UtilityContentItems>
          <UtilityContentItemTitle>
            MetaOctagon Universe’s Limited 3D Avatar Lucky Draw Ticket
          </UtilityContentItemTitle>
          <UtilityContentItemContent>
            Chance to get a limited edition 3D avatar with lucky draw
          </UtilityContentItemContent>
        </UtilityContentItems>

        <UtilityContentItems>
          <UtilityContentItemTitle>
            Character Customize NFT Airdrop Event Ticket
          </UtilityContentItemTitle>
          <UtilityContentItemContent>
            You can participate in NFT airdrop, an item that can customize your
            character
          </UtilityContentItemContent>
        </UtilityContentItems>

        <UtilityContentItems>
          <UtilityContentItemTitle>
            Customize NFT Inventory System
          </UtilityContentItemTitle>
          <UtilityContentItemContent>
            Providing an inventory system that can increase value by customizing
            your NFT.
          </UtilityContentItemContent>
        </UtilityContentItems>
      </UtilityContentContainer>
      <UtilityMobileImageContainer>
        <UtilityNftImage
          style={{ left: -60 }}
          src={edges[4].node.pic.publicURL}
        />
        <UtilityNftImage
          style={{ left: 'calc(50vw - 190px)' }}
          src={edges[5].node.pic.publicURL}
        />
        <UtilityNftImage
          src={edges[6].node.pic.publicURL}
          style={{ right: -100 }}
        />
      </UtilityMobileImageContainer>
    </UtilityBlock>
  )
}

export default Utility
