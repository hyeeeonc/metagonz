import AudioProvider from '../contexts/AudioProvider'
import React from 'react'

import Audio from './common/Audio'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AudioProvider>
      {children}
      <Audio />
    </AudioProvider>
  )
}

export default Layout
