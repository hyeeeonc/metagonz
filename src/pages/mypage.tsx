/* eslint-disable */
import React, { useEffect, useState, useContext, useRef } from 'react'
import axios from 'axios'
import Web3 from 'web3'
import styled from '@emotion/styled'
import { DarkmodeContext, menuOpened } from '../contexts/DarkmodeProvider'
import { graphql, useStaticQuery } from 'gatsby'
import { Global } from '@emotion/react'
import reset from '../../lib/styles/reset'

const MypageBlock = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
`

const MypageConnectBlock = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`

const MyPageConnectBackgroundImageContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  opacity: 0.9;
  z-index: -1;

  overflow: hidden;
`

const MyPageConnectBackgroundImagse = styled.img`
  position: absolute;

  width: auto;
  height: 1500px;
`

const MypageConnectFailString = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: red;
`

const MyPageConnectButton = styled.div`
  width: 300px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.6);
  padding: 20px;

  transition: 0.2s ease;
  :hover {
    opacity: 0.7;
    color: #6200ee;
  }
`

const MyPageNoItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.6);
  padding: 20px;
`

const MyPageNoItemLinkContainer = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MyPageNoItemLinks = styled.div`
  width: 150px;
  height: 50px;

  background: rgba(0, 0, 0, 0.7);

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  color: white;

  border-radius: 5px;

  text-decoration: none;
  border: none;
`

const MyPageWholeContainer = styled.div`
  margin: 130px 0 100px 30px;

  height: calc(100vh - 150px);

  display: flex;
  align-items: flex-start;

  overflow-y: scroll;
  overflow-x: hidden;
  width: 1500px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  @media (min-width: 1561px) {
    margin-left: calc((100vw - 1560px) / 2 + 30px);
  }

  @media (max-width: 949px) {
    margin-left: 10px;
    margin-top: 192px;
  }
`

const MyPageNftContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 1500px;
`

const MyPageNftItems = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: 0px calc((1560px - 60px - 1200px) / 8);
  @media (max-width: 1560px) {
    margin: 0px calc((100vw - 60px - 1200px) / 8);
  }

  @media (max-width: 1299px) {
    margin: 0px calc((100vw - 40px - 900px) / 6);
  }

  @media (max-width: 949px) {
    margin: 0px 10px;
    width: calc((100vw - 60px) / 2);
  }
`

const MyPageNftImageContainer = styled.div`
  width: 300px;
  height: 400px;

  background: none;
  video,
  img {
    width: 100%;
  }

  @media (max-width: 949px) {
    width: calc((100vw - 60px) / 2);
    height: calc((100vw - 60px) / 6 * 4);
    overflow: hidden;

    border-radius: 5px;
  }
`

const MyPageNftItemAuthor = styled.div`
  margin-top: 20px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;

  color: #000000;

  @media (max-width: 949px) {
    margin-top: 15px;
  }
`

const MyPageNftItemNumber = styled.div`
  margin-bottom: 50px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;

  color: #000000;

  @media (max-width: 949px) {
    margin-bottom: 40px;
  }
`

const CONTARCTABI = {
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
      ],
      name: 'getTokenIds',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
}

const MyPageNftItemComponent = ({
  image,
  imageName,
  edition,
}: {
  image: string
  imageName: string
  edition: string
}) => {
  const videoRef = useRef()
  const [videoUrl, setVideoUrl] = useState<string>(`${image}#t=0.001`)

  useEffect(() => {
    setVideoUrl(`${image}#t=0.001`)
  }, [image])

  useEffect(() => {
    videoRef.current?.load()
  }, [videoUrl])

  return (
    <MyPageNftItems>
      <MyPageNftImageContainer>
        {imageName.split('.')[1] === 'png' ||
        imageName.split('.')[1] === 'gif' ? (
          <img src={image} alt="" />
        ) : (
          <video ref={videoRef} key={image} playsInline width="100%" controls>
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
      </MyPageNftImageContainer>
      <MyPageNftItemAuthor>META GONZ</MyPageNftItemAuthor>
      <MyPageNftItemNumber>NO. {edition}</MyPageNftItemNumber>
    </MyPageNftItems>
  )
}

const baseURI: string =
  'https://aftermint.s3.ap-northeast-2.amazonaws.com/jason/json/'

type NftType = {
  image: string
  imageName: string
  edition: string
}

type ImgType = {
  yua: {
    publicURL: string
  }
  jua: {
    publicURL: string
  }
}

const MypagePage = () => {
  const characters: ImgType = useStaticQuery(graphql`
    query {
      yua: file(relativePath: { eq: "images/characters/01 Ara.png" }) {
        publicURL
      }
      jua: file(relativePath: { eq: "images/characters/08 Sana.png" }) {
        publicURL
      }
    }
  `)
  const { setMode, menuOpened } = useContext(DarkmodeContext)

  useEffect(() => {
    if (!menuOpened) {
      setMode(true)
    }
  }, [menuOpened])

  const [account, setAccount] = useState<string>('')
  const [smartContract, setSmartContract] = useState<any>()
  const [web3Obj, setWeb3Obj] = useState<Web3>()
  const [failString, setFailString] = useState<string>('')
  const [images, setImages] = useState<Array<NftType>>([])

  async function connect() {
    if (window.ethereum) {
      let web3 = new Web3(window?.ethereum)
      try {
        const accounts = await window?.ethereum.request({
          method: 'eth_requestAccounts',
        })
        const networkId = await window?.ethereum.request({
          method: 'net_version',
        })
        if (networkId == 1) {
          const SmartContractObj = new web3.eth.Contract(
            CONTARCTABI.abi,
            '0x166a21b0bd45757ccffcb6999660acf2298457cf',
          )
          // console.log(SmartContractObj.methods)
          setAccount(accounts[0])
          setSmartContract(SmartContractObj)
          setWeb3Obj(web3)

          window?.ethereum.on('accountsChanged', accounts => {
            setAccount(accounts[0])
          })
          window?.ethereum.on('chainChanged', () => {
            window.location.reload()
          })
        } else {
          setFailString('Change Network to Ethereum Mainnet')
        }
      } catch (err) {
        setFailString('Something went wrong.')
      }
    } else {
      setFailString('Install Metamask.')
    }
  }

  async function getTokenIdArray() {
    if (account != '' && smartContract != null) {
      const tokenIds = await smartContract?.methods.getTokenIds(account).call()
      setImages(
        await Promise.all(
          tokenIds.map(async id => {
            const tempURL: string = baseURI + id + '.json'
            let tempObj: NftType = {
              image: '',
              imageName: '',
              edition: 0,
            }
            return await axios.get(tempURL).then(res => {
              return {
                image: res?.data?.image,
                imageName: res?.data?.imageName,
                edition: res?.data?.edition,
              }
            })
          }),
        ),
      )
    }
  }

  useEffect(() => {
    getTokenIdArray()
  }, [account])

  return (
    <>
      <Global styles={reset} />
      {account == '' || smartContract == null ? (
        <MypageConnectBlock>
          <MyPageConnectBackgroundImageContainer>
            <MyPageConnectBackgroundImagse
              style={{
                top: '-30px',
                right: '30px',
              }}
              src={characters.jua.publicURL}
            />
            <MyPageConnectBackgroundImagse
              style={{
                top: '-10px',
                right: '-180px',
              }}
              src={characters.yua.publicURL}
            />
          </MyPageConnectBackgroundImageContainer>

          <MyPageConnectButton
            onClick={() => {
              connect()
            }}
          >
            <svg
              version="1.1"
              baseProfile="basic"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 165.2 31.3"
            >
              <path
                fill="#161616"
                d="M145.4,15.8c-0.9-0.6-1.9-1-2.8-1.5c-0.6-0.3-1.2-0.6-1.8-1.1c-0.9-0.7-0.7-2.2,0.2-2.8
	c1.3-0.9,3.5-0.4,3.8,1.4c0,0,0,0.1,0.1,0.1h2c0.1,0,0.1,0,0.1-0.1c-0.1-1.2-0.6-2.3-1.5-2.9c-0.8-0.6-1.8-1-2.8-1
	c-5.3,0-5.8,5.6-2.9,7.3c0.3,0.2,3.1,1.6,4.1,2.2c1,0.6,1.3,1.7,0.9,2.6c-0.4,0.8-1.4,1.4-2.4,1.3c-1.1-0.1-2-0.7-2.3-1.6
	c-0.1-0.2-0.1-0.5-0.1-0.6c0,0,0-0.1-0.1-0.1h-2.2c0,0-0.1,0-0.1,0.1c0,1.6,0.4,2.4,1.5,3.2c1,0.8,2.1,1.1,3.2,1.1
	c3,0,4.5-1.7,4.8-3.4C147.4,18.3,146.9,16.8,145.4,15.8z"
              />
              <path
                fill="#161616"
                d="M51.2,8.2h-1h-1.1c0,0-0.1,0-0.1,0.1l-1.8,5.9c0,0.1-0.1,0.1-0.2,0l-1.8-5.9c0,0,0-0.1-0.1-0.1h-1.1h-1H42
	c0,0-0.1,0-0.1,0.1v15c0,0,0,0.1,0.1,0.1h2.2c0,0,0.1,0,0.1-0.1V11.8c0-0.1,0.1-0.1,0.2,0l1.8,5.9l0.1,0.4c0,0,0,0.1,0.1,0.1h1.7
	c0,0,0.1,0,0.1-0.1l0.1-0.4l1.8-5.9c0-0.1,0.2-0.1,0.2,0v11.4c0,0,0,0.1,0.1,0.1h2.2c0,0,0.1,0,0.1-0.1v-15c0,0,0-0.1-0.1-0.1H51.2z
	"
              />
              <path
                fill="#161616"
                d="M112.2,8.2C112.1,8.2,112.1,8.2,112.2,8.2l-1.9,5.9c0,0.1-0.1,0.1-0.2,0l-1.8-5.9c0,0,0-0.1-0.1-0.1H105
	c0,0-0.1,0-0.1,0.1v15c0,0,0,0.1,0.1,0.1h2.2c0,0,0.1,0,0.1-0.1V11.8c0-0.1,0.1-0.1,0.2,0l1.8,5.9l0.1,0.4c0,0,0,0.1,0.1,0.1h1.7
	c0,0,0.1,0,0.1-0.1l0.1-0.4l1.8-5.9c0-0.1,0.2-0.1,0.2,0v11.4c0,0,0,0.1,0.1,0.1h2.2c0,0,0.1,0,0.1-0.1v-15c0,0,0-0.1-0.1-0.1H112.2
	z"
              />
              <path
                fill="#161616"
                d="M84.2,8.2h-4H78h-4c0,0-0.1,0-0.1,0.1v1.9c0,0,0,0.1,0.1,0.1h4v13c0,0,0,0.1,0.1,0.1h2.2c0,0,0.1,0,0.1-0.1
	v-13h4c0,0,0.1,0,0.1-0.1L84.2,8.2C84.3,8.2,84.2,8.2,84.2,8.2z"
              />
              <path
                fill="#161616"
                d="M97,23.3h2c0.1,0,0.1-0.1,0.1-0.1l-4.1-15c0,0,0-0.1-0.1-0.1h-0.8h-1.3H92c0,0-0.1,0-0.1,0.1l-4.1,15
	c0,0.1,0,0.1,0.1,0.1h2c0,0,0.1,0,0.1-0.1l1.2-4.4c0,0,0-0.1,0.1-0.1h4.4c0,0,0.1,0,0.1,0.1L97,23.3C96.9,23.3,96.9,23.3,97,23.3z
	 M91.8,16.7l1.6-5.8c0-0.1,0.1-0.1,0.2,0l1.6,5.8c0,0.1,0,0.1-0.1,0.1h-3.2C91.8,16.8,91.8,16.7,91.8,16.7z"
              />
              <path
                fill="#161616"
                d="M130.6,23.3h2c0.1,0,0.1-0.1,0.1-0.1l-4.1-15c0,0,0-0.1-0.1-0.1h-0.8h-1.3h-0.8c0,0-0.1,0-0.1,0.1l-4.1,15
	c0,0.1,0,0.1,0.1,0.1h2c0,0,0.1,0,0.1-0.1l1.2-4.4c0,0,0-0.1,0.1-0.1h4.4c0,0,0.1,0,0.1,0.1L130.6,23.3
	C130.6,23.3,130.6,23.3,130.6,23.3z M125.5,16.7l1.6-5.8c0-0.1,0.1-0.1,0.2,0l1.6,5.8c0,0.1,0,0.1-0.1,0.1h-3.2
	C125.5,16.8,125.5,16.7,125.5,16.7z"
              />
              <path
                fill="#161616"
                d="M61.3,21.1v-4.6c0,0,0-0.1,0.1-0.1h5.8c0,0,0.1,0,0.1-0.1v-1.9c0,0,0-0.1-0.1-0.1h-5.8c0,0-0.1,0-0.1-0.1v-4
	c0,0,0-0.1,0.1-0.1H68c0,0,0.1,0,0.1-0.1V8.3c0,0,0-0.1-0.1-0.1h-6.7h-2.2c0,0-0.1,0-0.1,0.1v1.9v4.1v2v4.8v2c0,0,0,0.1,0.1,0.1h2.2
	h6.9c0,0,0.1,0,0.1-0.1v-2c0,0,0-0.1-0.1-0.1L61.3,21.1C61.4,21.1,61.3,21.1,61.3,21.1z"
              />
              <path
                fill="#161616"
                d="M165.2,23.2l-7.5-7.7c0,0,0-0.1,0-0.1l6.8-7c0.1-0.1,0-0.1-0.1-0.1h-2.8c0,0,0,0-0.1,0l-5.7,5.9
	c-0.1,0.1-0.1,0-0.1-0.1V8.3c0,0,0-0.1-0.1-0.1h-2.2c0,0-0.1,0-0.1,0.1v15c0,0,0,0.1,0.1,0.1h2.2c0,0,0.1,0,0.1-0.1v-6.6
	c0-0.1,0.1-0.1,0.1-0.1l6.5,6.7c0,0,0,0,0.1,0h2.8C165.2,23.3,165.3,23.2,165.2,23.2z"
              />
              <path
                fill="#E17726"
                stroke="#E17726"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M32.1,0.1L18.9,9.8
	l2.4-5.7L32.1,0.1z"
              />
              <path
                fill="#E27625"
                stroke="#E27625"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1.8,0.1l13,9.8
	l-2.3-5.8L1.8,0.1z"
              />
              <path
                fill="#E27625"
                stroke="#E27625"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M27.4,22.7L23.9,28
	l7.5,2.1l2.1-7.3L27.4,22.7z"
              />
              <path
                fill="#E27625"
                stroke="#E27625"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M0.4,22.8l2.1,7.3
	L10,28l-3.5-5.3L0.4,22.8z"
              />
              <path
                fill="#E27625"
                stroke="#E27625"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.6,13.6l-2.1,3.1
	l7.4,0.3l-0.2-8L9.6,13.6z"
              />
              <path
                fill="#E27625"
                stroke="#E27625"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M24.3,13.6l-5.2-4.6
	l-0.2,8.1l7.4-0.3L24.3,13.6z"
              />
              <path
                fill="#E27625"
                stroke="#E27625"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10,28l4.5-2.2
	l-3.9-3L10,28z"
              />
              <path
                fill="#E27625"
                stroke="#E27625"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.4,25.8l4.5,2.2
	l-0.6-5.2L19.4,25.8z"
              />
              <path
                fill="#D5BFB2"
                stroke="#D5BFB2"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M23.9,28l-4.5-2.2
	l0.4,2.9l0,1.2L23.9,28z"
              />
              <path
                fill="#D5BFB2"
                stroke="#D5BFB2"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10,28l4.2,2l0-1.2
	l0.4-2.9L10,28z"
              />
              <path
                fill="#233447"
                stroke="#233447"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.2,20.9l-3.7-1.1
	l2.6-1.2L14.2,20.9z"
              />
              <path
                fill="#233447"
                stroke="#233447"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.6,20.9l1.1-2.3
	l2.6,1.2L19.6,20.9z"
              />
              <path
                fill="#CC6228"
                stroke="#CC6228"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10,28l0.6-5.3
	l-4.1,0.1L10,28z"
              />
              <path
                fill="#CC6228"
                stroke="#CC6228"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M23.2,22.7l0.6,5.3
	l3.5-5.2L23.2,22.7z"
              />
              <path
                fill="#CC6228"
                stroke="#CC6228"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M26.4,16.8l-7.4,0.3
	l0.7,3.8l1.1-2.3l2.6,1.2L26.4,16.8z"
              />
              <path
                fill="#CC6228"
                stroke="#CC6228"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5,19.8l2.6-1.2
	l1.1,2.3l0.7-3.8l-7.4-0.3L10.5,19.8z"
              />
              <path
                fill="#E27525"
                stroke="#E27525"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5,16.8l3.1,6.1
	l-0.1-3L7.5,16.8z"
              />
              <path
                fill="#E27525"
                stroke="#E27525"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M23.4,19.8l-0.1,3
	l3.1-6.1L23.4,19.8z"
              />
              <path
                fill="#E27525"
                stroke="#E27525"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.9,17.1l-0.7,3.8
	l0.9,4.5l0.2-5.9L14.9,17.1z"
              />
              <path
                fill="#E27525"
                stroke="#E27525"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.9,17.1l-0.4,2.4
	l0.2,5.9l0.9-4.5L18.9,17.1z"
              />
              <path
                fill="#F5841F"
                stroke="#F5841F"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.6,20.9l-0.9,4.5
	l0.6,0.4l3.9-3l0.1-3L19.6,20.9z"
              />
              <path
                fill="#F5841F"
                stroke="#F5841F"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5,19.8l0.1,3
	l3.9,3l0.6-0.4l-0.9-4.5L10.5,19.8z"
              />
              <path
                fill="#C0AC9D"
                stroke="#C0AC9D"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.7,30l0-1.2
	l-0.3-0.3h-5l-0.3,0.3l0,1.2L10,28l1.5,1.2l2.9,2h5.1l3-2l1.4-1.2L19.7,30z"
              />
              <path
                fill="#161616"
                stroke="#161616"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.4,25.8l-0.6-0.4
	h-3.7l-0.6,0.4l-0.4,2.9l0.3-0.3h5l0.3,0.3L19.4,25.8z"
              />
              <path
                fill="#763E1A"
                stroke="#763E1A"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M32.6,10.5l1.1-5.4
	l-1.7-5L19.4,9.5l4.9,4.1l6.9,2l1.5-1.8L32,13.4l1.1-1l-0.8-0.6l1.1-0.8L32.6,10.5z"
              />
              <path
                fill="#763E1A"
                stroke="#763E1A"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M0.1,5.1l1.1,5.4
	L0.5,11l1.1,0.8l-0.8,0.6l1.1,1l-0.7,0.5l1.5,1.8l6.9-2l4.9-4.1L1.8,0.1L0.1,5.1z"
              />
              <path
                fill="#F5841F"
                stroke="#F5841F"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M31.2,15.6l-6.9-2
	l2.1,3.1l-3.1,6.1l4.1-0.1h6.1L31.2,15.6z"
              />
              <path
                fill="#F5841F"
                stroke="#F5841F"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.6,13.6l-6.9,2
	l-2.3,7.1h6.1l4.1,0.1l-3.1-6.1L9.6,13.6z"
              />
              <path
                fill="#F5841F"
                stroke="#F5841F"
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.9,17.1l0.4-7.6
	l2-5.4h-8.9l2,5.4l0.4,7.6l0.2,2.4l0,5.9h3.7l0-5.9L18.9,17.1z"
              />
            </svg>
            <br />
            connect your wallet
            <br />
            <MypageConnectFailString>{failString}</MypageConnectFailString>
          </MyPageConnectButton>
        </MypageConnectBlock>
      ) : (
        <MypageBlock>
          {images.length == 0 ? (
            <MypageConnectBlock>
              <MyPageConnectBackgroundImageContainer>
                <MyPageConnectBackgroundImagse
                  style={{
                    top: '-30px',
                    right: '30px',
                  }}
                  src={characters.jua.publicURL}
                />
                <MyPageConnectBackgroundImagse
                  style={{
                    top: '-10px',
                    right: '-180px',
                  }}
                  src={characters.yua.publicURL}
                />
              </MyPageConnectBackgroundImageContainer>
              <MyPageNoItemBlock>
                <span
                  style={{
                    opacity: 0.7,
                  }}
                >
                  You don't have any items
                </span>
                <br />
                <span
                  style={{
                    fontSize: '2rem',
                  }}
                >
                  BE A PART OF US
                </span>
                <br />
                <MyPageNoItemLinkContainer>
                  <a href="https://mint.metagonz.io/" target="_blank">
                    <MyPageNoItemLinks>mint</MyPageNoItemLinks>
                  </a>
                  <a
                    target="_blank"
                    href="https://opensea.io/collection/metagonz"
                  >
                    <MyPageNoItemLinks>opeansea</MyPageNoItemLinks>
                  </a>
                </MyPageNoItemLinkContainer>
              </MyPageNoItemBlock>
            </MypageConnectBlock>
          ) : (
            <MyPageWholeContainer>
              <MyPageNftContainer>
                {images.map((image, idx) => (
                  <MyPageNftItemComponent
                    key={idx}
                    image={image.image}
                    imageName={image.imageName}
                    edition={image.edition}
                  />
                ))}
              </MyPageNftContainer>
            </MyPageWholeContainer>
          )}
        </MypageBlock>
      )}
    </>
  )
}

export default MypagePage
