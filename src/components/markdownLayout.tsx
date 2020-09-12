import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Link, Typography } from '@material-ui/core'

const defaultLayout = ({ children }: { children: JSX.Element }) => (
  <MDXProvider
    components={{
      h1: H1,
      h2: H2,
      h3: H3,
      p: P,
      a: A,
    }}
  >
    {children}
  </MDXProvider>
)

export default defaultLayout

type ComponentProps = {
  children: JSX.Element
}

type AComponentProps = ComponentProps & {
  title: string
  url: string
}

const H1 = ({ children }: ComponentProps) => (
  <Typography variant="h3" component="h1">
    {children}
  </Typography>
)

const H2 = ({ children }: ComponentProps) => (
  <Typography variant="h4" component="h1">
    {children}
  </Typography>
)

const H3 = ({ children }: ComponentProps) => (
  <Typography variant="h5" component="h1">
    {children}
  </Typography>
)

const P = ({ children }: ComponentProps) => (
  <Typography variant="body1" component="p">
    {children}
  </Typography>
)

const A = (props: AComponentProps) => (
  <Link href={props.url}>{props.title}</Link>
)
