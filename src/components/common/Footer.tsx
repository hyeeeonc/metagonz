import React, { FunctionComponent } from 'react'

import styled from '@emotion/styled'

import { Link } from 'gatsby'

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

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`

const FooterTitle = styled.div`
  width: 73px;
  height: 20px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  /* identical to box height, or 200% */
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
  return (
    <FooterBlock>
      <FooterTitle>© METAGONZ</FooterTitle>
      <FooterLinker to={'#'}>Privacy policy</FooterLinker>
      <FooterLinker to={'#'}>terms of use</FooterLinker>
    </FooterBlock>
  )
}

export default Footer
