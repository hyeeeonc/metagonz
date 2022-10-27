import React, { FunctionComponent, useContext } from 'react'

import styled from '@emotion/styled'

import { Link } from 'gatsby'
import { DarkmodeContext } from '../../contexts/DarkmodeProvider'

const FooterBlock = styled.nav`
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

const FooterLinker = styled(Link)`
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

const Footer: FunctionComponent = function () {
  const { isDarkmode } = useContext(DarkmodeContext)

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
        to={'#'}
      >
        Privacy policy
      </FooterLinker>
      <FooterLinker
        style={{
          color: isDarkmode ? 'black' : 'white',
        }}
        to={'#'}
      >
        terms of use
      </FooterLinker>
    </FooterBlock>
  )
}

export default Footer
