import React, {
  FunctionComponent,
  useState,
  useCallback,
  useEffect,
  useContext,
} from 'react'

import reset from '../../../lib/styles/reset'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

const MobileTempBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;
`

const MobileLogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  z-index: 10;
`

const MobileTempImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;
`

const MobileTempChar = styled.img`
  position: absolute;
  left: calc((100vw - 1000px) / 2);
  width: 1000px;
  transition: 0.3 ease;
`

const MobileTempText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 100%;

  transform: translate(-50%, -50%);

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 25px;
  text-transform: uppercase;
  text-align: center;

  font-align: center;
  color: white;
`

type Node = {
  node: {
    publicURL: string
  }
}

type MobileImgType = {
  background: {
    publicURL: string
  }

  allFile: {
    edges: Node[]
  }
}

const MobileTemp = () => {
  const mobileImages: MobileImgType = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/tempback.jpg" }) {
        publicURL
      }
      allFile(filter: { relativeDirectory: { eq: "images/characters" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  const [selectedImg, setSelectedImg] = useState<number>(0)
  const [imgOpacity, setImgOpacity] = useState<number>(1)
  useEffect(() => {
    const imgCount = mobileImages.allFile.edges.length
    const changeChar: NodeJS.Timer = setInterval(() => {
      setTimeout(() => {
        setSelectedImg(before => {
          while (true) {
            const idx = Math.floor(imgCount * Math.random())
            if (before === idx) continue
            return idx
          }
        })
      }, 500)
    }, 5000)

    const toggleOpacity: NodeJS.Timer = setInterval(() => {
      setImgOpacity(0)
      setTimeout(() => {
        setImgOpacity(1)
      }, 500)
    }, 5000)

    return () => {
      clearInterval(changeChar)
      clearInterval(toggleOpacity)
    }
  }, [])

  useEffect(() => {
    console.log(`opacity: ${imgOpacity}`)
  }, [imgOpacity])
  return (
    <MobileTempBlock>
      <Global styles={reset} />
      <MobileTempImage src={mobileImages.background.publicURL} />
      <MobileTempChar
        style={{
          opacity: imgOpacity,
        }}
        src={mobileImages.allFile.edges[selectedImg].node.publicURL}
      />
      <MobileLogoContainer>
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
              fill="white"
            />
            <path
              d="M43.3336 14.9661L44.6202 12.7378H50.5532L51.8398 14.9661H54.812L49.0767 5.02612H46.1044L40.3652 14.9661H43.3375H43.3336ZM47.5848 7.60314L49.348 10.6568H45.8215L47.5848 7.60314Z"
              fill="white"
            />
            <path
              d="M28.7744 12.5906H20.1598V11.0405H27.5537V8.9595H20.1598V7.40941H28.7744V5.03003H17.1875V14.9661H28.7744V12.5906Z"
              fill="white"
            />
            <path
              d="M34.3835 14.9661H37.3558V7.40941H41.665V5.03003H30.0781V7.40941H34.3835V14.9661Z"
              fill="white"
            />
            <path
              d="M68.1536 0H64.8209H61.4805V3.33656H64.8209H68.1536H71.494H74.8306V0H71.494H68.1536Z"
              fill="white"
            />
            <path
              d="M87.5384 3.33656H90.8788V0H87.5384H84.2057H80.8652V3.33656H84.2057H87.5384Z"
              fill="white"
            />
            <path
              d="M58.1445 6.67323V9.98654V10.0098V13.3231V16.6635H61.4811V13.3231V10.0098V9.98654V6.67323V3.33667H58.1445V6.67323Z"
              fill="white"
            />
            <path
              d="M64.8209 20.0001H68.1536H71.494V16.6636H68.1536H64.8209H61.4805V20.0001H64.8209Z"
              fill="white"
            />
            <path
              d="M74.83 13.3232V10.0099V9.98665V6.67334H71.4934H68.153H64.8203V10.0099H68.153H71.4934V13.3232V16.6637H74.83V13.3232Z"
              fill="white"
            />
            <path
              d="M84.2057 16.6633H80.8652V19.9999H84.2057H87.5384H90.8788V16.6633H87.5384H84.2057Z"
              fill="white"
            />
            <path
              d="M80.8659 10.0096V9.9863V6.67299V3.33643H77.5293V6.67299V9.9863V10.0096V13.3229V16.6633H80.8659V13.3229V10.0096Z"
              fill="white"
            />
            <path
              d="M90.8789 6.67323V9.98654V10.0098V13.3231V16.6635H94.2155V13.3231V10.0098V9.98654V6.67323V3.33667H90.8789V6.67323Z"
              fill="white"
            />
            <path
              d="M100.253 3.33656V0H96.916V3.33656V6.67313V9.98644V10.0097V13.323V16.6634V20H100.253V16.6634V13.323V10.0097V9.98644V6.67313H103.589V3.33656H100.253Z"
              fill="white"
            />
            <path
              d="M106.926 6.67334H103.59V10.0099H106.926V6.67334Z"
              fill="white"
            />
            <path
              d="M110.262 3.33656V6.67313V9.98644V10.0097H106.926V13.3463H110.262V16.6634V20H113.599V16.6634V13.323V10.0097V9.98644V6.67313V3.33656V0H110.262V3.33656Z"
              fill="white"
            />
            <path
              d="M126.309 9.98641H122.973V13.323H126.309V10.0097H129.646V6.6731H126.309V9.98641Z"
              fill="white"
            />
            <path
              d="M119.637 16.6637H116.301V20.0002H119.637H122.974H126.31H129.647H132.984V16.6637H129.647H126.31H122.974V13.3232H119.637V16.6637Z"
              fill="white"
            />
            <path
              d="M129.647 0H126.31H122.974H119.637H116.301V3.33656H119.637H122.974H126.31H129.647V6.67312H132.984V3.33656V0H129.647Z"
              fill="white"
            />
          </g>
        </svg>
      </MobileLogoContainer>
    </MobileTempBlock>
  )
}

export default MobileTemp
