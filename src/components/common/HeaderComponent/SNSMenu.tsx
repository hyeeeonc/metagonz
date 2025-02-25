import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { DarkmodeContext } from '../../../contexts/DarkmodeProvider'
import { graphql, useStaticQuery } from 'gatsby'

const SNSBlock = styled.nav`
  position: fixed;
  right: 73px;
  top: 74px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 25px;
  height: 200px;

  transition: z-index: 1s linear;

  @media(max-width: 767px) {
    top: 70px;
    right: 67px;
  }
`

const SNSItems = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transform: translate(0px, -50px);

  .dark {
    filter: invert(100%);
  }
`

//interface SNSMenu
type ImgType = {
  octagonLogo: {
    publicURL: string
  }
}

const SNSMenu = ({
  snsOpenState,
  mobileBackground,
}: {
  snsOpenState: boolean
  mobileBackground: boolean
}) => {
  const { isDarkmode } = useContext(DarkmodeContext)
  const logo: ImgType = useStaticQuery(graphql`
    query {
      octagonLogo: file(relativePath: { eq: "images/octagonLogo.png" }) {
        publicURL
      }
    }
  `)
  return (
    <SNSBlock
      style={{
        visibility: snsOpenState ? 'visible' : 'hidden',
      }}
    >
      {/* opensea */}
      <SNSItems
        style={{
          transition: '0.3s ease',
          opacity: snsOpenState ? 1 : 0,
          transform: snsOpenState ? 'translate(0px, 0px)' : '',
        }}
        href="https://opensea.io/collection/metagonz"
        target="_blank"
      >
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3252 0C5.25075 0 0.325195 4.92556 0.325195 11C0.325195 17.0744 5.25075 22 11.3252 22C17.3996 22 22.3252 17.0744 22.3252 11C22.3252 4.92556 17.4021 0 11.3252 0ZM5.75186 11.3691L5.79831 11.2933L8.66075 6.81511C8.70231 6.75156 8.80253 6.75889 8.83186 6.82733C9.30853 7.898 9.72408 9.23267 9.52853 10.0613C9.44786 10.4036 9.22053 10.8631 8.96631 11.2909C8.93208 11.352 8.89786 11.4131 8.85875 11.4742C8.84164 11.5011 8.80986 11.5158 8.77808 11.5158H5.83742C5.7592 11.5158 5.71275 11.4302 5.75431 11.3667L5.75186 11.3691ZM18.5045 12.9091C18.5045 12.9507 18.4801 12.9849 18.4459 13.002C18.2234 13.0973 17.4656 13.4469 17.1503 13.8844C16.3461 15.004 15.7301 16.6051 14.3563 16.6051H8.62408C6.59031 16.6051 4.9452 14.9527 4.9452 12.914V12.848C4.9452 12.7942 4.9892 12.7502 5.04542 12.7502H8.24031C8.30386 12.7502 8.35031 12.8064 8.34542 12.87C8.32097 13.0778 8.36008 13.2904 8.46031 13.4836C8.64853 13.8698 9.04453 14.1093 9.46742 14.1093H11.049V12.8749H9.48453C9.40631 12.8749 9.35742 12.782 9.40386 12.716C9.42097 12.6891 9.43808 12.6622 9.46008 12.6329C9.60675 12.4227 9.81942 12.0951 10.0296 11.7236C10.1714 11.4718 10.3108 11.2053 10.4232 10.9364C10.4452 10.8876 10.4623 10.8362 10.4819 10.7898C10.5136 10.7042 10.543 10.6236 10.565 10.5429C10.587 10.4744 10.6065 10.4036 10.6236 10.3376C10.6774 10.1078 10.6994 9.86578 10.6994 9.61644C10.6994 9.51867 10.6945 9.41356 10.6872 9.31822C10.6823 9.21067 10.6701 9.10311 10.6554 8.99555C10.6456 8.90022 10.6285 8.80733 10.6114 8.70956C10.587 8.56778 10.5576 8.42356 10.521 8.27933L10.5088 8.22556C10.4819 8.12533 10.4574 8.03489 10.4281 7.93467C10.3376 7.62667 10.2374 7.326 10.1274 7.04244C10.0883 6.93 10.0443 6.82244 9.99786 6.71733C9.93186 6.55356 9.86342 6.40689 9.80231 6.26756C9.76808 6.204 9.74364 6.14778 9.71675 6.08667C9.68497 6.02067 9.65564 5.95467 9.62142 5.89111C9.59942 5.84222 9.57253 5.79578 9.55542 5.75178L9.36231 5.39489C9.33542 5.346 9.37942 5.28733 9.4332 5.302L10.6432 5.62956H10.653L10.8119 5.676L10.9879 5.72489L11.0514 5.742V5.02578C11.0514 4.67867 11.3276 4.39756 11.6748 4.39756C11.8459 4.39756 12.0023 4.46844 12.1123 4.58333C12.2248 4.69822 12.2956 4.85467 12.2956 5.02822V6.094L12.4252 6.12822C12.4252 6.12822 12.4448 6.138 12.4545 6.14289C12.4863 6.16489 12.5328 6.19911 12.589 6.24311C12.6354 6.27733 12.6843 6.32133 12.7405 6.36778C12.8579 6.46311 12.9972 6.58289 13.1488 6.72222C13.1879 6.75644 13.227 6.79311 13.2661 6.82978C13.4616 7.01311 13.6816 7.22578 13.8943 7.46289C13.953 7.53133 14.0116 7.59733 14.0703 7.67067C14.1265 7.744 14.1901 7.81489 14.2439 7.88333C14.3172 7.97867 14.3905 8.07644 14.459 8.18156C14.4908 8.23044 14.5274 8.28178 14.5568 8.32822C14.6448 8.45778 14.7205 8.59222 14.7914 8.72667C14.8232 8.78778 14.8525 8.85622 14.8794 8.92222C14.9601 9.10311 15.0236 9.28644 15.0652 9.46978C15.0774 9.50889 15.0872 9.55044 15.0921 9.58956V9.59933C15.1043 9.65311 15.1092 9.70933 15.1141 9.768C15.1312 9.95378 15.1239 10.1444 15.0823 10.3327C15.0652 10.4109 15.0432 10.4867 15.0163 10.5673C14.987 10.6431 14.9601 10.7238 14.9259 10.7996C14.8574 10.956 14.7792 11.1149 14.6839 11.2591C14.6521 11.3153 14.6154 11.3716 14.5812 11.4253C14.5421 11.4816 14.5005 11.5378 14.4639 11.5891C14.4125 11.6576 14.3612 11.7284 14.305 11.792C14.2561 11.858 14.2072 11.924 14.1534 11.9827C14.0776 12.0731 14.0068 12.1562 13.9285 12.2369C13.8845 12.2907 13.8356 12.3444 13.7843 12.3933C13.7354 12.4496 13.6865 12.496 13.6425 12.54C13.5668 12.6158 13.5032 12.6744 13.4519 12.7258L13.3272 12.8382C13.3101 12.8553 13.2856 12.8651 13.2612 12.8651H12.2981V14.0996H13.5105C13.7819 14.0996 14.0385 14.0042 14.2463 13.8258C14.3172 13.7647 14.6276 13.4958 14.9943 13.09C15.0065 13.0753 15.0236 13.0656 15.0408 13.0607L18.3872 12.0927C18.4508 12.0756 18.5119 12.122 18.5119 12.188V12.8969L18.5045 12.9091Z"
            fill={isDarkmode ? (mobileBackground ? 'white' : 'black') : 'white'}
          />
        </svg>
      </SNSItems>
      {/* discord */}
      <SNSItems
        style={{
          transition: '0.45s ease',
          opacity: snsOpenState ? 1 : 0,
          transform: snsOpenState ? 'translate(0px, 0px)' : '',
        }}
        href="https://discord.gg/metaoctagon"
        target="_blank"
      >
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6278 1.35115C18.6278 1.35115 18.613 1.33046 18.6012 1.3275C17.2619 0.712574 15.8281 0.260246 14.3262 8.31009e-05C14.2996 -0.00582969 14.273 0.00895228 14.2582 0.0326034C14.0749 0.360763 13.868 0.78944 13.7261 1.12647C12.1119 0.884045 10.5066 0.884045 8.92786 1.12647C8.78596 0.783527 8.5731 0.360763 8.38684 0.0326034C8.37206 0.00895228 8.34545 -0.00287329 8.31885 8.31009e-05C6.81996 0.257289 5.3861 0.709618 4.04686 1.32455C4.03503 1.33046 4.02616 1.33933 4.01729 1.3482C1.29741 5.4162 0.552402 9.38072 0.916038 13.2979C0.916038 13.3157 0.927864 13.3364 0.942646 13.3482C2.73718 14.6668 4.47849 15.4679 6.18433 15.9971C6.21094 16.006 6.2405 15.9971 6.25824 15.9735C6.66327 15.4236 7.02099 14.8412 7.33141 14.2292C7.34915 14.1937 7.33141 14.1523 7.29594 14.1376C6.72535 13.9217 6.18137 13.6557 5.65809 13.3571C5.6167 13.3334 5.61375 13.2743 5.65218 13.2447C5.76157 13.1619 5.87095 13.0762 5.97738 12.9905C5.99512 12.9757 6.02173 12.9727 6.04538 12.9816C9.48071 14.5515 13.1999 14.5515 16.5938 12.9816C16.6174 12.9698 16.6441 12.9727 16.6618 12.9905C16.7682 13.0762 16.8776 13.1649 16.987 13.2447C17.0254 13.2743 17.0225 13.3334 16.9811 13.3571C16.4578 13.6616 15.9138 13.9217 15.3432 14.1376C15.3048 14.1523 15.29 14.1937 15.3078 14.2322C15.6241 14.8441 15.9818 15.4236 16.378 15.9764C16.3957 16.0001 16.4253 16.009 16.4519 16.0001C18.1666 15.4709 19.905 14.6697 21.7024 13.3512C21.7172 13.3393 21.729 13.3216 21.729 13.3039C22.1666 8.77466 20.9959 4.84266 18.6248 1.35707L18.6278 1.35115ZM7.84582 10.9121C6.81109 10.9121 5.95965 9.96313 5.95965 8.79535C5.95965 7.62758 6.7963 6.67858 7.84582 6.67858C8.89534 6.67858 9.74974 7.63645 9.732 8.79535C9.732 9.96017 8.89534 10.9121 7.84582 10.9121ZM14.82 10.9121C13.7852 10.9121 12.9338 9.96313 12.9338 8.79535C12.9338 7.62758 13.7704 6.67858 14.82 6.67858C15.8695 6.67858 16.7239 7.63645 16.7061 8.79535C16.7061 9.96017 15.8783 10.9121 14.82 10.9121Z"
            fill={isDarkmode ? (mobileBackground ? 'white' : 'black') : 'white'}
          />
        </svg>
      </SNSItems>
      {/* twitter */}
      <SNSItems
        style={{
          transition: '0.55s ease',
          opacity: snsOpenState ? 1 : 0,
          transform: snsOpenState ? 'translate(0px, 0px)' : '',
        }}
        href="https://mobile.twitter.com/metagonz_og"
        target="_blank"
      >
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.1556 3.98297C18.1676 4.15656 18.1676 4.33015 18.1676 4.50534C18.1676 9.84347 14.1038 16 6.67296 16V15.9968C4.47787 16 2.32838 15.3712 0.480469 14.1857C0.799653 14.2241 1.12044 14.2433 1.44202 14.2441C3.26113 14.2457 5.02824 13.6353 6.45937 12.5113C4.73066 12.4785 3.21473 11.3514 2.68516 9.70588C3.29073 9.82268 3.9147 9.79868 4.50907 9.63628C2.62436 9.2555 1.26843 7.59959 1.26843 5.67648V5.62528C1.83 5.93807 2.45877 6.11166 3.10194 6.13086C1.32683 4.94452 0.779654 2.58304 1.8516 0.736729C3.9027 3.2606 6.92895 4.79493 10.1776 4.95732C9.852 3.55419 10.2968 2.08386 11.3463 1.09751C12.9734 -0.432013 15.5325 -0.353617 17.062 1.2727C17.9668 1.09431 18.834 0.762328 19.6275 0.291951C19.3259 1.2271 18.6948 2.02146 17.8516 2.52624C18.6524 2.43184 19.4347 2.21745 20.1715 1.89027C19.6291 2.70303 18.9459 3.411 18.1556 3.98297Z"
            fill={isDarkmode ? (mobileBackground ? 'white' : 'black') : 'white'}
          />
        </svg>
      </SNSItems>
      {/* telegram */}
      {/* <SNSItems
        style={{
          transition: '0.6s ease',
          opacity: snsOpenState ? 1 : 0,
          transform: snsOpenState ? 'translate(0px, 0px)' : '',
        }}
        href="https://t.me/metaoctagon"
      >
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3252 0C5.25011 0 0.325195 4.92492 0.325195 11C0.325195 17.0751 5.25011 22 11.3252 22C17.4003 22 22.3252 17.0751 22.3252 11C22.3252 4.92492 17.4003 0 11.3252 0ZM16.4239 7.48088C16.2585 9.2202 15.5422 13.4411 15.1776 15.3892C15.0234 16.2136 14.7198 16.4899 14.4259 16.5169C13.787 16.5757 13.3021 16.0948 12.6833 15.6893C11.715 15.0546 11.1681 14.6597 10.2285 14.0404C9.14235 13.3247 9.84658 12.9314 10.4654 12.2885C10.6274 12.1202 13.442 9.56032 13.4964 9.328C13.5032 9.29896 13.5096 9.19072 13.4451 9.13352C13.3807 9.07632 13.2858 9.0959 13.2174 9.11152C13.1204 9.13352 11.5738 10.1559 8.57761 12.1783C8.13871 12.4797 7.74096 12.6267 7.38478 12.619C6.99208 12.6104 6.2366 12.397 5.67494 12.2144C4.98612 11.9904 4.43854 11.8721 4.48628 11.4917C4.51114 11.2937 4.78394 11.0911 5.30468 10.8841C8.5114 9.48684 10.6498 8.56592 11.7197 8.12086C14.7746 6.85036 15.4093 6.62948 15.8229 6.62222C15.914 6.62068 16.1172 6.64312 16.2492 6.75004C16.3606 6.84024 16.3911 6.96234 16.4059 7.04792C16.4206 7.1335 16.4389 7.32864 16.4244 7.48088H16.4239Z"
            fill={isDarkmode ? 'black' : 'white'}
          />
        </svg>
      </SNSItems> */}
      {/* midium */}
      <SNSItems
        style={{
          transition: '0.7s ease',
          opacity: snsOpenState ? 1 : 0,
          transform: snsOpenState ? 'translate(0px, 0px)' : '',
        }}
        href="https://medium.com/metaoctagon"
        target="_blank"
      >
        <svg
          width="25"
          height="14"
          viewBox="0 0 25 14"
          fill={isDarkmode ? (mobileBackground ? 'white' : 'black') : 'white'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_743_1187)">
            <path
              d="M13.9046 7C13.9046 10.866 10.7918 14 6.95229 14C3.11274 14 0 10.866 0 7C0 3.134 3.11274 0 6.95229 0C10.7918 0 13.9046 3.134 13.9046 7Z"
              fill={
                isDarkmode ? (mobileBackground ? 'white' : 'black') : 'white'
              }
            />
            <path
              d="M21.5316 6.99988C21.5316 10.6391 19.9753 13.5891 18.0554 13.5891C16.1355 13.5891 14.5791 10.6389 14.5791 6.99988C14.5791 3.36087 16.1357 0.410645 18.0556 0.410645C19.9755 0.410645 21.5319 3.36087 21.5319 6.99988"
              fill={
                isDarkmode ? (mobileBackground ? 'white' : 'black') : 'white'
              }
            />
            <path
              d="M24.6513 6.99995C24.6513 10.2606 24.104 12.9037 23.4287 12.9037C22.7533 12.9037 22.2061 10.2606 22.2061 6.99995C22.2061 3.73935 22.7533 1.09619 23.4287 1.09619C24.104 1.09619 24.6513 3.73935 24.6513 6.99995Z"
              fill={
                isDarkmode ? (mobileBackground ? 'white' : 'black') : 'white'
              }
            />
          </g>
          <defs>
            <clipPath id="clip0_743_1187">
              <rect
                width="24.6513"
                height="14"
                fill={
                  isDarkmode ? (mobileBackground ? 'white' : 'black') : 'white'
                }
              />
            </clipPath>
          </defs>
        </svg>
      </SNSItems>
      {/* linktree */}
      <SNSItems
        style={{
          transition: '0.8s ease',
          opacity: snsOpenState ? 1 : 0,
          transform: snsOpenState ? 'translate(0px, 0px)' : '',
        }}
        href="https://linktr.ee/metaoctagon"
        target="_blank"
      >
        <svg
          width="21"
          height="24"
          viewBox="0 0 28 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5625 23.0132H16.5402V34.2007H11.5625V23.0132Z"
            fill={isDarkmode ? (mobileBackground ? 'white' : 'black') : 'white'}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.0529248 11.5608H8.51161L2.48932 5.8598L5.8078 2.47818L11.5376 8.33798V0H16.5153V8.33612L22.2433 2.47632L25.5617 5.85794L19.5395 11.558H28V16.273H19.4865L25.5367 22.1328L22.2182 25.4364L14 17.2052L5.7818 25.4364L2.46332 22.1328L8.51346 16.273H0V11.5608H0.0529248Z"
            fill={isDarkmode ? (mobileBackground ? 'white' : 'black') : 'white'}
          />
        </svg>
      </SNSItems>
      {/* metaoctagon */}
      <SNSItems
        style={{
          transition: '0.9s ease',
          opacity: snsOpenState ? 1 : 0,
          transform: snsOpenState ? 'translate(0px, 0px)' : '',
        }}
        href="https://metaoctagon.io/"
        target="_blank"
      >
        <img
          className={
            isDarkmode ? (mobileBackground ? 'white' : 'dark') : 'white'
          }
          style={{
            width: 23,
            filter: isDarkmode
              ? mobileBackground
                ? 'inver(0%)'
                : 'inver(100%)'
              : 'inver(0%)',
          }}
          src={logo.octagonLogo.publicURL}
        />
      </SNSItems>
    </SNSBlock>
  )
}

export default SNSMenu
