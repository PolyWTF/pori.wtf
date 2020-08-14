import React from 'react'
import { navigate, Link, useStaticQuery, graphql } from 'gatsby'

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
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
            excerpt(truncate: true, pruneLength: 180)
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

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

const useArticleCardStyles = makeStyles({
  linkArea: {
    marginTop: '8px',
  },
  link: {
    fontFamily: 'Noto Sans JP',
  },
})

export default BlogIndex

const ArticleLinkCard = (props: ArticleLinkCardProps) => {
  const [elevation, setElevation] = React.useState<1 | 4>(1)
  const classes = useArticleCardStyles()
  return (
    <Card
      elevation={elevation}
      onMouseEnter={() => setElevation(4)}
      onMouseLeave={() => setElevation(1)}
    >
      <CardContent>
        <Grid container>
          <Grid item>
            <CardActionArea onClick={() => navigate(props.slug)}>
              <Typography variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography color="textSecondary">{props.excerpt}</Typography>
            </CardActionArea>
          </Grid>
          <Grid container item justify="space-between" alignItems="flex-end">
            <Grid item>
              <Link to={props.slug} className={classes.link}>
                続きを読む
              </Link>
            </Grid>
            <Grid item>
              <Typography color="textSecondary">{props.date}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

type ArticleLinkCardProps = {
  title: string
  excerpt: string
  slug: string
  date: number
}
