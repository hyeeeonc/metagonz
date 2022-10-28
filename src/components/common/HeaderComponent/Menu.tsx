import React, { useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { DarkmodeContext } from '../../../contexts/DarkmodeProvider'
import Octagon from '../../../models/Octagon'
import { graphql, useStaticQuery } from 'gatsby'

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

  transition: 0.3s ease-out;
  transform: translate(50%, -50%);

  @media (max-width: 1727px) {
    width: calc(300px * (1728px / 100vw));
    height: calc(300px * (1728px / 100vw));
  }

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
    left: 0;
    top: 0;

    opacity: 1;
    backdrop-filter: none;

    filter: none;
  }
`

const MenuButtonBackground = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);

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
    100% 0,
    100% 50%,
    85.35% 76.16%,
    50% 87%,
    14.65% 76.16%,
    0% 50%,
    0 0
  );
  // clip-path: polygon(
  //   50% 0,
  //   85.35% 14.65%,
  //   100% 50%,
  //   85.35% 85.35%,
  //   50% 100%,
  //   14.65% 85.35%,
  //   0 50%,
  //   14.65% 14.65%
  // );
  // -webkit-clip-path: polygon(
  //   50% 0,
  //   85.35% 14.65%,
  //   100% 50%,
  //   85.35% 85.35%,
  //   50% 100%,
  //   14.65% 85.35%,
  //   0 50%,
  //   14.65% 14.65%
  // );
`

const MenuButtonImage = styled.img`
  position: absolute;
  left: 20px;
  top: 100px;

  width: 367.43px;
  height: 1000px;

  opacity: 0.6;

  filter: grayscale(70%);

  transition: 0.3s ease-out;
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
  commu: {
    publicURL: string
  }
  more: {
    publicURL: string
  }
  submit: {
    publicURL: string
  }
}

const Menu = ({ menuOpenState }: { menuOpenState: boolean }) => {
  const [octagons, setOctagons] = useState<Octagon[]>([])
  const images: MenuImgType = useStaticQuery(graphql`
    query {
      news: file(relativePath: { eq: "images/ara_tall.png" }) {
        publicURL
      }
      about: file(relativePath: { eq: "images/ara_tall.png" }) {
        publicURL
      }
      gallery: file(relativePath: { eq: "images/ara_tall.png" }) {
        publicURL
      }
      roadmap: file(relativePath: { eq: "images/ara_tall.png" }) {
        publicURL
      }
      eightshop: file(relativePath: { eq: "images/ara_tall.png" }) {
        publicURL
      }
      commu: file(relativePath: { eq: "images/ara_tall.png" }) {
        publicURL
      }
      more: file(relativePath: { eq: "images/ara_tall.png" }) {
        publicURL
      }
      submit: file(relativePath: { eq: "images/ara_tall.png" }) {
        publicURL
      }
    }
  `)
  useEffect(() => {
    const news = new Octagon(638, 1251, images.news.publicURL, '', 'news', 0)
    const about = new Octagon(271, 1099, images.about.publicURL, '', 'about', 1)
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
      '8shop',
      4,
    )
    const commu = new Octagon(638, 729, images.commu.publicURL, '', 'commu', 5)
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
    gallery.setAdj([null, null, commu, null, null, news, null, about])
    roadmap.setAdj([null, null, null, eightshop, null, null, null, null])
    eightshop.setAdj([null, more, null, null, commu, null, null, roadmap])
    commu.setAdj([eightshop, null, null, null, null, null, gallery, null])
    more.setAdj([null, null, submit, null, null, eightshop, null, null])
    submit.setAdj([null, null, null, null, null, null, more, null])
    setOctagons([news, about, gallery, roadmap, eightshop, commu, more, submit])
  }, [])

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
        {octagons.map((octagon, i) => (
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
            <MenuButtonBackground className="background">
              {octagon.title}
            </MenuButtonBackground>
            <MenuButtonImageContainer className="imgContainer">
              <MenuButtonImage className="img" src={octagon.img} />
            </MenuButtonImageContainer>
          </MenuButtonContainer>
        ))}
      </MenuBlock>
    </MenuBackground>
  )
}

export default Menu
