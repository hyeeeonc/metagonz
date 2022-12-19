import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
  MoreContentContainer,
  MoredBlock,
  MoreSpacer,
} from './moreSubPageLayout'
import { useMediaQuery } from 'react-responsive'

const CreatedCategoryContainer = styled.div`
  display: flex;

  @media (max-width: 767px) {
    justify-content: space-between;
  }
`

const CreatedLargeCategory = styled.div`
  width: 100px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 21px;

  color: #ffffff;

  @media (max-width: 767px) {
    width: 200px;
  }
`

const CreatedSubCartegory = styled.div`
  width: 200px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 21px;

  color: #ffffff;
`

const CreatedNameCartegory = styled.div`
  width: 200px;

  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 21px;

  color: #ffffff;

  @media (max-width: 767px) {
    width: 140px;
  }
`

const CreatedContour = styled.div`
  width: 470px;
  height: 1px;

  background: #ffffff;
  opacity: 0.2;

  margin: 20px 0;

  @media (max-width: 767px) {
    width: calc(100vw - 40px);
  }
`

const CreatedByMany = ({ tabNum }: { tabNum: number }) => {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  })

  return (
    <MoredBlock
      style={{
        visibility: tabNum == 4 ? 'visible' : 'hidden',
        opacity: tabNum == 4 ? 1 : 0,
        zIndex: tabNum != 4 ? 0 : 1,
      }}
    >
      <MoreContentContainer>
        {isPc ? (
          <>
            <CreatedCategoryContainer>
              <CreatedLargeCategory>
                CEO
                <br />
                CTO
                <br />
                CFO
              </CreatedLargeCategory>
              <CreatedSubCartegory>&nbsp;</CreatedSubCartegory>
              <CreatedNameCartegory>
                King Seong Bae
                <br />
                Tiger Lim
                <br />
                Daniel Jung
              </CreatedNameCartegory>
            </CreatedCategoryContainer>
            <CreatedContour />

            <CreatedCategoryContainer>
              <CreatedLargeCategory>Developer</CreatedLargeCategory>
              <CreatedSubCartegory>
                Director
                <br />
                Operator
                <br />
                <br />
                Project Manager
                <br />
                Smart Contract Developer
                <br />
                Operating Manager
              </CreatedSubCartegory>
              <CreatedNameCartegory>
                Jung Young Woo
                <br />
                Iyaan
                <br />
                <br />
                MIMI Art
                <br />
                Satellite
                <br />
                Caesar
              </CreatedNameCartegory>
            </CreatedCategoryContainer>
            <CreatedContour />

            <CreatedCategoryContainer>
              <CreatedLargeCategory>Artist</CreatedLargeCategory>
              <CreatedSubCartegory>
                2D Charactor Illustrator
                <br />
                3D Charactor Design
                <br />
                3D Graphic Designer
                <br />
                Motion Graphic Design
                <br />
                BI Designer
                <br />
                UI/UX Designer
                <br />
                Sound Designer
                <br />
                DJ, Producer
                <br />
                Fashion Stylelist
              </CreatedSubCartegory>
              <CreatedNameCartegory>
                Park Su Yeon
                <br />
                Zippycrew
                <br />
                Kang Joon Young
                <br />
                Overlay
                <br />
                DHL
                <br />
                TOYO FIRM
                <br />
                Freeatic Studio
                <br />
                Pure100%
                <br />
                Al+ro
              </CreatedNameCartegory>
            </CreatedCategoryContainer>
            <CreatedContour />

            <CreatedCategoryContainer>
              <CreatedLargeCategory>Marketing</CreatedLargeCategory>
              <CreatedSubCartegory>Communication & PR</CreatedSubCartegory>
              <CreatedNameCartegory>Co-Works</CreatedNameCartegory>
            </CreatedCategoryContainer>
          </>
        ) : (
          <>
            <CreatedCategoryContainer>
              <CreatedLargeCategory>
                CEO
                <br />
                CTO
                <br />
                CFO
              </CreatedLargeCategory>
              <CreatedNameCartegory>
                King Seong Bae
                <br />
                Tiger Lim
                <br />
                Daniel Jung
              </CreatedNameCartegory>
            </CreatedCategoryContainer>
            <CreatedContour />

            <CreatedLargeCategory
              style={{
                marginBottom: '20px',
              }}
            >
              Developer
            </CreatedLargeCategory>
            <CreatedCategoryContainer>
              <CreatedLargeCategory>
                Director
                <br />
                Operator
                <br />
                <br />
                Project Manager
                <br />
                Smart Contract Developer
                <br />
                Operating Manager
              </CreatedLargeCategory>
              <CreatedNameCartegory>
                Jung Young Woo
                <br />
                Iyaan
                <br />
                <br />
                MIMI Art
                <br />
                Satellite
                <br />
                Caesar
              </CreatedNameCartegory>
            </CreatedCategoryContainer>
            <CreatedContour />

            <CreatedLargeCategory
              style={{
                marginBottom: '20px',
              }}
            >
              Artist
            </CreatedLargeCategory>
            <CreatedCategoryContainer>
              <CreatedLargeCategory>
                2D Charactor Illustrator
                <br />
                3D Charactor Design
                <br />
                3D Graphic Designer
                <br />
                Motion Graphic Design
                <br />
                BI Designer
                <br />
                UI/UX Designer
                <br />
                Sound Designer
                <br />
                DJ, Producer
                <br />
                Fashion Stylelist
              </CreatedLargeCategory>
              <CreatedNameCartegory>
                Park Su Yeon
                <br />
                Zippycrew
                <br />
                Kang Joon Young
                <br />
                Overlay
                <br />
                DHL
                <br />
                TOYO FIRM
                <br />
                Freeatic Studio
                <br />
                Pure100%
                <br />
                Al+ro
              </CreatedNameCartegory>
            </CreatedCategoryContainer>
            <CreatedContour />

            <CreatedLargeCategory
              style={{
                marginBottom: '20px',
              }}
            >
              Marketing
            </CreatedLargeCategory>
            <CreatedCategoryContainer>
              <CreatedLargeCategory>Communication & PR</CreatedLargeCategory>
              <CreatedNameCartegory>Co-Works</CreatedNameCartegory>
            </CreatedCategoryContainer>
          </>
        )}
        <MoreSpacer />
      </MoreContentContainer>
    </MoredBlock>
  )
}

export default CreatedByMany
