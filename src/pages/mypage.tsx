/* eslint-disable */
import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Web3 from 'web3'
import styled from '@emotion/styled'
import { DarkmodeContext } from '../contexts/DarkmodeProvider'

const MyPageConnectButton = styled.div`
  margin-top: 100px;
  margin-left: 100px;
  width: 100px;
  height: 100px;

  background: black;
  cursor: pointer;
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

const baseURI: string =
  'https://aftermint.s3.ap-northeast-2.amazonaws.com/jason/json/'

const MypagePage = () => {
  const { setMode } = useContext(DarkmodeContext)

  useEffect(() => {
    setMode(true)
  }, [])

  const [account, setAccount] = useState<string>('')
  const [smartContract, setSmartContract] = useState<any>()
  const [web3Obj, setWeb3Obj] = useState<Web3>()
  const [failString, setFailString] = useState<string>('')
  const [images, setImages] = useState<Array<string>>([])

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
        if (networkId == 5) {
          const SmartContractObj = new web3.eth.Contract(
            CONTARCTABI.abi,
            '0x9628D16c7e9411447e42De2A72B0ce2fDE9a3cf9',
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
          setFailString('Change Network')
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
      const imageUrls: Array<string> = []
      tokenIds.map(id => {
        const tempURL: string = baseURI + id + '.json'
        axios
          .get(tempURL)
          .then(res => {
            imageUrls.push(res?.data?.image)
          })
          .catch(err => {
            console.log(err)
          })
          .then(() => {})
      })
      setImages(imageUrls)
    }
  }

  useEffect(() => {
    getTokenIdArray()
  }, [account])

  useEffect(() => {
    console.log(images)
  }, [images])

  return (
    <>
      <MyPageConnectButton
        onClick={() => {
          connect()
        }}
      ></MyPageConnectButton>
      {images.map((image, idx) => (
        <img key={idx} src={image} />
      ))}
    </>
  )
}

export default MypagePage
