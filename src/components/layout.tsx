import React from 'react'

import Audio from './common/Audio'
import Footer from './common/Footer'
import Header from './common/Header'
import AppContextProvier from '../contexts/AppContextProvider'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AppContextProvier>
      {children}
      <Header />
      <Audio />
      <Footer />
    </AppContextProvier>
  )
}

export default Layout
