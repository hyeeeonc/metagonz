import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const CommunityBlock = styled.div`
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
    box-sizing: border-box;

    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`

const CommunityNavContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 311px;

  width: 182px;
  height: 16px;

  display: flex;
  justify-content: space-between;

  @media (max-height: 859px) {
    top: 160px;
  }

  @media (max-width: 767px) {
    position: static;
    margin-top: 45px;
    margin-left: 20px;
    box-shadow: none;
    background-color: none;
    padding: 0;
  }
`

const CommunityNavItems = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;

  cursor: pointer;

  transition: opacity 0.5s ease;
`

const CommunityContentContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 377px;

  transition: opacity 0.5s ease, visibility 0.5s ease;

  @media (max-height: 859px) {
    top: 210px;
  }

  @media (max-width: 767px) {
    // position: static;
    // margin-top: 45px;
    // margin-left: 20px;
    left: 20px;
    top: 106px;

    width: calc(100vw - 40px);
    box-shadow: none;
    background-color: none;
  }
`

const CommunityContentTitle = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-transform: uppercase;

  color: #ffffff;

  margin-bottom: 15px;

  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 19px;
  }
`

const CommunityContentContent = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;

  color: #ffffff;

  margin-bottom: 40px;
`

const CommunityDiscordButton = styled.a`
  display: flex;
  align-items: center;

  padding: 10px 20px;
  gap: 15px;
  box-sizing: border-box;

  width: 165.99px;
  height: 36px;

  margin-top: 40px;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 5px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: #ffffff;

  cursor: pointer;

  text-decoration: none;
`

const CommunitySpacer = styled.div`
  min-width: 100vw;
  min-height: 0;

  @media (max-width: 767px) {
    @media (max-width: 900px) {
      min-height: 250px;
    }
  }
`

const CommunitySubPage = ({ tabNum }: { tabNum: number }) => {
  const [communityTabNum, setCommunityTabNum] = useState<number>(1)
  return (
    <CommunityBlock
      style={{
        visibility: tabNum == 1 ? 'visible' : 'hidden',
        opacity: tabNum == 1 ? 1 : 0,
        zIndex: tabNum != 1 ? 0 : 1,
      }}
    >
      <CommunityNavContainer>
        <CommunityNavItems
          style={{
            opacity: communityTabNum == 1 ? 1 : 0.5,
          }}
          onClick={() => {
            setCommunityTabNum(1)
          }}
        >
          we.
        </CommunityNavItems>
        <CommunityNavItems
          style={{
            opacity: communityTabNum == 2 ? 1 : 0.5,
          }}
          onClick={() => {
            setCommunityTabNum(2)
          }}
        >
          vision
        </CommunityNavItems>
        <CommunityNavItems
          style={{
            opacity: communityTabNum == 3 ? 1 : 0.5,
          }}
          onClick={() => {
            setCommunityTabNum(3)
          }}
        >
          value
        </CommunityNavItems>
      </CommunityNavContainer>

      {/* we */}
      <CommunityContentContainer
        style={{
          visibility: communityTabNum == 1 ? 'visible' : 'hidden',
          opacity: communityTabNum == 1 ? 1 : 0,
          zIndex: communityTabNum != 1 ? 0 : 1,
        }}
      >
        <CommunityContentTitle>WE REMEMBER,</CommunityContentTitle>
        <CommunityContentContent>
          Every night’s stunning energy of the club Octagon crowd that was with
          you.
        </CommunityContentContent>

        <CommunityContentTitle>WE DREAM,</CommunityContentTitle>
        <CommunityContentContent>
          Gathering back at the MetaOctagon to recreate the mind-blowing
          excitement beyond imagination.
        </CommunityContentContent>

        <CommunityContentTitle>
          ANYWHERE ANYTIME,
          <br />
          IN THE HIGH ENERGY CULTURE,
          <br />
          WE ARE ONE.
        </CommunityContentTitle>
        <CommunityContentContent>
          WELCOME TO THE NEW WORLD,
          <br />
          This is the MetaOctagon Universe.
        </CommunityContentContent>
        <CommunitySpacer> </CommunitySpacer>
      </CommunityContentContainer>
      {/* /we */}

      {/* vision */}
      <CommunityContentContainer
        style={{
          visibility: communityTabNum == 2 ? 'visible' : 'hidden',
          opacity: communityTabNum == 2 ? 1 : 0,
          zIndex: communityTabNum != 2 ? 0 : 1,
        }}
      >
        <CommunityContentContent
          style={{
            fontSize: '15px',
            lineHeight: '19px',
          }}
        >
          Metagonz is a community group to create a decentralized digital
          entertainment life paradise
          <br />
          that was only dreamed of in your imagination.
          <br />
          <br />
          Our vision is to build and expand the MetaOctagon Universe and
          <br />
          the Metagonz community in the Web3-based Metaverse world.
          <br />
          <br />
          It is to create a sustainable system that beautifully owns and
          <br />
          distributes values according to creation.
        </CommunityContentContent>
        <CommunitySpacer> </CommunitySpacer>
      </CommunityContentContainer>
      {/* /visiton */}

      {/* value */}
      <CommunityContentContainer
        style={{
          visibility: communityTabNum == 3 ? 'visible' : 'hidden',
          opacity: communityTabNum == 3 ? 1 : 0,
          zIndex: communityTabNum != 3 ? 0 : 1,
        }}
      >
        <CommunityContentContent
          style={{
            fontSize: '15px',
            lineHeight: '19px',
          }}
        >
          It all starts in the community. We will exert a positive influence on
          our mission,
          <br />
          announce our vision and existence toward a larger and wider world, not
          just our own small party, and invite and visit and join new
          colleagues.
          <br />
          <br />
          It takes a lot of process for the de-central paradise to be built. We
          will manage the community and
          <br />
          implement the platform so that all members of the Metagonz party can
          grow together.
        </CommunityContentContent>
        <CommunityContentTitle>
          BE A PART OF US,
          <br />
          WE ARE METAGONZ.
          <br />
          <br />
          JOIN OUR PARTY.
        </CommunityContentTitle>
        <CommunityDiscordButton
          href="https://discord.gg/metaoctagon"
          target="_blank"
        >
          <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7977 1.35042C17.7977 1.35042 17.7829 1.32973 17.7711 1.32677C16.4319 0.711841 14.998 0.259513 13.4962 -0.000649321C13.4696 -0.00656211 13.4429 0.00821986 13.4282 0.031871C13.2449 0.360031 13.0379 0.788708 12.896 1.12574C11.2818 0.883312 9.6765 0.883312 8.09779 1.12574C7.95588 0.782795 7.74302 0.360031 7.55677 0.031871C7.54198 0.00821986 7.51538 -0.00360571 7.48877 -0.000649321C5.98988 0.256557 4.55603 0.708885 3.21678 1.32381C3.20495 1.32973 3.19609 1.3386 3.18722 1.34747C0.467335 5.41546 -0.277676 9.37999 0.0859599 13.2972C0.0859599 13.3149 0.0977855 13.3356 0.112567 13.3475C1.9071 14.666 3.64841 15.4672 5.35425 15.9964C5.38086 16.0053 5.41042 15.9964 5.42816 15.9727C5.83319 15.4229 6.19091 14.8404 6.50133 14.2285C6.51907 14.193 6.50133 14.1516 6.46586 14.1368C5.89527 13.921 5.3513 13.6549 4.82801 13.3563C4.78663 13.3327 4.78367 13.2736 4.8221 13.244C4.93149 13.1612 5.04087 13.0755 5.14731 12.9897C5.16504 12.975 5.19165 12.972 5.2153 12.9809C8.65063 14.5507 12.3698 14.5507 15.7637 12.9809C15.7874 12.969 15.814 12.972 15.8317 12.9897C15.9381 13.0755 16.0475 13.1642 16.1569 13.244C16.1953 13.2736 16.1924 13.3327 16.151 13.3563C15.6277 13.6608 15.0837 13.921 14.5132 14.1368C14.4747 14.1516 14.4599 14.193 14.4777 14.2314C14.794 14.8434 15.1517 15.4229 15.5479 15.9757C15.5656 15.9994 15.5952 16.0082 15.6218 15.9994C17.3365 15.4702 19.0749 14.669 20.8724 13.3504C20.8871 13.3386 20.899 13.3209 20.899 13.3031C21.3365 8.77393 20.1658 4.84192 17.7948 1.35634L17.7977 1.35042ZM7.01575 10.9114C5.98101 10.9114 5.12957 9.9624 5.12957 8.79462C5.12957 7.62685 5.96623 6.67784 7.01575 6.67784C8.06527 6.67784 8.91966 7.63571 8.90193 8.79462C8.90193 9.95944 8.06527 10.9114 7.01575 10.9114ZM13.9899 10.9114C12.9551 10.9114 12.1037 9.9624 12.1037 8.79462C12.1037 7.62685 12.9404 6.67784 13.9899 6.67784C15.0394 6.67784 15.8938 7.63571 15.8761 8.79462C15.8761 9.95944 15.0483 10.9114 13.9899 10.9114Z"
              fill="white"
            />
          </svg>
          <>Go to Discord</>
        </CommunityDiscordButton>
        <CommunitySpacer> </CommunitySpacer>
      </CommunityContentContainer>
      {/* /value */}
    </CommunityBlock>
  )
}

export default CommunitySubPage
