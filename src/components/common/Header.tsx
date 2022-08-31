import React, { FunctionComponent } from 'react'

import styled from '@emotion/styled'

import { Link } from 'gatsby'

const HeaderBlock = styled.header`
  width: 100%;
  height: 100px;
  background: black;
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
`

const HeaderNavContainer = styled.nav`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderNavItems = styled(Link)`
  display: flex;
  padding: 10px 15px;
  margin-left: 10px;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 5px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;

  color: #ffffff;

  cursor: pointer;
`

const Header: FunctionComponent = function () {
  return (
    <HeaderBlock>
      <HeaderNavContainer>
        <HeaderNavItems to={`/gallery`}>Gallery</HeaderNavItems>
        <HeaderNavItems to={`/characters`}>Characters</HeaderNavItems>
        <HeaderNavItems to={`/scenario`}>Scenario</HeaderNavItems>
        <HeaderNavItems to={`/roadmap`}>Roadmap</HeaderNavItems>
        <HeaderNavItems to={`/license`}>License</HeaderNavItems>
      </HeaderNavContainer>
    </HeaderBlock>
  )
}

export default Header
