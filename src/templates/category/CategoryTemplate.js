import React from 'react'
import Helmet from 'react-helmet'
import PostList from '../../components/post/PostList'
import PostListContent from '../../components/post/PostListContent'
import Typography from 'material-ui/Typography/Typography'

class CategoryTemplate extends React.PureComponent {
  render() {
    const { pathContext, data } = this.props
    const { category } = pathContext
    const { edges: posts } = data.allMarkdownRemark

    return (
      <PostListContent title={`Posts in category "${category}"`}>
        <PostList posts={posts} />
      </PostListContent>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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

export default CategoryTemplate
