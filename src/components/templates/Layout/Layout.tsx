import React, { ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode;
}


const Layout = ({ children } :LayoutProps) => {
  return (
    <div>
      <main id="content">{children}</main>
    </div>
  )
}

export { Layout }