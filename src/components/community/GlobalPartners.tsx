import styled from '@emotion/styled'
import { JsonDataContext } from '../../contexts/JsonDataProvider'
import { useCallback, useContext } from 'react'
import { GlobalMapSvg } from './GlobalMapSvg'
import { graphql, useStaticQuery } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

const GlobalPartnersBlock = styled.div`
  width: 100%;
  height: 100%;

  transition: opacity 0.5s ease, visibility 0.5s ease;
`

const GlobalPartnersTextContainer = styled.div`
  position: absolute;
  top: 310px;
  left: 30px;

  max-width: 518px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;

  color: #ffffff;

  @media (max-height: 859px) {
    top: 160px;
  }

  @media (max-width: 767px) {
    top: 253px;
  }
`

const GlobalPartnersMapContainer = styled.div`
  position: absolute;
  top: 370px;
  left: 0px;
  width: 100vw;
  height: calc(100vh - 380px);

  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #1c0044;
    border-radius: 30px;
  }

  @media (max-height: 859px) {
    height: calc(100vh - 220px);
    top: 220px;
  }

  @media (max-width: 767px) {
    top: 350px;
    svg {
      width: 1200px;
      height: auto;
    }
  }
`

const GlobalPartnersMapFlags = styled.img`
  position: absolute;

  width: 50px;
  height: 80px;

  transform: translate(-50%, -100%);

  transition: transform 0.2s ease;

  :hover {
    transform: translate(-50%, -100%) scale(1.2);
  }

  @media (max-width: 767px) {
    width: 37.5px;
    height: 60px;
  }
`

const GlobalPartnersSNSCountContainer = styled.div`
  position: absolute;
  top: 399px;
  left: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;

  width: 140px;
  height: 105px;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 5px;

  @media (max-height: 859px) {
    top: 230px;
  }

  @media (max-width: 767px) {
    top: 320px;
    width: 105px;
    height: 78.75px;
  }
`

const GlobalPartnersSNSCountItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 80px;
  height: 40px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;

  color: rgba(255, 255, 255, 0.6);

  gap: 10px;

  @media (max-width: 767px) {
    width: 70px;
    height: 30px;
  }
`

type ImgType = {
  japan: {
    publicURL: string
  }
  korea: {
    publicURL: string
  }
  russia: {
    publicURL: string
  }
  china: {
    publicURL: string
  }
  england: {
    publicURL: string
  }
  us: {
    publicURL: string
  }
}

const GlobalPartners = ({ tabNum }: { tabNum: number }) => {
  const flags: ImgType = useStaticQuery(graphql`
    query {
      japan: file(relativePath: { eq: "images/flags/japan.png" }) {
        publicURL
      }
      korea: file(relativePath: { eq: "images/flags/korea.png" }) {
        publicURL
      }
      russia: file(relativePath: { eq: "images/flags/russia.png" }) {
        publicURL
      }
      china: file(relativePath: { eq: "images/flags/china.png" }) {
        publicURL
      }
      england: file(relativePath: { eq: "images/flags/england.png" }) {
        publicURL
      }
      us: file(relativePath: { eq: "images/flags/us.png" }) {
        publicURL
      }
    }
  `)
  const { discord, twitter } = useContext(JsonDataContext)
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })

  const convertNumber = useCallback((num: number): string => {
    if (num / 1000000 >= 1) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num / 1000 >= 1) {
      return `${(num / 1000).toFixed(1)}K`
    } else {
      return num.toString()
    }
  }, [])
  return (
    <GlobalPartnersBlock
      style={{
        visibility: tabNum == 2 ? 'visible' : 'hidden',
        opacity: tabNum == 2 ? 1 : 0,
        zIndex: tabNum != 2 ? 0 : 1,
      }}
    >
      <GlobalPartnersMapContainer>
        <GlobalMapSvg />
        <GlobalPartnersMapFlags
          src={flags.us.publicURL}
          style={{
            top: isPc ? '250px' : '187px',
            left: isPc ? '320px' : '240px',
          }}
        />
        <GlobalPartnersMapFlags
          src={flags.china.publicURL}
          style={{
            top: isPc ? '220px' : '165px',
            left: isPc ? '1270px' : '952px',
          }}
        />
        <GlobalPartnersMapFlags
          src={flags.england.publicURL}
          style={{
            top: isPc ? '110px' : '82px',
            left: isPc ? '750px' : '562px',
          }}
        />
        <GlobalPartnersMapFlags
          src={flags.korea.publicURL}
          style={{
            top: isPc ? '240px' : '180px',
            left: isPc ? '1350px' : '1012.5px',
          }}
        />
        <GlobalPartnersMapFlags
          src={flags.japan.publicURL}
          style={{
            top: isPc ? '250px' : '187.5px',
            left: isPc ? '1420px' : '1065px',
          }}
        />
        <GlobalPartnersMapFlags
          src={flags.russia.publicURL}
          style={{
            top: isPc ? '120px' : '90px',
            left: isPc ? '1000px' : '750px',
          }}
        />
      </GlobalPartnersMapContainer>
      <GlobalPartnersTextContainer>
        A Global Metagonz community making together to build a decentralized
        digital entertainment paradise of the MetaOctagon.
      </GlobalPartnersTextContainer>
      <GlobalPartnersSNSCountContainer>
        <GlobalPartnersSNSCountItems>
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6278 1.35115C18.6278 1.35115 18.613 1.33046 18.6012 1.3275C17.2619 0.712574 15.8281 0.260246 14.3262 8.31009e-05C14.2996 -0.00582969 14.273 0.00895228 14.2582 0.0326034C14.0749 0.360763 13.868 0.78944 13.7261 1.12647C12.1119 0.884045 10.5066 0.884045 8.92786 1.12647C8.78596 0.783527 8.5731 0.360763 8.38684 0.0326034C8.37206 0.00895228 8.34545 -0.00287329 8.31885 8.31009e-05C6.81996 0.257289 5.3861 0.709618 4.04686 1.32455C4.03503 1.33046 4.02616 1.33933 4.01729 1.3482C1.29741 5.4162 0.552402 9.38072 0.916038 13.2979C0.916038 13.3157 0.927864 13.3364 0.942646 13.3482C2.73718 14.6668 4.47849 15.4679 6.18433 15.9971C6.21094 16.006 6.2405 15.9971 6.25824 15.9735C6.66327 15.4236 7.02099 14.8412 7.33141 14.2292C7.34915 14.1937 7.33141 14.1523 7.29594 14.1376C6.72535 13.9217 6.18137 13.6557 5.65809 13.3571C5.6167 13.3334 5.61375 13.2743 5.65218 13.2447C5.76157 13.1619 5.87095 13.0762 5.97738 12.9905C5.99512 12.9757 6.02173 12.9727 6.04538 12.9816C9.48071 14.5515 13.1999 14.5515 16.5938 12.9816C16.6174 12.9698 16.6441 12.9727 16.6618 12.9905C16.7682 13.0762 16.8776 13.1649 16.987 13.2447C17.0254 13.2743 17.0225 13.3334 16.9811 13.3571C16.4578 13.6616 15.9138 13.9217 15.3432 14.1376C15.3048 14.1523 15.29 14.1937 15.3078 14.2322C15.6241 14.8441 15.9818 15.4236 16.378 15.9764C16.3957 16.0001 16.4253 16.009 16.4519 16.0001C18.1666 15.4709 19.905 14.6697 21.7024 13.3512C21.7172 13.3393 21.729 13.3216 21.729 13.3039C22.1666 8.77466 20.9959 4.84266 18.6248 1.35707L18.6278 1.35115ZM7.84582 10.9121C6.81109 10.9121 5.95965 9.96313 5.95965 8.79535C5.95965 7.62758 6.7963 6.67858 7.84582 6.67858C8.89534 6.67858 9.74974 7.63645 9.732 8.79535C9.732 9.96017 8.89534 10.9121 7.84582 10.9121ZM14.82 10.9121C13.7852 10.9121 12.9338 9.96313 12.9338 8.79535C12.9338 7.62758 13.7704 6.67858 14.82 6.67858C15.8695 6.67858 16.7239 7.63645 16.7061 8.79535C16.7061 9.96017 15.8783 10.9121 14.82 10.9121Z"
              fill="white"
            />
          </svg>
          {convertNumber(discord)}
        </GlobalPartnersSNSCountItems>
        <GlobalPartnersSNSCountItems>
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8294 3.98516C17.8414 4.15876 17.8414 4.33235 17.8414 4.50754C17.8414 9.84567 13.7776 16.0022 6.34679 16.0022V15.999C4.1517 16.0022 2.0022 15.3734 0.154297 14.1879C0.473481 14.2263 0.794265 14.2455 1.11585 14.2463C2.93496 14.2479 4.70207 13.6375 6.1332 12.5135C4.40448 12.4807 2.88856 11.3536 2.35899 9.70808C2.96456 9.82487 3.58853 9.80087 4.1829 9.63848C2.29819 9.2577 0.942258 7.60178 0.942258 5.67868V5.62748C1.50383 5.94027 2.1326 6.11386 2.77577 6.13306C1.00065 4.94672 0.453482 2.58523 1.52543 0.738926C3.57653 3.2628 6.60277 4.79712 9.85141 4.95952C9.52583 3.55639 9.97061 2.08606 11.0202 1.09971C12.6473 -0.429815 15.2063 -0.351419 16.7359 1.2749C17.6406 1.09651 18.5078 0.764525 19.3013 0.294149C18.9998 1.2293 18.3686 2.02366 17.5254 2.52844C18.3262 2.43404 19.1085 2.21965 19.8453 1.89247C19.3029 2.70523 18.6198 3.41319 17.8294 3.98516Z"
              fill="white"
            />
          </svg>
          {convertNumber(twitter)}
        </GlobalPartnersSNSCountItems>
      </GlobalPartnersSNSCountContainer>
    </GlobalPartnersBlock>
  )
}

export default GlobalPartners
