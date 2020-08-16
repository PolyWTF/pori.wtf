import React from 'react'
import { navigate, useStaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  CardActionArea,
} from '@material-ui/core'
import { ArticleDataQuery } from '../../types/graphql-types'

const BlogIndexStyles = makeStyles({
  articleCard: {
    marginBottom: 16,
  },
})

const BlogIndex: React.FC<{
  data: ArticleDataQuery
  location: string
}> = () => {
  const classes = BlogIndexStyles()
  const data = useStaticQuery<ArticleDataQuery>(graphql`
    query articleData {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
            excerpt(truncate: true, pruneLength: 160)
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout title={siteTitle}>
      <SEO title="All posts" />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{}}
      >
        {posts.map(({ node }) => {
          return (
            <Grid
              item
              lg={4}
              className={classes.articleCard}
              key={node.fields.slug}
            >
              <ArticleLinkCard
                title={node.frontmatter.title}
                excerpt={node.excerpt}
                slug={node.fields.slug}
                date={node.frontmatter.date}
              />
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default BlogIndex

const ArticleLinkCard = (props: ArticleLinkCardProps) => {
  const [elevation, setElevation] = React.useState<1 | 8>(1)
  return (
    <Card
      elevation={elevation}
      onMouseEnter={() => setElevation(8)}
      onMouseLeave={() => setElevation(1)}
    >
      <CardActionArea onClick={() => navigate(props.slug)}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography color="textSecondary" component="p">
                {props.date}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{props.excerpt}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

type ArticleLinkCardProps = {
  title: string
  excerpt: string
  slug: string
  date: number
}
