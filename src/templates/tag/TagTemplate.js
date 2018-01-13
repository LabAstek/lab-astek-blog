import React from 'react'
import Helmet from 'react-helmet'

import Page from '../../components/Page'
import PostList from '../../components/post/PostList'
import PostListContent from '../../components/post/PostListContent'

class TagTemplate extends React.PureComponent {
  render() {
    const { pathContext, data } = this.props
    const { tag } = pathContext
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Page title={`Posts tagged as "${tag}"`}>
        <PostListContent>
          <PostList posts={posts} />
        </PostListContent>
      </Page>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            coverImage
          }
        }
      }
    }
  }
`

export default TagTemplate
