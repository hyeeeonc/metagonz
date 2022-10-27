import React, { FunctionComponent, useContext, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { DarkmodeContext } from '../../contexts/DarkmodeProvider'

const StoryBlock = styled.main`
  position: relative;

  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;
`

const CharactorContentContainer = styled.div`
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
