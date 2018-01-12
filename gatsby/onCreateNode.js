//
// on create node
//
const metadata = require('../metadata')

const NodeType = {
  MarkdownRemark: 'MarkdownRemark',
  SitePage: 'SitePage',
}

// Add custom fields to MarkdownRemark nodes
module.exports = exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  switch (node.internal.type) {
    case NodeType.MarkdownRemark:
      const { relativePath } = getNode(node.parent)

      createNodeField({
        node,
        name: 'filepath',
        value: relativePath
      })

      // Used to generate a GitHub edit link.
      createNodeField({
        node,
        name: 'githubPath',
        value: `${
          metadata.githubArticlesRepositoryUrl
        }/tree/master/content/${relativePath}`
      })

      //
      // toc
      //
      // const toc = {
      //   // set to false if toc is empty are should not be displayed
      //   isValid: false
      //   // TODO
      // }

      // createNodeField({ node, name: 'toc', value: toc })
      break

    default:
  }
}
