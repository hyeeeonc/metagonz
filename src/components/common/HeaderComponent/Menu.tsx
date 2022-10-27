import React, { useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { DarkmodeContext } from '../../../contexts/DarkmodeProvider'

const MenuBackground = styled.div`
  position: fixed;
  right: -1px;
  top: -1px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100vw + 2px);
  height: calc(100vh - calc(100vh - 100%) + 2px);

  background: linear-gradient(180deg, #1c0044 0%, #6200ee 100%);
  backdrop-filter: blur(15px);

  overflow: hidden;

  transition: opacity 0.5s ease, visibility 0.5s ease;
`

const MenuBlock = styled.div`
  position: relative;

  width: 1728px;
  height: 980px;

  @media (max-width: 1727px) {
    width: 100vw;
  }

  @media (max-height: 979px) {
    height: calc(100vh - calc(100vh - 100%));
  }
`

const MenuBackgroundOcatgonTemplate = styled.div`
  position: absolute;

  clip-path: polygon(
    50% 0,
    85.35% 14.65%,
    100% 50%,
    85.35% 85.35%,
    50% 100%,
    14.65% 85.35%,
    0 50%,
    14.65% 14.65%
  );
  -webkit-clip-path: polygon(
    50% 0,
    85.35% 14.65%,
    100% 50%,
    85.35% 85.35%,
    50% 100%,
    14.65% 85.35%,
    0 50%,
    14.65% 14.65%
  );

  overflow: hidden;
`

const MenuBackgroundOcatgonWithGradient = styled(MenuBackgroundOcatgonTemplate)`
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.2) 100%);
  opacity: 0.2;
`

const MenuBackgroundOcatgonNoGradient = styled(MenuBackgroundOcatgonTemplate)`
  background: #000000;
  opacity: 0.2;
`

const MenuButtonContainer = styled.div`
  position: absolute;

  width: 300px;
  height: 300px;

  overflow: hidden;

  transition: 0.2s ease;

  clip-path: polygon(
    50% 0,
    85.35% 14.65%,
    100% 50%,
    85.35% 85.35%,
    50% 100%,
    14.65% 85.35%,
    0 50%,
    14.65% 14.65%
  );
  -webkit-clip-path: polygon(
    50% 0,
    85.35% 14.65%,
    100% 50%,
    85.35% 85.35%,
    50% 100%,
    14.65% 85.35%,
    0 50%,
    14.65% 14.65%
  );

  @media (max-width: 1727px) {
    width: calc(300px * (1728px / 100vw));
    height: calc(300px * (1728px / 100vw));
  }

  :hover {
    width: 370px;
    height: 500px;

    clip-path: polygon(
      100% 0,
      100% 70%,
      85.35% 89.16%,
      50% 100%,
      14.65% 89.16%,
      0% 70%,
      0 0
    );

    -webkit-clip-path: polygon(
      100% 0,
      100% 70%,
      85.35% 89.16%,
      50% 100%,
      14.65% 89.16%,
      0% 70%,
      0 0
    );
  }

  :hover .background {
    width: 370px;
    height: 370px;

    background: linear-gradient(180deg, #a35fff 0%, rgba(161, 95, 255, 0) 100%);
  }

  :hover .img {
    opacity: 1;
    backdrop-filter: none;

    filter: none;
  }
`

const MenuButtonBackground = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: white;
  padding-left: 40px;
  box-sizing: border-box;

  width: 300px;
  height: 300px;

  background: linear-gradient(0deg, #230055, #230055), #4b4b4b;
  mix-blend-mode: color;

  transition: 0.2s ease;

  clip-path: polygon(
    50% 0,
    85.35% 14.65%,
    100% 50%,
    85.35% 85.35%,
    50% 100%,
    14.65% 85.35%,
    0 50%,
    14.65% 14.65%
  );
  -webkit-clip-path: polygon(
    50% 0,
    85.35% 14.65%,
    100% 50%,
    85.35% 85.35%,
    50% 100%,
    14.65% 85.35%,
    0 50%,
    14.65% 14.65%
  );
`

const MenuButtonImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;

  width: 367.43px;
  height: 1000px;

  opacity: 0.6;

  filter: grayscale(70%);

  transition: 0.2s ease;
`

const Menu = ({ menuOpenState }: { menuOpenState: boolean }) => {
  const { isDarkmode, setMode } = useContext(DarkmodeContext)
  const [PrevMode, setPrevMode] = useState<boolean>(false)
  const [eachPos, setEachPos] = useState<{ x: number; y: number }[]>([])

  // 기존 화면의 mode를 확인하고, 현재 메뉴가 다크모드니 이에 따라 변경하기.
  useEffect(() => {
    if (menuOpenState) {
      setPrevMode(isDarkmode)
      setMode(false)
    } else {
      setMode(PrevMode)
    }
  }, [menuOpenState])

  const hoverHandler = (idx: number) => {
    switch (idx) {
      case 0:
    }
  }
  return (
    <MenuBackground
      style={{
        visibility: menuOpenState ? 'visible' : 'hidden',
        opacity: menuOpenState ? 1 : 0,
      }}
    >
      {/* background Design */}
      <MenuBackgroundOcatgonNoGradient
        style={{
          width: 100,
          height: 100,
          top: 280,
          left: -51,
        }}
      />
      <MenuBackgroundOcatgonWithGradient
        style={{
          width: 150,
          height: 150,
          top: 223,
          left: 49,
        }}
      />
      <MenuBackgroundOcatgonNoGradient
        style={{
          width: 300,
          height: 300,
          top: -49,
          left: 290,
        }}
      />
      <MenuBackgroundOcatgonWithGradient
        style={{
          width: 230,
          height: 230,
          top: 205,
          left: 819,
        }}
      />
      <MenuBackgroundOcatgonNoGradient
        style={{
          width: 300,
          height: 300,
          top: 584,
          right: 31,
        }}
      />
      <MenuBackgroundOcatgonNoGradient
        style={{
          width: 230,
          height: 230,
          top: 712,
          right: 730,
        }}
      />
      <MenuBackgroundOcatgonWithGradient
        style={{
          width: 230,
          height: 230,
          top: 794,
          right: 532,
        }}
      />
      {/* background Design */}

      <MenuBlock>
        <MenuButtonContainer
          className="container"
          style={{
            top: 488,
            right: 1101,
          }}
        >
          <MenuButtonBackground className="background">
            news
          </MenuButtonBackground>
          <MenuButtonImage className="img" src="./images/ara_tall.png" />
        </MenuButtonContainer>

        <MenuButtonContainer
          className="container"
          style={{
            top: 119,
            right: 940,
          }}
        >
          <MenuButtonBackground className="background">
            about
          </MenuButtonBackground>
          <MenuButtonImage className="img" src="./images/ara_tall.png" />
        </MenuButtonContainer>

        <MenuButtonContainer
          className="container"
          style={{
            top: 381,
            right: 840,
          }}
        >
          <MenuButtonBackground className="background">
            gallery
          </MenuButtonBackground>
          <MenuButtonImage className="img" src="./images/ara_tall.png" />
        </MenuButtonContainer>

        <MenuButtonContainer
          className="container"
          style={{
            top: -34,
            right: 579,
          }}
        >
          <MenuButtonBackground className="background">
            roadmap
          </MenuButtonBackground>
          <MenuButtonImage className="img" src="./images/ara_tall.png" />
        </MenuButtonContainer>

        <MenuButtonContainer
          className="container"
          style={{
            top: 227,
            right: 471,
          }}
        >
          <MenuButtonBackground className="background">
            8 shop
          </MenuButtonBackground>
          <MenuButtonImage className="img" src="./images/ara_tall.png" />
        </MenuButtonContainer>

        <MenuButtonContainer
          className="container"
          style={{
            top: 488,
            right: 579,
          }}
        >
          <MenuButtonBackground className="background">
            community
          </MenuButtonBackground>
          <MenuButtonImage className="img" src="./images/ara_tall.png" />
        </MenuButtonContainer>

        <MenuButtonContainer
          className="container"
          style={{
            top: 119,
            right: 210,
          }}
        >
          <MenuButtonBackground className="background">
            more
          </MenuButtonBackground>
          <MenuButtonImage className="img" src="./images/ara_tall.png" />
        </MenuButtonContainer>

        <MenuButtonContainer
          className="container"
          style={{
            top: 227,
            right: -51,
          }}
        >
          <MenuButtonBackground className="background">
            submit idea
          </MenuButtonBackground>
          <MenuButtonImage className="img" src="./images/ara_tall.png" />
        </MenuButtonContainer>
      </MenuBlock>
    </MenuBackground>
  )
}

export default Menu
