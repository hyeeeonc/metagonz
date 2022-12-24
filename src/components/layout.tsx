import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import Audio from './common/Audio'
import Footer from './common/Footer'
import Header from './common/Header'
import AppContextProvier from '../contexts/AppContextProvider'

type LayoutProps = {
  children: React.ReactNode
}

type faviconType = {
  file: {
    publicURL: string
  }
}

const Layout = ({ children }: LayoutProps) => {
  const favicon: faviconType = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/favicon.ico" }) {
        publicURL
      }
    }
  `)

  return (
    <AppContextProvier>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="description" content="METAGONZ" />
        <meta
          name="keywords"
          content="metagonz, metaoctagon, 메타곤즈, 메타곤, 메타옥타곤, 옥타곤, cryptotoken, nft, NFT, Nft, opensea, korea, art, Opensea, blockchain, 엔에프티, 코인, 토큰, 블록체인, 가상화폐, 메타버스, 일러스트, 카카오, 이더리움, 오픈씨, 코인, 디파이"
        />

        <meta name="author" content="MetaPlayer" />
        <link rel="canonical" href="https://metagonz.io" />

        <link
          rel="shortcut icon"
          href={favicon.file.publicURL}
          type="image/x-icon"
        />
        <link rel="icon" href="./assets/favicon.ico" type="image/x-icon" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Metagonz ㅣ 메타곤즈 -  “ BE A PART OF US “"
        />
        <meta property="og:url" content="https://metagonz.io" />
        <meta property="og:site_name" content="METAGONZ" />
        <meta
          property="og:image"
          content="https://metagonz.io/assets/thumb.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content="Metagonz is an iconic NFT / Avatar project representing the Web3 based MetaOctagon / Metaverse /  MOTG Token."
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Metagonz ㅣ 메타곤즈 -  “ BE A PART OF US “"
        />
        <meta name="twitter:url" content="https://metagonz.io" />
        <meta
          name="twitter:image"
          content="https://metagonz.io/assets/thumb.png"
        />
        <meta
          name="twitter:description"
          content="Metagonz is an iconic NFT / Avatar project representing the Web3 based MetaOctagon / Metaverse /  MOTG Token."
        />

        {/* google web master meta tag */}
        <meta
          name="google-site-verification"
          content="SHwn9joo0INTGEUSNuc0D0tyPsCAqfSAbv1ROF3GNv4"
        />

        {/* naver web master meta tag */}
        <meta
          name="naver-site-verification"
          content="78a75c6b8911dd784f32925cc742155c6e39124d"
        />
        <title>METAGONZ</title>
      </Helmet>

      {children}
      <Header />
      <Audio />
      <Footer />
    </AppContextProvier>
  )
}

export default Layout
