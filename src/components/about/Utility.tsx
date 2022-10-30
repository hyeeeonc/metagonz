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
`

const UtilityContentContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 311px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 418px;
`

const UtilityContentItems = styled.div``

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

const ConceptNftImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 800px;
  height: calc(100vh - calc(100vh - 100%));

  transition: 0.5s ease;
`

const ConceptNftImage = styled.img`
  position: absolute;
  top: -70px;
  left: -20px;

  width: 800px;
`

const Utility = ({ edges }: { edges: CharacterType[] }) => {
  const { tabNum, scrollHandler } = useContext(AboutTabContext)

  return (
    <UtilityBlock
      onWheel={scrollHandler}
      style={{
        visibility: tabNum == 4 ? 'visible' : 'hidden',
        opacity: tabNum == 4 ? 1 : 0,
        zIndex: tabNum != 4 ? 0 : 1,
      }}
    >
      <ConceptNftImageContainer>
        <ConceptNftImage
          style={{ left: -340 }}
          src={edges[4].node.pic.publicURL}
        />
        <ConceptNftImage
          style={{ left: -90 }}
          src={edges[5].node.pic.publicURL}
        />
        <ConceptNftImage
          src={edges[6].node.pic.publicURL}
          style={{ left: 220 }}
        />
      </ConceptNftImageContainer>
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
    </UtilityBlock>
  )
}

export default Utility
