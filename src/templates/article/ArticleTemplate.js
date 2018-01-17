//
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/adding-markdown-pages.md
//
// We read our graphql API to retrieve the data.
// 1. A GraphQL query is made in the second half of the file to get the Markdown data. Gatsby has
// automagically given you all the Markdown metadata and HTML in this query's result.
// Note: To learn more about GraphQL, https://www.howtographql.com/
// 2. The result of the query is injected by Gatsby into the Template component as data.
// markdownRemark is the property that we find has all the details of the Markdown file.
// We can use that to construct a template for our blogpost view. Since it's a React component, you
// could style it with any of the recommended styling systems in Gatsby.
//
//
import React from 'react'
import PropTypes from 'prop-types'

import { formatPost } from '../../modules/post/format'

import './article-content.scss'

import CenterContent from '../../components/CenterContent'

import ArticleMeta from './components/ArticleMeta'
import ArticleHelmet from './components/ArticleHelmet'
import Navigation from './components/Navigation'

import Grid from 'material-ui/Grid'
import { generateToc } from '../../modules/post/utils/toc'
import CoverImage from './components/CoverImage'
import MobileMetaOnHeader from './components/MobileMetaOnHeader'

const ArticleTemplate = ({
  data, // this prop will be injected by the GraphQL query below.
  pathContext,
}) => {
  const markdownRemark = formatPost(data.markdownRemark) // data.markdownRemark holds our post data
  const { frontmatter, html, excerpt } = markdownRemark
  const { next, prev } = pathContext

  return (
    <div>
      <ArticleHelmet markdownRemark={markdownRemark} />

      <Grid container spacing={0}>
        {/* Allow us to center our article-content */}
        {/* TODO: hide on xs / sm */}
        <Grid item xs={12} md={2} />

        <Grid item xs={12} md={8}>
          <h1
            style={{
              color: '#636363', // TODO: use material-ui theme
              fontSize: '38px',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            {frontmatter.title}
          </h1>

          <MobileMetaOnHeader markdownRemark={markdownRemark} />

          <CoverImage frontmatter={frontmatter} />

          <CenterContent>
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </CenterContent>
        </Grid>

        <Grid item xs={12} md={2}>
          <ArticleMeta
            toc={generateToc(html)}
            markdownRemark={markdownRemark}
          />
        </Grid>

        <Grid item xs={12}>
          <Navigation prev={prev} next={next} />
        </Grid>
      </Grid>
    </div>
  )
}

ArticleTemplate.propTypes = {
  // injected by the GraphQL request `pageQuery`
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        author
        draft
        coverImage {
          childImageSharp {
            sizes(maxWidth: 1200) {
              src
              srcSet
            }
          }
        }
        tags
        category
      }
      fields {
        filepath
        githubPath
      }
    }
  }
`

export default ArticleTemplate
