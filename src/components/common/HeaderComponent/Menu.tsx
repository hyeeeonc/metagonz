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

const MenuBackgroundOcatgonContainer = styled.svg`
  position: absolute;

  overflow: hidden;

  transition: 0.5s;
  image {
    transition: 0.5s;
    filter: grayscale(60%);
  }
`

const MenuBackgroundOcatgonWithShadow = ({
  width,
  height,
  top,
  left,
}: {
  width: number
  height: number
  top: number
  left: number
}) => {
  return (
    <MenuBackgroundOcatgonContainer
      width={`calc(${width} * (100% / 1728))`}
      height={`calc(${height} * (100% / 980))`}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        top: `calc(${top} * (100% / 980))`,
        left: `calc(${left} * (100% / 1728))`,
      }}
    >
      <path
        opacity="0.2"
        d="M75 0L128.033 21.967L150 75L128.033 128.033L75 150L21.967 128.033L0 75L21.967 21.967L75 0Z"
        fill="url(#paint0_linear_871_448)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_871_448"
          x1="75"
          y1="0"
          x2="75"
          y2="150"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </MenuBackgroundOcatgonContainer>
  )
}

const MenuBackgroundOcatgonNoShadow = ({
  width,
  height,
  top,
  left,
}: {
  width: number
  height: number
  top: number
  left: number
}) => {
  return (
    <MenuBackgroundOcatgonContainer
      width={`calc(${width} * (100% / 1728))`}
      height={`calc(${height} * (100% / 980))`}
      viewBox="0 0 300 300"
      fill="none"
      style={{
        top: `calc(${top} * (100% / 980))`,
        left: `calc(${left} * (100% / 1728))`,
      }}
    >
      <path
        opacity="0.2"
        d="M150 0L256.066 43.934L300 150L256.066 256.066L150 300L43.934 256.066L0 150L43.934 43.934L150 0Z"
        fill="black"
      />
    </MenuBackgroundOcatgonContainer>
  )
}

const MenuButtonConatiner = styled.div`
  position: absolute;
  left: 300px;
  bottom: 300px;

  width: 300px;
  height: 300px;
  background: linear-gradient(180deg, #a35fff 0%, rgba(161, 95, 255, 0) 100%);
  backdrop-filter: blur(15px);
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  transform: rotate(-22.5deg);
`
const MenuButtonImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`

const MenuButtons = ({
  diameter,
  left,
  bottom,
}: {
  diameter: number
  left: number
  bottom: number
}) => {
  return (
    <MenuButtonConatiner
      style={{
        left: 100,
        bottom: 100,
      }}
    >
      <MenuBackgroundOcatgonContainer
        width={diameter}
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        style={{
          left: 0,
          bottom: 0,
        }}
      >
        <path
          opacity="0.8"
          d="M150 0L256.066 43.934L300 150L256.066 256.066L150 300L43.934 256.066L0 150L43.934 43.934L150 0Z"
          fill="black"
        />
      </MenuBackgroundOcatgonContainer>
      <MenuButtonImage src="./images/6-Dana.png" />
    </MenuButtonConatiner>
  )
}

const Menu = ({ menuOpenState }: { menuOpenState: boolean }) => {
  const { isDarkmode, setMode } = useContext(DarkmodeContext)
  const [PrevMode, setPrevMode] = useState<boolean>(false)
  const [diameter, setDiameter] = useState<number>(300)
  // 기존 화면의 mode를 확인하고, 현재 메뉴가 다크모드니 이에 따라 변경하기.
  useEffect(() => {
    if (menuOpenState) {
      setPrevMode(isDarkmode)
      setMode(false)
    } else {
      setMode(PrevMode)
    }
  }, [menuOpenState])
  const [hover, setHover] = useState<number>(-1)
  const [eachTransform, setEachTransform] = useState<
    { x: number; y: number }[]
  >([])

  const hoverHandler = (idx: number) => {
    switch (idx) {
      case 0:
        for (let i = 0; i < 9; i++) {
          eachTransform[i].x = 0
          eachTransform[i].y = 0
        }
    }
  }
  return (
    <MenuBackground
      style={{
        visibility: menuOpenState ? 'visible' : 'hidden',
        opacity: menuOpenState ? 1 : 0,
      }}
    >
      <MenuBlock>
        <MenuBackgroundOcatgonNoShadow
          width={100}
          height={100}
          top={208}
          left={-51}
        />
        <MenuBackgroundOcatgonWithShadow
          width={150}
          height={150}
          top={233}
          left={49}
        />
        <MenuBackgroundOcatgonNoShadow
          width={300}
          height={300}
          top={-49}
          left={290}
        />
        <MenuBackgroundOcatgonWithShadow
          width={230}
          height={230}
          top={205}
          left={819}
        />
        <MenuBackgroundOcatgonNoShadow
          width={300}
          height={300}
          top={584}
          left={1397}
        />
        <MenuBackgroundOcatgonNoShadow
          width={230}
          height={230}
          top={712}
          left={798}
        />
        <MenuBackgroundOcatgonWithShadow
          width={230}
          height={230}
          top={794}
          left={997}
        />
        <MenuButtonConatiner />
      </MenuBlock>
    </MenuBackground>
  )
}

export default Menu
