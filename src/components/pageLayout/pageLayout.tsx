// layout for content pages, about, community, ...
import styled from '@emotion/styled'

export const PageBlock = styled.div`
  position: relative;
  max-width: 1728px;
  height: 100vh;

  @media (min-width: 1728px) {
    margin: 0 calc((100vw - 1728px) / 2);
  }
`

// 각 페이지 들어갔을 때 페이지 이름 띄워주는 것
export const PageNameIndicator = styled.div`
  position: fixed;
  width: 56px;
  height: 32px;
  left: 30px;
  top: 76px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 32px;
  text-transform: uppercase;

  color: #000000;

  @media (max-height: 779px) {
    top: 56px;
  }
  @media (max-width: 767px) {
    left: 20px;
    top: 110px;
  }
`

// 각 페이지가 개별적으로 가지는 네비게이터 바
export const PageNavContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 230px;

  display: flex;

  cursor: pointer;
  z-index: 2;

  transition: top 0.3s;

  @media (max-height: 779px) {
    top: 100px;
  }

  @media (max-width: 767px) {
    top: 192px;
    left: 20px;
  }
`

// 네비게이션 아이템들
export const PageNavItems = styled.div`
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 31px;
  text-transform: uppercase;

  color: #000000;

  opacity: 0.1;

  margin-right: 30px;

  transition: 0.5s;

  @media (min-width: 767px) {
    :hover {
      color: #6200ee;
    }
  }
  flex: none;

  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 25px;

    margin-right: 20px;
  }

  @media (max-width: 499px) {
    font-size: 13px;
    line-height: 16px;

    margin-right: 15px;
  }
`
