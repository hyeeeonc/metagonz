import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import styled from '@emotion/styled'

import { Link } from 'gatsby'
import Menu from './HeaderComponent/Menu'
import { DarkmodeContext } from '../../contexts/DarkmodeProvider'
import SNSMenu from './HeaderComponent/SNSMenu'
import MobileNav from './HeaderComponent/MobileNav'

const HeaderBlock = styled.header`
  width: 100%;
  height: 6rem;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 2;
`

const HeaderLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 132.98px;
  height: 40px;
  margin-left: 30px;
  margin-top: -12px;
  cursor: pointer;

  z-index: 2;
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

  @media (max-width: 767px) {
    width: 106px;
  }
`

const HeaderNavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 282px;

  @media (max-width: 767px) {
    display: none;
  }
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

  transition: 0.2s ease;

  :hover {
    color: #6200ee;
  }
`

const HeaderMobileNavButton = styled.nav`
  cursor: pointer;
`

const HeaderNavSNSButton = styled.div`
  cursor: pointer;

  @media (max-width: 767px) {
    path {
      stroke-width: 1.2;
    }
  }
`

const HeaderMenuButton = styled.div`
  cursor: pointer;

  @media (max-width: 767px) {
    rect {
      width: 2px;
      height: 2px;
    }
  }
`

const HeaderMobileBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  backdrop-filter: blur(5px);

  transition: 0.5s ease;

  @media (min-width: 768px) {
    display: none;
  }
`

const Header = () => {
  const [snsOpenState, setSnsOpenState] = useState<boolean>(false)
  const [mobileNavOpenState, setMobileNavOpenState] = useState<boolean>(false)
  const [hover, setHover] = useState<string>('')
  const { isDarkmode, toggleMenu, menuOpened } = useContext(DarkmodeContext)
  const [mobileBackground, setMobileBackground] = useState<boolean>(false)

  // LightMode / DarkMode에 따라서 NavBar 아이템 color 변경
  const HeaderNavItems = useMemo(() => {
    return isDarkmode ? HeaderNavItemsDarkMode : HeaderNavItemsLightMode
  }, [isDarkmode])

  const linkHandler = useCallback(() => {
    if (menuOpened) {
      toggleMenu()
    }
  }, [menuOpened])

  const mobileBackgroundHandler = () => {
    if (mobileBackground) setMobileBackground(false)
    else setMobileBackground(true)
  }

  const snsOpenHandler = () => {
    if (mobileNavOpenState) setMobileNavOpenState(false)
    else mobileBackgroundHandler()

    if (snsOpenState) setSnsOpenState(false)
    else setSnsOpenState(true)
  }

  const mobileNavOpenHandler = () => {
    if (snsOpenState) setSnsOpenState(false)
    else mobileBackgroundHandler()

    if (mobileNavOpenState) setMobileNavOpenState(false)
    else setMobileNavOpenState(true)
  }

  return (
    <HeaderBlock>
      <HeaderMobileBackground
        style={{
          opacity: mobileBackground ? 1 : 0,
        }}
      />
      <Menu />
      <HeaderLogoContainer
        onClick={linkHandler}
        onMouseEnter={() => setHover('logo')}
        onMouseLeave={() => setHover('')}
      >
        <Link to="/">
          {hover != 'logo' ? (
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
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M43.3336 14.9661L44.6202 12.7378H50.5532L51.8398 14.9661H54.812L49.0767 5.02612H46.1044L40.3652 14.9661H43.3375H43.3336ZM47.5848 7.60314L49.348 10.6568H45.8215L47.5848 7.60314Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M28.7744 12.5906H20.1598V11.0405H27.5537V8.9595H20.1598V7.40941H28.7744V5.03003H17.1875V14.9661H28.7744V12.5906Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M34.3835 14.9661H37.3558V7.40941H41.665V5.03003H30.0781V7.40941H34.3835V14.9661Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M68.1536 0H64.8209H61.4805V3.33656H64.8209H68.1536H71.494H74.8306V0H71.494H68.1536Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M87.5384 3.33656H90.8788V0H87.5384H84.2057H80.8652V3.33656H84.2057H87.5384Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M58.1445 6.67323V9.98654V10.0098V13.3231V16.6635H61.4811V13.3231V10.0098V9.98654V6.67323V3.33667H58.1445V6.67323Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M64.8209 20.0001H68.1536H71.494V16.6636H68.1536H64.8209H61.4805V20.0001H64.8209Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M74.83 13.3232V10.0099V9.98665V6.67334H71.4934H68.153H64.8203V10.0099H68.153H71.4934V13.3232V16.6637H74.83V13.3232Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M84.2057 16.6633H80.8652V19.9999H84.2057H87.5384H90.8788V16.6633H87.5384H84.2057Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M80.8659 10.0096V9.9863V6.67299V3.33643H77.5293V6.67299V9.9863V10.0096V13.3229V16.6633H80.8659V13.3229V10.0096Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M90.8789 6.67323V9.98654V10.0098V13.3231V16.6635H94.2155V13.3231V10.0098V9.98654V6.67323V3.33667H90.8789V6.67323Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M100.253 3.33656V0H96.916V3.33656V6.67313V9.98644V10.0097V13.323V16.6634V20H100.253V16.6634V13.323V10.0097V9.98644V6.67313H103.589V3.33656H100.253Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M106.926 6.67334H103.59V10.0099H106.926V6.67334Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M110.262 3.33656V6.67313V9.98644V10.0097H106.926V13.3463H110.262V16.6634V20H113.599V16.6634V13.323V10.0097V9.98644V6.67313V3.33656V0H110.262V3.33656Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M126.309 9.98641H122.973V13.323H126.309V10.0097H129.646V6.6731H126.309V9.98641Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M119.637 16.6637H116.301V20.0002H119.637H122.974H126.31H129.647H132.984V16.6637H129.647H126.31H122.974V13.3232H119.637V16.6637Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M129.647 0H126.31H122.974H119.637H116.301V3.33656H119.637H122.974H126.31H129.647V6.67312H132.984V3.33656V0H129.647Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
              </g>
            </svg>
          ) : (
            <svg
              width="63"
              height="40"
              viewBox="0 0 63 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_871_419)">
                <path
                  d="M38.8885 20.0023C38.8885 24.2982 35.4057 27.7811 31.1098 27.7811C26.814 27.7811 23.3359 24.2982 23.3359 20.0023C23.3359 15.7065 26.8188 12.2236 31.1098 12.2236C35.4009 12.2236 38.8885 15.7065 38.8885 20.0023Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M49.116 1.99639L51.1124 13.3349H37.7822V0L49.116 1.99639Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M49.116 38.0037L51.1124 26.6699H37.7822V40L49.116 38.0037Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M62.2248 24.6879V15.2929L51.1123 13.335V26.6699L62.2248 24.6879Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M13.1087 38.0036L11.1123 26.665H24.4472V40L13.1087 38.0036Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M13.1087 1.99639L11.1123 13.3349H24.4472V0L13.1087 1.99639Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
                <path
                  d="M0 15.3121V24.7072L11.1124 26.6651V13.335L0 15.3121Z"
                  fill={isDarkmode ? 'black' : 'white'}
                />
              </g>
              <defs>
                <clipPath id="clip0_871_419">
                  <rect width="62.2249" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </Link>
      </HeaderLogoContainer>
      <HeaderButtonContainer>
        <HeaderNavContainer>
          <HeaderNavItems
            onClick={() => {
              alert('Comming Soon')
            }}
            to={`#`}
          >
            minting
          </HeaderNavItems>

          <HeaderNavItems
            onClick={() => {
              alert('Comming Soon')
            }}
            to={`#`}
          >
            gallery
          </HeaderNavItems>

          <HeaderNavItems
            onClick={() => {
              alert('Comming Soon')
            }}
            to={`#`}
          >
            My Page
          </HeaderNavItems>
        </HeaderNavContainer>
        <HeaderMobileNavButton onClick={mobileNavOpenHandler}>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="22" height="1" fill="white" />
            <rect y="7" width="22" height="1" fill="white" />
          </svg>
        </HeaderMobileNavButton>
        <HeaderNavSNSButton onClick={snsOpenHandler}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.35156 12.6484L12.6484 7.34375"
              stroke={isDarkmode ? 'black' : 'white'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3272 13.9766L9.11621 16.1875C8.7679 16.5358 8.3544 16.8121 7.89931 17.0006C7.44422 17.1891 6.95646 17.2861 6.46387 17.2861C5.46905 17.2861 4.51497 16.8909 3.81153 16.1875C3.10808 15.4841 2.71289 14.53 2.71289 13.5352C2.71289 12.5403 3.10808 11.5863 3.81153 10.8828L6.02246 8.67188"
              stroke={isDarkmode ? 'black' : 'white'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.9766 11.3281L16.1875 9.11719C16.8909 8.41375 17.2861 7.45967 17.2861 6.46485C17.2861 5.47003 16.8909 4.51595 16.1875 3.8125C15.4841 3.10906 14.53 2.71387 13.5352 2.71387C12.5403 2.71387 11.5863 3.10906 10.8828 3.8125L8.67188 6.02344"
              stroke={isDarkmode ? 'black' : 'white'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </HeaderNavSNSButton>
        <HeaderMenuButton
          onMouseEnter={() => setHover('menuButton')}
          onMouseLeave={() => setHover('')}
          onClick={toggleMenu}
        >
          {menuOpened ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="white"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="4"
                height="4"
                fill={
                  isDarkmode
                    ? hover == 'menuButton'
                      ? '#6200ee'
                      : 'black'
                    : 'white'
                }
              />
              <rect
                x="6"
                width="4"
                height="4"
                fill={
                  isDarkmode
                    ? hover == 'menuButton'
                      ? '#6200ee'
                      : 'black'
                    : 'white'
                }
              />
              <rect
                x="12"
                width="4"
                height="4"
                fill={
                  isDarkmode
                    ? hover == 'menuButton'
                      ? '#6200ee'
                      : 'black'
                    : 'white'
                }
              />
              <rect
                y="6"
                width="4"
                height="4"
                fill={
                  isDarkmode
                    ? hover == 'menuButton'
                      ? '#6200ee'
                      : 'black'
                    : 'white'
                }
              />
              <rect
                x="6"
                y="6"
                width="4"
                height="4"
                fill={
                  isDarkmode
                    ? hover == 'menuButton'
                      ? '#6200ee'
                      : 'black'
                    : 'white'
                }
              />
              <rect
                x="12"
                y="6"
                width="4"
                height="4"
                fill={
                  isDarkmode
                    ? hover == 'menuButton'
                      ? '#6200ee'
                      : 'black'
                    : 'white'
                }
              />
              <rect
                y="12"
                width="4"
                height="4"
                fill={
                  isDarkmode
                    ? hover == 'menuButton'
                      ? '#6200ee'
                      : 'black'
                    : 'white'
                }
              />
              <rect
                x="6"
                y="12"
                width="4"
                height="4"
                fill={
                  isDarkmode
                    ? hover == 'menuButton'
                      ? '#6200ee'
                      : 'black'
                    : 'white'
                }
              />
              <rect
                x="12"
                y="12"
                width="4"
                height="4"
                fill={
                  isDarkmode
                    ? hover == 'menuButton'
                      ? '#6200ee'
                      : 'black'
                    : 'white'
                }
              />
            </svg>
          )}
        </HeaderMenuButton>
      </HeaderButtonContainer>
      <MobileNav mobileNavOpenState={mobileNavOpenState} />
      <SNSMenu snsOpenState={snsOpenState} />
    </HeaderBlock>
  )
}

export default Header
