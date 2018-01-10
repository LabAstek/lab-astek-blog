/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/adding-markdown-pages.md
// Gatsby calls the createPages API (if present) at build time with injected parameters,
// boundActionCreators and graphql. Use the graphql to query Markdown file data as below.
// Next use createPage action creator to create a page for each of the Markdown files

const kebabCase = require('lodash/kebabCase')

const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

const tagPage = path.resolve('src/templates/tag/TagTemplate.js')
const categoryPage = path.resolve('src/templates/category/CategoryTemplate.js')

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
    console.error(
      `Unknown template ${templateName} for ${node.frontmatter.path}`
    )
    // template not found but we return a value to avoid unknwon errors.
    return TemplatesPaths[defaultTemplate]
  }

  return templatePath
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const draftFilter = `
    filter: {
      frontmatter: { draft: { ne: true }}
    }
  `

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        ${isProduction ? draftFilter : ''}
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250) # default excerpt (take first 250 chars from the content)
            html
            id
            frontmatter {
              date
              path # relative url to server the post. Ex: '/blog/test'
              title # title of the post
              template # define which template to use to display the post
              description # Custom excerpt
              author # author name / pseudo
              draft # Set to true if you don’t want a specific post to show up when the site is generated
              coverImage # imagetags to use as a cover
              tags # list of tags
              category # category of the post
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      /* eslint no-console: "off" */
      console.log(result.errors)
      return Promise.reject(result.errors)
    }

    // see https://github.com/Vagr9K/gatsby-advanced-starter/blob/master/gatsby-node.js
    const tagSet = new Set()
    const categorySet = new Set()

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.tags) {
        node.frontmatter.tags.forEach(tag => {
          tagSet.add(tag)
        })
      }

      if (node.frontmatter.category) {
        categorySet.add(node.frontmatter.category)
      }

      createPage({
        path: node.frontmatter.path,
        component: getComponent(node),
        context: {} // additional data can be passed via context
      })
    })

    const tagList = Array.from(tagSet)
    tagList.forEach(tag => {
      createPage({
        path: `/tags/${kebabCase(tag)}/`,
        component: tagPage,
        context: {
          tag
        }
      })
    })

    const categoryList = Array.from(categorySet)
    categoryList.forEach(category => {
      createPage({
        path: `/categories/${kebabCase(category)}/`,
        component: categoryPage,
        context: {
          category
        }
      })
    })
  })
}

//
// on create node
//

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === 'MarkdownRemark') { 
    //
    // toc
    //
    // const toc = {
    //   // set to false if toc is empty are should not be displayed
    //   isValid: false
    //   // TODO
    // }

    // createNodeField({ node, name: 'toc', value: toc })
  }
}
