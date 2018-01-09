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

import Grid from 'material-ui/Grid'
import { generateToc } from '../../modules/post/utils/toc'

const ArticleTemplate = ({
  data // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, excerpt } = formatPost(markdownRemark)
  return (
    <div>
      <ArticleHelmet excerpt={excerpt} frontmatter={frontmatter} />
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

          <CenterContent>
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </CenterContent>
        </Grid>

        <Grid item xs={12} md={2}>
          <ArticleMeta frontmatter={frontmatter} toc={generateToc(html)} />
        </Grid>
      </Grid>
    </div>
  )
}

ArticleTemplate.propTypes = {
  // injected by the GraphQL request `pageQuery`
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
        coverImage
        tags
        category
      }
      fields {
        slug
        # toc { ... }
      }
    }
  }
`

export default ArticleTemplate
