import styled from '@emotion/styled'

export const MoredBlock = styled.div`
  position: absolute;
  top: 311px;
  left: 0;

  width: 100%;
  height: calc(100vh - calc(100vh - 100%) - 311px);

  overflow: hidden;

  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  transition: opacity 0.5s ease, visibility 0.5s ease;

  @media (max-height: 859px) {
    top: 180px;
    height: calc(100vh - calc(100vh - 100%) - 180px);
  }

  @media (max-width: 767px) {
    top: 218px;
    left: 0;

    width: calc(100vw);
    height: calc(100vh - calc(100vh - 100%) - 218px);
    box-sizing: border-box;
  }
`

export const MoreContentContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 0px;

  width: calc(100vw - 60px);

  transition: opacity 0.5s ease, visibility 0.5s ease;

  @media (max-width: 767px) {
    top: 45px;
    left: 0;

    width: 100vw;
    padding: 0 20px;
    box-sizing: border-box;
  }
`

export const MoreContentTitle = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;

  color: #ffffff;

  word-break: break-all;

  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 19px;
  }
`

export const MoreContentContent = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;

  color: #ffffff;

  word-break: break-all;

  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 16px;
  }
`

export const MoreSpacer = styled.div`
  min-width: 100vw;
  min-height: 250px;
`
