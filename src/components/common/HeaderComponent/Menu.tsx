import React, { useCallback, useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { DarkmodeContext } from '../../../contexts/DarkmodeProvider'
import Octagon from '../../../models/Octagon'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

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

  transition: opacity 0.5s ease;

  @media (max-width: 767px) {
    overflow-x: hidden;
    overflow-y: scroll;
  }
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

  transition: 0.3s ease-out;
  transform: translate(50%, -50%);

  @media (max-width: 1727px) {
    width: calc(300px * (1728px / 100vw));
    height: calc(300px * (1728px / 100vw));
  }

  @media (hover: hover) {
    :hover {
      width: 370px;
      height: 500px;
    }

    :hover .imgContainer {
      // width: 370px;
      // height: 500px;
      left: 0;
      bottom: 0;

      clip-path: polygon(
        100% 0,
        100% 50%,
        85.35% 76.16%,
        50% 87%,
        14.65% 76.16%,
        0% 50%,
        0 0
      );

      -webkit-clip-path: polygon(
        100% 0,
        100% 50%,
        85.35% 76.16%,
        50% 87%,
        14.65% 76.16%,
        0% 50%,
        0 0
      );
    }

    :hover .background {
      width: 370px;
      height: 370px;

      background: linear-gradient(
        180deg,
        #a35fff 20.73%,
        rgba(161, 95, 255, 0) 100%
      );
    }

    :hover .img {
      left: 30px;
      top: -80px;

      opacity: 1;
      backdrop-filter: none;

      filter: none;
    }
  }

  @media (max-width: 767px) {
    width: 160px;
    height: 160px;
  }
`

const MenuButtonBackground = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);

  width: 300px;
  height: 300px;

  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(15px);
  mix-blend-mode: color;

  transition: 0.3s ease-out;

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

  @media (max-width: 767px) {
    width: 160px;
    height: 160px;
  }
`

const MenuButtonImageContainer = styled.div`
  position: absolute;
  left: -35px;
  bottom: -65px;

  width: 370px;
  height: 500px;

  overflow: hidden;

  transition: 0.3s ease-out;
  clip-path: polygon(
    100% 0,
    100% 50%,
    85.35% 76.16%,
    50% 87%,
    14.65% 76.16%,
    0% 50%,
    0 0
  );

  -webkit-clip-path: polygon(
    92% 0,
    92% 55%,
    78.35% 78.16%,
    50% 87%,
    21.65% 78.16%,
    8% 55%,
    8% 0
  );

  @media (max-width: 767px) {
    left: 0px;
    bottom: 0px;
    width: 160px;
    height: 160px;

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
  }
`

const MenuButtonImage = styled.img`
  position: absolute;
  left: 50px;
  top: 80px;

  // width: 367.43px;
  height: 1000px;

  opacity: 0.6;

  filter: grayscale(70%);

  transition: 0.3s ease-out;

  @media (max-width: 767px) {
    left: 10px;
    top: -30px;
    height: 500px;
  }
`

const MenuButtonTitle = styled.div`
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translate(0, -50%);

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: white;

  @media (max-width: 767px) {
    left: 15px;

    font-size: 10px;
    line-height: 12px;
  }
`

type MenuImgType = {
  news: {
    publicURL: string
  }
  about: {
    publicURL: string
  }
  gallery: {
    publicURL: string
  }
  roadmap: {
    publicURL: string
  }
  eightshop: {
    publicURL: string
  }
  community: {
    publicURL: string
  }
  more: {
    publicURL: string
  }
  submit: {
    publicURL: string
  }
}

const MenuMobileButtons = ({
  top,
  right,
  imgSrc,
  title,
}: {
  top: number
  right: number
  imgSrc: string
  title: string
}) => {
  return (
    <Link
      to="#"
      // to={octagon.url}
      // onClick={() => {
      //   if (i == 1) linkHandler()
      //   else {
      //     alert('Comming Soon')
      //   }
      // }}
    >
      <MenuButtonContainer
        className="container"
        style={{
          top: top,
          right: `calc(50vw + ${right}px)`,
        }}
      >
        <MenuButtonBackground className="background"></MenuButtonBackground>
        <MenuButtonImageContainer className="imgContainer">
          <MenuButtonImage className="img" src={imgSrc} />
        </MenuButtonImageContainer>
        <MenuButtonTitle> {title}</MenuButtonTitle>
      </MenuButtonContainer>
    </Link>
  )
}

const Menu = () => {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })

  const [octagons, setOctagons] = useState<Octagon[]>([])
  const { toggleMenu, menuOpened } = useContext(DarkmodeContext)
  const images: MenuImgType = useStaticQuery(graphql`
    query {
      news: file(relativePath: { eq: "images/characters/05 Dana.png" }) {
        publicURL
      }
      about: file(relativePath: { eq: "images/characters/08 Sana.png" }) {
        publicURL
      }
      gallery: file(relativePath: { eq: "images/characters/02 Sara.png" }) {
        publicURL
      }
      roadmap: file(relativePath: { eq: "images/characters/06 Roa.png" }) {
        publicURL
      }
      eightshop: file(relativePath: { eq: "images/characters/03 Yua.png" }) {
        publicURL
      }
      community: file(relativePath: { eq: "images/characters/01 Ara.png" }) {
        publicURL
      }
      more: file(relativePath: { eq: "images/characters/07 Sia.png" }) {
        publicURL
      }
      submit: file(relativePath: { eq: "images/characters/04 Jua.png" }) {
        publicURL
      }
    }
  `)
  useEffect(() => {
    const news = new Octagon(638, 1251, images.news.publicURL, '', 'news', 0)
    const about = new Octagon(
      271,
      1099,
      images.about.publicURL,
      '/about',
      'about',
      1,
    )
    const gallery = new Octagon(
      531,
      990,
      images.gallery.publicURL,
      '',
      'gallery',
      2,
    )
    const roadmap = new Octagon(
      116,
      729,
      images.roadmap.publicURL,
      '',
      'roadmap',
      3,
    )
    const eightshop = new Octagon(
      377,
      621,
      images.eightshop.publicURL,
      '',
      '8 shop',
      4,
    )
    const community = new Octagon(
      638,
      729,
      images.community.publicURL,
      '',
      'community',
      5,
    )
    const more = new Octagon(269, 360, images.more.publicURL, '', 'more', 6)
    const submit = new Octagon(
      377,
      99,
      images.submit.publicURL,
      '',
      'submit',
      7,
    )
    news.setAdj([null, gallery, null, null, null, null, null, null])
    about.setAdj([null, null, null, gallery, null, null, null, null])
    gallery.setAdj([null, null, community, null, null, news, null, about])
    roadmap.setAdj([null, null, null, eightshop, null, null, null, null])
    eightshop.setAdj([null, more, null, null, community, null, null, roadmap])
    community.setAdj([eightshop, null, null, null, null, null, gallery, null])
    more.setAdj([null, null, submit, null, null, eightshop, null, null])
    submit.setAdj([null, null, null, null, null, null, more, null])
    setOctagons([
      news,
      about,
      gallery,
      roadmap,
      eightshop,
      community,
      more,
      submit,
    ])
  }, [])

  const linkHandler = useCallback(() => {
    if (menuOpened) {
      toggleMenu()
    }
  }, [menuOpened])

  useEffect(() => {
    octagons.forEach(octagon => {
      const image = new Image()
      image.src = octagon.img
    })
  }, [octagons])

  return (
    <MenuBackground
      style={{
        visibility: menuOpened ? 'visible' : 'hidden',
        opacity: menuOpened ? 1 : 0,
      }}
    >
      {isPc && (
        <>
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
            {octagons.map((octagon, i) => (
              <Link
                to={octagon.url}
                onClick={() => {
                  if (i == 1) linkHandler()
                  else {
                    alert('Comming Soon')
                  }
                }}
              >
                <MenuButtonContainer
                  className="container"
                  style={{
                    top: octagon.y,
                    right: octagon.x,
                  }}
                  onMouseEnter={() => {
                    octagon.sizeUp()
                    setOctagons(os => [...os])
                  }}
                  onMouseLeave={() => {
                    octagon.sizeDown()
                    setOctagons(os => [...os])
                  }}
                >
                  <MenuButtonBackground className="background"></MenuButtonBackground>
                  <MenuButtonImageContainer className="imgContainer">
                    <MenuButtonImage className="img" src={octagon.img} />
                  </MenuButtonImageContainer>
                  <MenuButtonTitle> {octagon.title}</MenuButtonTitle>
                </MenuButtonContainer>
              </Link>
            ))}
          </MenuBlock>
        </>
      )}
      {isMobile && (
        <>
          <Link
            to="#"
            onClick={() => {
              alert('Comming Soon')
            }}
          >
            <MenuMobileButtons
              top={160}
              right={24}
              imgSrc={octagons[3].img}
              title="roadmap"
            />
          </Link>
        </>
      )}
    </MenuBackground>
  )
}

export default Menu
