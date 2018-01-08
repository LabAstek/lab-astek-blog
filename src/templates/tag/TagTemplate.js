import React from 'react'
import Helmet from 'react-helmet'
import PostList from '../../components/post/PostList'

class TagTemplate extends React.PureComponent {
  render() {
    const { pathContext, data } = this.props
    const { tag } = pathContext
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}"`} />
        <PostList posts={posts} />
      </div>
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
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            # cover
            date
          }
        }
      }
    }
  }
`

export default TagTemplate
