import AudioProvider from '../contexts/AudioProvider'
import React from 'react'

import Audio from './common/Audio'
import Footer from './common/Footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AudioProvider>
      {children}
      <Audio />
      <Footer />
    </AudioProvider>
  )
}

export default Layout
