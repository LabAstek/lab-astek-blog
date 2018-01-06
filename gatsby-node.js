/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/adding-markdown-pages.md
// Gatsby calls the createPages API (if present) at build time with injected parameters,
// boundActionCreators and graphql. Use the graphql to query Markdown file data as below.
// Next use createPage action creator to create a page for each of the Markdown files

const path = require('path')

const Templates = {
  ARTICLE: 'article'
}

const TemplatesPaths = {
  [Templates.ARTICLE]: path.resolve(`src/templates/article/ArticleTemplate.js`)
}

const defaultTemplate = Templates.ARTICLE

// Allow to choose which template use for the given node.
// The default template is the ArticleTemplate
// A `template` info can be defined on articles meta data to choose a specific template.
// The `template` value can either one of the `Templates` values
const getComponent = node => {
  // find `template` configuration of the post.
  const templateName =
    node.frontmatter.template !== null
      ? node.frontmatter.template
      : defaultTemplate

  // get path for the template
  const templatePath = TemplatesPaths[templateName]

  if (templatePath === undefined) {
    console.error(`Unknown template ${templateName}`)
    // template not found but we return a value to avoid unknwon errors.
    return TemplatesPaths[defaultTemplate]
  }

  return templatePath
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path # relative url to server the post. Ex: '/blog/test'
              title # title of the post
              template # define which template to use to display the post
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: getComponent(node),
        context: {
        } // additional data can be passed via context
      })
    })
  })
}
