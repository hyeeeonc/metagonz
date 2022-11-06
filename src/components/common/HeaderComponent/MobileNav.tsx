import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { DarkmodeContext } from '../../../contexts/DarkmodeProvider'

const MobileNavBlock = styled.nav`
  position: fixed;
  right: 85px;
  top: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 74px;
  height: 137px;

  transition: z-index: 1s linear;
`

const MobileItems = styled(Link)`
  cursor: pointer;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  /* identical to box height */
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  color: #ffffff;

  transform: translate(0px, -50px);
`

//interface SNSMenu

const MobileNav = ({ mobileNavOpenState }: { mobileNavOpenState: boolean }) => {
  const { isDarkmode } = useContext(DarkmodeContext)

  return (
    <MobileNavBlock
      style={{
        visibility: mobileNavOpenState ? 'visible' : 'hidden',
      }}
    >
      <MobileItems
        style={{
          transition: '0.3s ease',
          opacity: mobileNavOpenState ? 1 : 0,
          transform: mobileNavOpenState ? 'translate(0px, 0px)' : '',
        }}
        onClick={() => {
          alert('Comming Soon')
        }}
        to={`#`}
      >
        Minting
      </MobileItems>
      <MobileItems
        style={{
          transition: '0.5s ease',
          opacity: mobileNavOpenState ? 1 : 0,
          transform: mobileNavOpenState ? 'translate(0px, 0px)' : '',
        }}
        onClick={() => {
          alert('Comming Soon')
        }}
        to={`#`}
      >
        Gallery
      </MobileItems>
      <MobileItems
        style={{
          transition: '0.9s ease',
          opacity: mobileNavOpenState ? 1 : 0,
          transform: mobileNavOpenState ? 'translate(0px, 0px)' : '',
        }}
        onClick={() => {
          alert('Comming Soon')
        }}
        to={`#`}
      >
        my page
      </MobileItems>
    </MobileNavBlock>
  )
}

export default MobileNav
