import React from 'react'
import { Helmet } from 'react-helmet'
import { useMediaQuery } from 'react-responsive'
import { graphql, useStaticQuery } from 'gatsby'

import Audio from './common/Audio'
import Footer from './common/Footer'
import Header from './common/Header'
import AppContextProvier from '../contexts/AppContextProvider'
import MobileTemp from './temp/MobileTemp'

type LayoutProps = {
  children: React.ReactNode
}

type faviconType = {
  file: {
    publicURL: string
  }
}

const Layout = ({ children }: LayoutProps) => {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  })
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  })

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
        <meta property="og:title" content="METAGONZ" />
        <meta property="og:url" content="https://metagonz.io" />
        <meta property="og:site_name" content="METAGONZ" />
        <meta
          property="og:image"
          content="https://metagonz.io/assets/thumb.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:description" content="METAGONZ BE A PART OF US" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="METAGONZ" />
        <meta name="twitter:url" content="https://metagonz.io" />
        <meta
          name="twitter:image"
          content="https://metagonz.io/assets/thumb.png"
        />
        <meta name="twitter:description" content="METAGONZ BE A PART OF US" />

        <title>METAGONZ</title>
      </Helmet>
      {isPc && (
        <>
          {children}
          <Header />
          <Audio />
          <Footer />
        </>
      )}
      {isMobile && (
        <>
          <MobileTemp />
        </>
      )}
    </AppContextProvier>
  )
}

export default Layout
