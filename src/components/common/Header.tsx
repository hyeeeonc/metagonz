import React, { FunctionComponent, useState } from 'react'

import styled from '@emotion/styled'

import { Link } from 'gatsby'
import Menu from './HeaderComponent/Menu'

const HeaderBlock = styled.header`
  width: 100%;
  height: 6rem;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 10;
`

const HeaderLogoContainer = styled.div`
  margin-left: 30px;
  cursor: pointer;
`

const HeaderButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 378px;
  height: 42px;
`

const HeaderNavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 282px;
`

const HeaderNavItemsLightMode = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 86px;
  height: 42px;
  box-sizing: border-box;

  text-decoration: none;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(5px);
  border-radius: 5px;

  color: #ffffff;

  cursor: pointer;
`

const HeaderNavItemsDarkMode = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 86px;
  height: 42px;
  box-sizing: border-box;

  text-decoration: none;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;

  background: rgba(238, 238, 238, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 5px;

  color: black;

  cursor: pointer;
`

const HeaderNavSNSButton = styled.div`
  cursor: pointer;
`

const HeaderMenuButton = styled.div`
  cursor: pointer;
`

//const HeaderNavItems

type HeaderType = {
  headerDarkMode: boolean
}

const Header: FunctionComponent<HeaderType> = function ({ headerDarkMode }) {
  const [menuOpenState, setMenuOpenState] = useState<number>(0)

  // LightMode / DarkMode에 따라서 NavBar 아이템 color 변경
  const HeaderNavItems = headerDarkMode
    ? HeaderNavItemsDarkMode
    : HeaderNavItemsLightMode

  // 메뉴 오픈 상태 정의, 0이면 비활성화. 값은 menu에서 props로 받아서 inline style 정의하는 방식으로 작동.
  const menuOpenHandler = () => {
    if (menuOpenState == 0) {
      setMenuOpenState(1)
    } else {
      setMenuOpenState(0)
    }
  }
  return (
    <HeaderBlock>
      {/* <Menu /> */}
      <HeaderLogoContainer>
        <Link to="/">
          <svg
            width="133"
            height="20"
            viewBox="0 0 133 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_180_165)">
              <path
                d="M15.8806 14.9661V5.03003H11.4241L7.94032 8.51385L4.4565 5.03003H0V14.97H4.4565L7.93645 11.4861L11.4203 14.97H15.8768L15.8806 14.9661ZM2.97229 13.4819V6.51811L6.45611 10.0019L2.97229 13.4858V13.4819ZM12.9122 6.51424V13.4819L9.42841 9.99806L12.9122 6.51424Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M43.3336 14.9661L44.6202 12.7378H50.5532L51.8398 14.9661H54.812L49.0767 5.02612H46.1044L40.3652 14.9661H43.3375H43.3336ZM47.5848 7.60314L49.348 10.6568H45.8215L47.5848 7.60314Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M28.7744 12.5906H20.1598V11.0405H27.5537V8.9595H20.1598V7.40941H28.7744V5.03003H17.1875V14.9661H28.7744V12.5906Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M34.3835 14.9661H37.3558V7.40941H41.665V5.03003H30.0781V7.40941H34.3835V14.9661Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M68.1536 0H64.8209H61.4805V3.33656H64.8209H68.1536H71.494H74.8306V0H71.494H68.1536Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M87.5384 3.33656H90.8788V0H87.5384H84.2057H80.8652V3.33656H84.2057H87.5384Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M58.1445 6.67323V9.98654V10.0098V13.3231V16.6635H61.4811V13.3231V10.0098V9.98654V6.67323V3.33667H58.1445V6.67323Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M64.8209 20.0001H68.1536H71.494V16.6636H68.1536H64.8209H61.4805V20.0001H64.8209Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M74.83 13.3232V10.0099V9.98665V6.67334H71.4934H68.153H64.8203V10.0099H68.153H71.4934V13.3232V16.6637H74.83V13.3232Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M84.2057 16.6633H80.8652V19.9999H84.2057H87.5384H90.8788V16.6633H87.5384H84.2057Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M80.8659 10.0096V9.9863V6.67299V3.33643H77.5293V6.67299V9.9863V10.0096V13.3229V16.6633H80.8659V13.3229V10.0096Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M90.8789 6.67323V9.98654V10.0098V13.3231V16.6635H94.2155V13.3231V10.0098V9.98654V6.67323V3.33667H90.8789V6.67323Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M100.253 3.33656V0H96.916V3.33656V6.67313V9.98644V10.0097V13.323V16.6634V20H100.253V16.6634V13.323V10.0097V9.98644V6.67313H103.589V3.33656H100.253Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M106.926 6.67334H103.59V10.0099H106.926V6.67334Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M110.262 3.33656V6.67313V9.98644V10.0097H106.926V13.3463H110.262V16.6634V20H113.599V16.6634V13.323V10.0097V9.98644V6.67313V3.33656V0H110.262V3.33656Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M126.309 9.98641H122.973V13.323H126.309V10.0097H129.646V6.6731H126.309V9.98641Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M119.637 16.6637H116.301V20.0002H119.637H122.974H126.31H129.647H132.984V16.6637H129.647H126.31H122.974V13.3232H119.637V16.6637Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
              <path
                d="M129.647 0H126.31H122.974H119.637H116.301V3.33656H119.637H122.974H126.31H129.647V6.67312H132.984V3.33656V0H129.647Z"
                fill={headerDarkMode ? 'black' : 'white'}
              />
            </g>
          </svg>
        </Link>
      </HeaderLogoContainer>
      <HeaderButtonContainer>
        <HeaderNavContainer>
          <HeaderNavItems to={`/about`}>minting</HeaderNavItems>

          <HeaderNavItems to={`/characters`}>gallery</HeaderNavItems>

          <HeaderNavItems to={`/scenario`}>My Page</HeaderNavItems>
        </HeaderNavContainer>
        <HeaderNavSNSButton>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.35156 12.6484L12.6484 7.34375"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3272 13.9766L9.11621 16.1875C8.7679 16.5358 8.3544 16.8121 7.89931 17.0006C7.44422 17.1891 6.95646 17.2861 6.46387 17.2861C5.46905 17.2861 4.51497 16.8909 3.81153 16.1875C3.10808 15.4841 2.71289 14.53 2.71289 13.5352C2.71289 12.5403 3.10808 11.5863 3.81153 10.8828L6.02246 8.67188"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.9766 11.3281L16.1875 9.11719C16.8909 8.41375 17.2861 7.45967 17.2861 6.46485C17.2861 5.47003 16.8909 4.51595 16.1875 3.8125C15.4841 3.10906 14.53 2.71387 13.5352 2.71387C12.5403 2.71387 11.5863 3.10906 10.8828 3.8125L8.67188 6.02344"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </HeaderNavSNSButton>
        <HeaderMenuButton>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="4" height="4" fill="white" />
            <rect x="6" width="4" height="4" fill="white" />
            <rect x="12" width="4" height="4" fill="white" />
            <rect y="6" width="4" height="4" fill="white" />
            <rect x="6" y="6" width="4" height="4" fill="white" />
            <rect x="12" y="6" width="4" height="4" fill="white" />
            <rect y="12" width="4" height="4" fill="white" />
            <rect x="6" y="12" width="4" height="4" fill="white" />
            <rect x="12" y="12" width="4" height="4" fill="white" />
          </svg>
        </HeaderMenuButton>
      </HeaderButtonContainer>
    </HeaderBlock>
  )
}

export default Header
