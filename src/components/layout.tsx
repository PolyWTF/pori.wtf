import React from 'react'

import Top from './top'

type LayoutProps = {
  title: string
  children: JSX.elements
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Top title={props.title} />
      <main>{props.children}</main>
    </>
  )
}
export default Layout
