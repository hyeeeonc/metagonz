import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
  MoreContentContainer,
  MoreContentContent,
  MoreContentTitle,
  MoredBlock,
  MoreSpacer,
} from './moreSubPageLayout'

const EcoSystemUl = styled.ul`
  list-style: disc;
  margin-left: 15px;

  line-height: 20px;

  margin-bottom: 40px;
`

const EcoSystemTokenContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  padding: 15px;
  gap: 20px;

  width: 730px;
  height: 66px;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 5px;

  margin-bottom: 10px;

  @media (max-width: 767px) {
    width: 350px;
    height: 158px;
  }
`

const EcoSystemTokenTitle = styled.div`
  width: 150px;
  height: 19px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;

  color: #ffffff;
`

const EcoSystemTokenBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  width: 530px;
  height: 36px;

  @media (max-width: 767px) {
    flex-direction: column;
    width: 170px;
    height: 128px;
  }
`

const EcoSystemTokenBox = styled.div`
  width: 170px;
  height: 36px;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 3px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 36px;
  text-align: center;

  color: #ffffff;
`

const EcoSystem = ({ tabNum }: { tabNum: number }) => {
  return (
    <MoredBlock
      style={{
        visibility: tabNum == 2 ? 'visible' : 'hidden',
        opacity: tabNum == 2 ? 1 : 0,
        zIndex: tabNum != 2 ? 0 : 1,
      }}
    >
      <MoreContentContainer>
        <MoreContentTitle
          style={{
            marginBottom: '20px',
          }}
        >
          MOTG&nbsp;UNIVERS
        </MoreContentTitle>
        <MoreContentContent>
          <EcoSystemUl>
            <li>MetaOctagon : Metaverse Project.</li>
            <li>
              Metagonz : Virtual Human DJ , Metaverse 3D Avatar, NFT Project.
            </li>
            <li>
              Metaplayer X : Metagonz Based Social Networking Mobile DApp
              Project.
            </li>
            <li>
              MOTG Token : The currency of the MOTG(MetaOctagon) Universe.
            </li>
          </EcoSystemUl>
        </MoreContentContent>
        <MoreContentTitle
          style={{
            marginBottom: '25px',
          }}
        >
          MOTG&nbsp;Token
        </MoreContentTitle>
        <EcoSystemTokenContainer>
          <EcoSystemTokenTitle>Metaplayer X</EcoSystemTokenTitle>
          <EcoSystemTokenBoxContainer>
            <EcoSystemTokenBox>Item Purchase</EcoSystemTokenBox>
            <EcoSystemTokenBox>Content Creation</EcoSystemTokenBox>
            <EcoSystemTokenBox>SNS Activity Income</EcoSystemTokenBox>
          </EcoSystemTokenBoxContainer>
        </EcoSystemTokenContainer>

        <EcoSystemTokenContainer>
          <EcoSystemTokenTitle>MetaOctagon</EcoSystemTokenTitle>
          <EcoSystemTokenBoxContainer>
            <EcoSystemTokenBox>User Activity</EcoSystemTokenBox>
            <EcoSystemTokenBox>Role Play</EcoSystemTokenBox>
            <EcoSystemTokenBox>Iffline Festival</EcoSystemTokenBox>
          </EcoSystemTokenBoxContainer>
        </EcoSystemTokenContainer>

        <EcoSystemTokenContainer>
          <EcoSystemTokenTitle>MetaGonz</EcoSystemTokenTitle>
          <EcoSystemTokenBoxContainer>
            <EcoSystemTokenBox>NFT Purchase</EcoSystemTokenBox>
            <EcoSystemTokenBox>Customizing</EcoSystemTokenBox>
            <EcoSystemTokenBox>3D Avatar Purchase</EcoSystemTokenBox>
          </EcoSystemTokenBoxContainer>
        </EcoSystemTokenContainer>
        <MoreSpacer />
      </MoreContentContainer>
    </MoredBlock>
  )
}

export default EcoSystem
