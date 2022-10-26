import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const CharacterBlock = styled.main`
  position: relative;

  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;
`

const CharacterSelectorContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 311px;

  width: 543px;
  display: flex;
  justify-content: space-between;
`

const CharacterSelectoritems = styled.div`
  width: 27px;
  height: 16px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;

  color: #000000;

  opacity: 0.3;

  cursor: pointer;

  transition: 0.3s ease;
  :hover {
    color: #6200ee;
  }
`

const CharactorInfoContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 377px;

  display: flex;
`

const CharactorInfoHead = styled.div`
  width: 88px;
  height: 228px;

  font-weight: 700;

  margin-right: 50px;
`
const CharacterInfoData = styled.div`
  width: 88px;
  height: 228px;

  font-weight: 400;
`

const CharactorInfoCell = styled.div`
  font-family: 'SUIT';
  font-style: normal;

  font-size: 15px;
  line-height: 12px;

  margin: 10px 0;

  color: #000000;
`

const CharacterImage = styled.img`
  position: absolute;
  top: 0;
  right: 50px;
`

const Characters: FunctionComponent = function () {
  return (
    <CharacterBlock>
      <CharacterImage src="./static/images/charactertest.jpg" />

      <CharacterSelectorContainer>
        <CharacterSelectoritems>all</CharacterSelectoritems>
        <CharacterSelectoritems>ara</CharacterSelectoritems>
        <CharacterSelectoritems>sara</CharacterSelectoritems>
        <CharacterSelectoritems>kina</CharacterSelectoritems>
        <CharacterSelectoritems>yua</CharacterSelectoritems>
        <CharacterSelectoritems>jua</CharacterSelectoritems>
        <CharacterSelectoritems>dana</CharacterSelectoritems>
        <CharacterSelectoritems>roa</CharacterSelectoritems>
        <CharacterSelectoritems>sara</CharacterSelectoritems>
      </CharacterSelectorContainer>

      <CharactorInfoContainer>
        <CharactorInfoHead>
          <CharactorInfoCell>Name</CharactorInfoCell>
          <CharactorInfoCell>Main Job</CharactorInfoCell>
          <CharactorInfoCell>2nd Job</CharactorInfoCell>
          <CharactorInfoCell>Music Style</CharactorInfoCell>
          <CharactorInfoCell>Nationality</CharactorInfoCell>
          <CharactorInfoCell>Age</CharactorInfoCell>
          <CharactorInfoCell>Hight / cm</CharactorInfoCell>
          <CharactorInfoCell>Weight / Kg</CharactorInfoCell>
          <CharactorInfoCell>MBTI</CharactorInfoCell>
          <CharactorInfoCell>Likes</CharactorInfoCell>
        </CharactorInfoHead>
        <CharacterInfoData>
          <CharactorInfoCell>roa</CharactorInfoCell>
          <CharactorInfoCell>roa</CharactorInfoCell>
          <CharactorInfoCell>roa</CharactorInfoCell>
          <CharactorInfoCell>roa</CharactorInfoCell>
          <CharactorInfoCell>roa</CharactorInfoCell>
          <CharactorInfoCell>roa</CharactorInfoCell>
          <CharactorInfoCell>roa</CharactorInfoCell>
          <CharactorInfoCell>roa</CharactorInfoCell>
          <CharactorInfoCell>roa</CharactorInfoCell>
          <CharactorInfoCell>roa</CharactorInfoCell>
        </CharacterInfoData>
      </CharactorInfoContainer>
    </CharacterBlock>
  )
}

export default Characters
