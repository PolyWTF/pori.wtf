import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

type NotFoundPageProps = {
  data: pageQuery
  location: string
}

const NotFoundPage = ({ data }: NotFoundPageProps) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query page {
    site {
      siteMetadata {
        title
      }
    }
  }
`
