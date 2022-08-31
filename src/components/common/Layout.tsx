import React, { FunctionComponent } from 'react'

type LayoutProps = {
  children: any
}
const Layout: FunctionComponent<LayoutProps> = function ({ children }) {
  return (
    <>
      <div className="page">{children}</div>
    </>
  )
}

export default Layout
