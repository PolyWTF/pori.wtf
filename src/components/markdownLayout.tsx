import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Typography } from '@material-ui/core'

const defaultLayout = ({ children }: { children: JSX.Element }) => (
  <MDXProvider
    components={{
      h1: H1,
      h2: H2,
      h3: H3,
      p: P,
    }}
  >
    {children}
  </MDXProvider>
)

export default defaultLayout

type componentProps = {
  children: JSX.Element
}

const H1 = ({ children }: componentProps) => (
  <Typography variant="h3" component="h1">
    {children}
  </Typography>
)

const H2 = ({ children }: componentProps) => (
  <Typography variant="h4" component="h1">
    {children}
  </Typography>
)

const H3 = ({ children }: componentProps) => (
  <Typography variant="h5" component="h1">
    {children}
  </Typography>
)

const P = ({ children }: componentProps) => (
  <Typography variant="body1" component="p">
    {children}
  </Typography>
)
