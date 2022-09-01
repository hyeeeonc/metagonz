import React from 'react'

import Audio from './common/Audio'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <Audio />
    </>
  )
}

export default Layout
