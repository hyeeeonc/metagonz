import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const MenuBackground = styled.div`
  position: fixed;
  left: -1px;
  top: -1px;

  display: flex;
  justify-content: center;

  width: calc(100vw + 2px);
  height: calc(100vh - calc(100vh - 100%) + 2px);

  background: linear-gradient(180deg, #1c0044 0%, #6200ee 100%);
  backdrop-filter: blur(15px);
`

const MenuBlock = styled.div`
  position: relative;

  max-width: 1728px;
`

const Menu: FunctionComponent = function () {
  return (
    <MenuBackground>
      <MenuBlock></MenuBlock>
    </MenuBackground>
  )
}

export default Menu
