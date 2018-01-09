// const metadata = require('./metadata.json')

module.exports = {
  plugins: [
    // read markdown files
    // https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/adding-markdown-pages.md
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: 'markdown-pages'
      }
    },
    // transform markdown files
    // https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/adding-markdown-pages.md
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images
          // Processes images in markdown so they can be used in the production build.
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: true,
              // Analyze images' pixel density to make decisions about
              // target image size. This is what GitHub is doing when
              // embedding images in tickets. This is a useful setting
              // for documentation pages with a lot of screenshots.
              // It can have unintended side effects on high pixel
              // density artworks.
              //
              // Example: A screenshot made on a retina screen with a
              // resolution of 144 (e.g. Macbook) and a width of 100px,
              // will be rendered at 50px.
              //
              // Defaults to false.
              sizeByPixelDensity: false
            }
          },
          // https://github.com/JLongley/gatsby-remark-external-links
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow'
            }
          },
          // add 'id' to html titles (h1, etc)
          // plugins/gatsby-remark-titles
          {
            resolve: 'gatsby-remark-titles'
          },
          // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-copy-linked-files
          // Copies local files linked to/from markdown to your public folder.
          {
            resolve: 'gatsby-remark-copy-linked-files'
          },
          // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs
          // Adds syntax highlighting to code blocks in markdown files using PrismJS
          // (http://prismjs.com/).
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-'
            }
          },
          // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-embed-snippet
          // Embeds the contents of specified files within Prism-formatted HTML blocks.
          {
            resolve: 'gatsby-remark-embed-snippet',
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',

              // Example code links are relative to this dir.
              // eg examples/path/to/file.js
              directory: `${__dirname}/posts/`
            }
          }
        ]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    // https://www.gatsbyjs.org/packages/gatsby-plugin-react-next/
    // Use React 16 with your Gatsby v1 site. (Gatsby v1 ships with React 15 by default)
    // It automatically includes the two recommended polyfills for ES6 map/set so adding this to 
    // your site is drop-in upgrade to React 16.
    {
      resolve: `gatsby-plugin-react-next`,
    },
    // This plugin takes your configuration and generates a web manifest file so our website can
    // be added to an Android homescreen
    // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `${metadata.websiteName}`,
    //     short_name: `${metadata.websiteShortName}`,
    //     start_url: `/`,
    //     background_color: `${metadata.backgroundColor}`,
    //     theme_color: `${metadata.themeColor}`,
    //     display: `minimal-ui`
    //   }
    // },
    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-offline/README.md
    //
    // must be after gatsby-plugin-manifest configuration
    // `gatsby-plugin-offline`,
    // Sets up google analytics
    // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-google-analytics/README.md
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `` // TODO: add trackingId
    //   }
    // }
  ]
}
