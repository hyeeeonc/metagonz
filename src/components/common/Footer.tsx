import React, { FunctionComponent, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import styled from '@emotion/styled'

import { Link } from 'gatsby'
import { DarkmodeContext } from '../../contexts/DarkmodeProvider'

const FooterBlock = styled.footer`
  position: fixed;
  bottom: 20px;
  left: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 20px;

  width: 315px;
  height: 32px;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(5px);
  border-radius: 5px;

  z-index: 3;

  @media (max-width: 767px) {
    left: 10px;

    padding: 4px 10px;

    width: 295px;
    height: 28px;
    box-sizing: border-box;
  }
`

const FooterTitle = styled.div`
  width: 73px;
  height: 20px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  text-transform: uppercase;

  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`

const FooterLinker = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
`

type docxType = {
  policy: {
    publicURL: string
  }
  use: {
    publicURL: string
  }
}
const Footer: FunctionComponent = function () {
  const { isDarkmode } = useContext(DarkmodeContext)
  const docxSrc: docxType = useStaticQuery(graphql`
    query {
      policy: file(relativePath: { eq: "document/Privacy Policy.docx" }) {
        publicURL
      }
      use: file(relativePath: { eq: "document/Privacy Policy.docx" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterBlock
      style={{
        background: isDarkmode
          ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), rgba(255, 255, 255, 0.4)'
          : '',
      }}
    >
      <FooterTitle
        style={{
          color: isDarkmode ? 'black' : 'white',
        }}
      >
        © METAGONZ
      </FooterTitle>
      <FooterLinker
        style={{
          color: isDarkmode ? 'black' : 'white',
        }}
        href={docxSrc.policy.publicURL}
        download="Privacy Policy.docx"
      >
        Privacy policy
      </FooterLinker>
      <FooterLinker
        style={{
          color: isDarkmode ? 'black' : 'white',
        }}
        href={docxSrc.use.publicURL}
        download="1.7.7 TERMS OF USE.docx"
      >
        terms of use
      </FooterLinker>
    </FooterBlock>
  )
}

export default Footer
