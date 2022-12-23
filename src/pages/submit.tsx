import React, { useContext, useEffect, useState, useCallback } from 'react'

import reset from '../../lib/styles/reset'
import { Global } from '@emotion/react'

import { DarkmodeContext } from '../contexts/DarkmodeProvider'

import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

const SubmitBlock = styled.div`
  position: absolute;

  width: 100vw;
  height: 100vh;

  background: linear-gradient(180deg, #1c0044 0%, #6200ee 100%);

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`

const SubmitBackgroundImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: auto;

  opacity: 0.15;

  @media (max-aspect-ratio: 3456/2234) {
    width: auto;
    height: 100vh;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

const SubmitContentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;

  @media (max-width: 640px) {
    position: absolute;
    top: 185px;
    left: 0px;

    height: calc(100vh - 190px);

    overflow-y: scroll;
    overflow-x: hidden;
    align-items: flex-start;
    margin-left: 20px;
  }
`

const SubmitContentTitle = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  @media (max-width: 640px) {
    font-size: 15px;
    line-height: 19px;
  }
`

const SubmitContentTextarea = styled.textarea`
  width: 600px;
  min-height: 256px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;

  border-radius: 5px;

  margin: 30px 0 20px 0;

  padding: 20px 10px;
  box-sizing: border-box;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #000000;

  ::placeholder {
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 640px) {
    width: calc(100vw - 40px);
    min-height: 300px;
  }
`

const SubmitContentButton = styled.button`
  width: 330px;
  height: 65px;

  border-radius: 5px;
  border: none;
  background: none;

  opacity: 0.6;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 65px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  transition: background 0.3s ease;

  cursor: pointer;

  @media (min-width: 641px) {
    :hover {
      background: linear-gradient(
        180deg,
        #a35fff 0%,
        rgba(161, 95, 255, 0.3) 100%
      );
      backdrop-filter: blur(15px);
      opacity: 1;
    }
  }

  @media (max-width: 640px) {
    width: calc(100vw - 40px);
    height: 59px;

    line-height: 59px;
    font-size: 15px;

    background: linear-gradient(
      180deg,
      #a35fff 0%,
      rgba(161, 95, 255, 0.3) 100%
    );
    backdrop-filter: blur(15px);
    opacity: 1;
  }
`

const SubmitSpacer = styled.div`
  min-width: 100vw;
  min-height: 250px;
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`

type ImgType = {
  background: {
    publicURL: string
  }
}

const SubmitPage = () => {
  const backImg: ImgType = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/home.png" }) {
        publicURL
      }
    }
  `)
  const { setMode } = useContext(DarkmodeContext)

  useEffect(() => {
    setMode(false)
  }, [])

  return (
    <SubmitBlock>
      <Global styles={reset} />
      <SubmitBackgroundImage src={backImg.background.publicURL} />
      <SubmitContentForm
        method="post"
        action="https://script.google.com/macros/s/AKfycbz4ju8_lBPYf8p93dU_WM2ahYk-Ke79u_jvNU6nmMo12u6zi_4OTrwfaobife3t1tv6/exec"
        target="iframe1"
      >
        <SubmitContentTitle>submit your awesome idea!</SubmitContentTitle>
        <SubmitContentTextarea
          id="message"
          name="message"
          placeholder="Type Here"
        />
        <SubmitContentButton
          onClick={() => {
            alert('Thank you for your opinion.')
          }}
        >
          SUBMIT
        </SubmitContentButton>
        <SubmitSpacer />
      </SubmitContentForm>
      <iframe id="iframe1" name="iframe1" style={{ display: 'none' }}></iframe>
      {/* <PageNameIndicator
        style={{
          color: 'white',
        }}
      >
        submit&nbsp;idea
      </PageNameIndicator> */}
    </SubmitBlock>
  )
}

export default SubmitPage
// import React from 'react'

// const SubmitPage = () => {
//   return <></>
// }

// export default SubmitPage
