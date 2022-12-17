import styled from '@emotion/styled'

export const MoredBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;

  transition: opacity 0.5s ease, visibility 0.5s ease;
`

export const MoreContentContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 311px;

  transition: opacity 0.5s ease, visibility 0.5s ease;

  @media (max-height: 859px) {
    top: 210px;
  }
`

export const MoreContentTitle = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;

  color: #ffffff;
`

export const MoreContentContent = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;

  color: #ffffff;

  padding-right: 30px;
`
