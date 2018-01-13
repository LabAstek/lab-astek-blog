const { resolve } = require('path')
const metadata = require('../metadata')

// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/adding-markdown-pages.md
// Gatsby calls the createPages API (if present) at build time with injected parameters,
// boundActionCreators and graphql. Use the graphql to query Markdown file data as below.
// Next use createPage action creator to create a page for each of the Markdown files

const kebabCase = require('lodash/kebabCase')

const path = require('path')

const TagPage = path.resolve('src/templates/tag/TagTemplate.js')
const CategoryPage = path.resolve('src/templates/category/CategoryTemplate.js')
const AuthorPage = path.resolve('src/templates/author/AuthorTemplate.js')

// contains a list of all the different templates that can be used by a post
// It is defined on the `frontmatter.template` var.
const Templates = {
  ARTICLE: 'article' // default
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

module.exports = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        ${metadata.isProduction ? metadata.draftFilter : ''}
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
            fields {
              filepath
              githubPath
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
    const authorSet = new Set()

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }, index) => {
      if (node.frontmatter.tags) {
        node.frontmatter.tags.forEach(tag => {
          tagSet.add(tag)
        })
      }

      if (node.frontmatter.category) {
        categorySet.add(node.frontmatter.category)
      }

      authorSet.add(node.frontmatter.author)

      const prev = index === 0 ? false : posts[index - 1].node
      const next = index === posts.length - 1 ? false : posts[index + 1].node

      createPage({
        path: node.frontmatter.path,
        component: getComponent(node),
        context: {
          // additional data can be passed via context
          prev,
          next
        }
      })
    })

    const tagList = Array.from(tagSet)
    tagList.forEach(tag => {
      createPage({
        path: `/tags/${kebabCase(tag)}/`,
        component: TagPage,
        context: {
          tag
        }
      })
    })

    const categoryList = Array.from(categorySet)
    categoryList.forEach(category => {
      createPage({
        path: `/categories/${kebabCase(category)}/`,
        component: CategoryPage,
        context: {
          category
        }
      })
    })

    const authorList = Array.from(authorSet)
    authorList.forEach(author => {
      createPage({
        path: `/authors/${kebabCase(author)}`,
        component: AuthorPage,
        context: {
          authorUsername: author
        }
      })
    })
  })
}
