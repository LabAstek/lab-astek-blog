import React from 'react'
import Helmet from 'react-helmet'

import { formatAuthor } from '../../modules/author/format'

import Page from '../../components/Page'
import PostList from '../../components/post/PostList'
import PostListContent from '../../components/post/PostListContent'
import AuthorView from './components/AuthorView'

class AuthorTemplate extends React.PureComponent {
  render() {
    const { pathContext, data, classes } = this.props
    const { authorUsername } = pathContext
    const { edges: posts } = data.allMarkdownRemark

    const author = formatAuthor(authorUsername)

    return (
      <Page>
        <AuthorView author={author} />
        <PostListContent>
          <PostList posts={posts} />
        </PostListContent>
      </Page>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AuthorPosts($author: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $author } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            path
            date
            description
            author
            coverImage {
              childImageSharp {
                sizes(maxWidth: 1200) {
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`

export default AuthorTemplate
