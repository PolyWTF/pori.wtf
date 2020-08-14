import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  Fab,
  Grid,
  Typography,
  Card,
  CardContent,
  useScrollTrigger,
  Zoom,
  Box,
  makeStyles,
  createStyles,
} from '@material-ui/core'

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { BlogPostBySlugQuery } from '../../types/graphql-types'

type BlogPostTemplate = {
  data: BlogPostBySlugQuery
}

const BlogPostTemplate = (props: BlogPostTemplate) => {
  const classes = BlogPostTemplateStyles()

  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <>
      <Layout title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Grid
          container
          spacing={0}
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.containerGrid}
        >
          <Grid item lg={5}>
            <Article
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              html={post.html}
            />
          </Grid>
        </Grid>
      </Layout>
      <ScrollToTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>
    </>
  )
}

const BlogPostTemplateStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerGrid: {
      marginBottom: theme.spacing(2),
    },
  })
)

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

type ArticleProps = {
  title: string
  description: string
  html: string
}

const Article = (props: ArticleProps) => {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          wrap="wrap"
          spacing={2}
          direction="column"
          justify="center"
        >
          <Grid item xs>
            <Typography variant="h4" component="h1" id="back-to-top">
              {props.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              color="textSecondary"
            >
              {props.description}
            </Typography>
          </Grid>
          <Grid item xs>
            <p dangerouslySetInnerHTML={{ __html: props.html }} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

type ScrollToTopProps = {
  children: React.ReactElement
}

const ScrollToTop = (props: ScrollToTopProps) => {
  const classes = ScrollToTopStyles()
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const another = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top')
    if (another) another.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <Zoom in={trigger}>
      <Box onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </Box>
    </Zoom>
  )
}

const ScrollToTopStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
  },
})
