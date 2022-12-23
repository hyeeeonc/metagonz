import React from 'react'
import styled from '@emotion/styled'
import {
  MoreContentContainer,
  MoredBlock,
  MoreSpacer,
} from './moreSubPageLayout'

const WhitePaperContentContainer = styled(MoreContentContainer)``

const WhitePaperButton = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 450px;
  height: 127px;

  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 5px;

  text-decoration: none;

  margin-bottom: 20px;

  cursor: pointer;

  @media (max-width: 767px) {
    width: 100%;
    height: 121px;
  }
`

const WhitePaperButtonTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 350px;
  height: 31px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 31px;
  text-transform: uppercase;

  color: #ffffff;
`

const WhitePaperButtonLink = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;

  color: #ffffff;

  opacity: 0.3;
`

const WhitePaper = ({ tabNum }: { tabNum: number }) => {
  return (
    <MoredBlock
      style={{
        visibility: tabNum == 6 ? 'visible' : 'hidden',
        opacity: tabNum == 6 ? 1 : 0,
        zIndex: tabNum != 6 ? 0 : 1,
      }}
    >
      <WhitePaperContentContainer>
        <WhitePaperButton
          target="_blank"
          href="https://metaoctagon.gitbook.io/metaoctagon/"
        >
          <WhitePaperButtonTitle>
            <svg
              width="32"
              height="21"
              viewBox="0 0 32 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.9991 3.48898V0.5H23.0101L15.9961 7.50804L18.991 10.497L25.9991 3.48898Z"
                fill="white"
              />
              <path
                d="M6 17.5041V20.4991H8.98898L15.997 13.491L13.008 10.4961L6 17.5041Z"
                fill="white"
              />
              <path
                d="M25.9995 0.5V3.48898V17.5051L18.9914 10.497L15.9965 7.50804L8.98844 0.5H0.0214844V20.5H5.99945V17.5051V3.48898L13.0075 10.497L15.9965 13.492L23.0105 20.5H31.9774V0.5H25.9995Z"
                fill="white"
              />
            </svg>
            MOTG&nbsp;UNIVERSE
          </WhitePaperButtonTitle>
        </WhitePaperButton>

        <WhitePaperButton
          target="_blank"
          href="https://notch-tiglon-309.notion.site/Metagonz-Whitepaper-V1-ENG-31dadfc06d114e32abd80de94e8c50a6"
        >
          <WhitePaperButtonTitle>
            <svg
              width="29"
              height="31"
              viewBox="0 0 29 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.07388 5.75968C6.00699 6.51777 6.35703 6.45988 8.10916 6.34299L24.6277 5.35114C24.978 5.35114 24.6867 5.00158 24.5698 4.94356L21.8264 2.96033C21.3008 2.55227 20.6004 2.08487 19.2582 2.20175L3.26337 3.36839C2.68005 3.42628 2.56353 3.71794 2.79585 3.9517L5.07388 5.75968ZM6.06561 9.60938V26.9898C6.06561 27.9238 6.53241 28.2733 7.58301 28.2155L25.7369 27.165C26.788 27.1072 26.9051 26.4648 26.9051 25.706V8.44214C26.9051 7.68453 26.6137 7.27611 25.9703 7.33437L6.99933 8.44214C6.29925 8.50101 6.06561 8.85117 6.06561 9.60926V9.60938ZM23.9871 10.5417C24.1035 11.0671 23.9871 11.592 23.4606 11.6511L22.586 11.8254V24.6567C21.8265 25.0649 21.1262 25.2983 20.5427 25.2983C19.6083 25.2983 19.3743 25.0064 18.6745 24.1322L12.953 15.1501V23.8404L14.7635 24.2489C14.7635 24.2489 14.7635 25.2983 13.3028 25.2983L9.27604 25.5319C9.15903 25.2983 9.27603 24.7156 9.68445 24.5988L10.7353 24.3075V12.8173L9.27628 12.7004C9.15928 12.175 9.45069 11.4174 10.2685 11.3585L14.5884 11.0673L20.5427 20.1663V12.1171L19.0245 11.9429C18.908 11.3006 19.3743 10.8342 19.9581 10.7763L23.9871 10.5418V10.5417ZM1.92039 1.79369L18.5577 0.568433C20.6008 0.393172 21.1265 0.510536 22.4107 1.44341L27.7216 5.17612C28.5979 5.81806 28.8901 5.99271 28.8901 6.69243V27.165C28.8901 28.4481 28.4226 29.2069 26.7885 29.323L7.46758 30.4898C6.24087 30.5483 5.65707 30.3735 5.01465 29.5564L1.10355 24.4821C0.402746 23.548 0.111328 22.8492 0.111328 22.0317V3.83434C0.111328 2.78507 0.578851 1.90985 1.92039 1.79369Z"
                fill="white"
              />
            </svg>
            METAGONZ&nbsp;Notion
          </WhitePaperButtonTitle>
        </WhitePaperButton>
        <MoreSpacer />
      </WhitePaperContentContainer>
    </MoredBlock>
  )
}

export default WhitePaper
