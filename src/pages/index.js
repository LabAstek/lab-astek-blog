import React from 'react'

import withStyles from 'material-ui/styles/withStyles'

import PostList from '../components/post/PostList'
import CenterContent from '../components/CenterContent'
import IndexFooterBar from '../components/IndexFooterBar'

const styles = theme => ({
  postListRoot: {
    // remove default '0'
    [theme.breakpoints.down('md')]: {
      padding: '0 10px',
    },
  },
})

const IndexPage = ({ data, classes }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div>
      <CenterContent
        style={{
          marginBottom: '50px',
        }}
      >
        <PostList
          posts={posts}
          classes={{
            root: classes.postListRoot,
          }}
        />
      </CenterContent>

      <IndexFooterBar />
    </div>
  )
}

// TODO: filter draft set to true
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] } # Note: we want to hide drafts, but only in production. # filter: { # frontmatter: { draft: { ne: true }} # }
    ) {
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
            coverImage {
              childImageSharp {
                sizes(maxWidth: 1200) {
                  src
                  srcSet
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`

export default withStyles(styles)(IndexPage)
