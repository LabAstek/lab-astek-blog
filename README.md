# astek-community-website

## TODO

- [] favicon
- [] Image viewer
- [] Environment variables (https://www.gatsbyjs.org/docs/environment-variables/)
- [] Helmet SEO tags (og, etc) on ArticleTemplate
  - https://github.com/Vagr9K/gatsby-advanced-starter/blob/master/src/components/SEO/SEO.jsx
- [] Sitemap (https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/)
- [] Syntax highlighting (https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)
- [] Analytics

## What's included

- jest for testing
- React 16.
- Eslint in dev mode with the airbnb config and prettier formatting rules.
- [Prettier](https://github.com/prettier/prettier)
- [normalize.css](https://github.com/necolas/normalize.css)
- [React Helmet](https://github.com/nfl/react-helmet)
- [Material ui](https://material-ui-next.com)

## Development

`npm run dev` will start a development server on port `8042`.

### Css-in-js

https://github.com/cssinjs/jss

## Plugins

The gatsby plugins can be found on https://github.com/gatsbyjs/gatsby/tree/master/packages.

### gatsby-link

A `<Link>` component for Gatsby.

https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-link

### gatsby-plugin-react-helmet

Provides drop-in support for server rendering data added with React Helmet.

https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet

### gatsby-remark-images

Processes images in markdown so they can be used in the production build.

https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images

## Inspirations

Inspirations for gatsby can be found on gatsby [starters](https://www.gatsbyjs.org/docs/gatsby-starters/).

- https://github.com/saschajullmann/gatsby-starter-gatsbythemes


# Architecture

We use [Gatsby](https://www.gatsbyjs.org/) under the hood.

# Directories 

## plugins

Contains our custom gatsby plugins.

## post

A git submodule. Contains the posts of the blog

## public

Contains the builded public data

## src

### components

Set of :
- generic components
- components used by the Pages defined on `pages`

### layouts

Contains our Layout components. The Layout is the body of our app.

### modules

A module can contains :

- utilities
- constants (`constants` file or directory)
- formatters (`format` file or directory)
- configuration

### pages

Contains the different pages of our blog.

Warning: Bugs can appear with gatsby if there is other files than pages files in the root of this directory.
For components, use `/components` directory.

### style

Our sass style code

### templates

Contains our gatsby `templates`.

Templates are linked to an url on `gatsby-node.js`
