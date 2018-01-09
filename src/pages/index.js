import React from 'react'

import PostList from '../components/post/PostList'
import CenterContent from '../components/CenterContent'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <CenterContent
      style={{
        marginBottom: '50px'
      }}
    >
      <PostList posts={posts} />
    </CenterContent>
  )
}

// TODO: filter draft set to true
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) # Note: we want to hide drafts, but only in production.
    # filter: {
    # frontmatter: { draft: { ne: true }}
    # }
    {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            description
            author
            coverImage
            tags
          }
          fields {
            slug
            # toc { ... }
          }
        }
      }
    }
  }
`

export default IndexPage
