// website metadata (configuration, etc)
const metadata = require('./metadata')
const moment = require('moment')

//
// Gatsby configuration.
// Define the different plugins to use.
//
module.exports = {
  siteMetadata: {
    // required by rss and sitemap
    siteUrl: metadata.websiteUrl,
    rssFeedTitle: metadata.rssTitle,
    rssFeedDescription: metadata.description
  },
  plugins: [
    // read markdown files and parse them to be used as posts.
    // https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/adding-markdown-pages.md
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: 'markdown-pages'
      }
    },
    // required by gatsby-image
    // https://www.npmjs.com/package/gatsby-image
    // Creates ImageSharp nodes from image types that are supported by the Sharp image processing
    // library and provides fields in their GraphQL types for processing your images in a variety of
    // ways including resizing, cropping, and creating responsive images.
    // https://www.npmjs.com/package/gatsby-transformer-sharp
    `gatsby-transformer-sharp`,
    // required by gatsby-image
    // https://www.npmjs.com/package/gatsby-image
    // Exposes several image processing functions built on the Sharp image processing library.
    // This is a low-level helper plugin generally used by other Gatsby plugins. You generally s
    // houldn't be using this directly but might find it helpful if doing very custom image
    // processing.
    // https://www.npmjs.com/package/gatsby-plugin-sharp
    `gatsby-plugin-sharp`,
    // transform markdown files to html
    // https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/adding-markdown-pages.md
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Processes images in markdown so they can be used in the production build.
          // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images
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
          // add additionnal meta to external links on markdown.
          // https://github.com/JLongley/gatsby-remark-external-links
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow'
            }
          },
          // Custom plugin.
          // add 'id' to html titles (h1, etc)
          // plugins/gatsby-remark-titles
          {
            resolve: 'gatsby-remark-titles'
          },
          // Copies local files linked to/from markdown to your public folder.
          // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-copy-linked-files
          {
            resolve: 'gatsby-remark-copy-linked-files'
          },
          // Adds syntax highlighting to code blocks in markdown files using PrismJS
          // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs
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
          // Embeds the contents of specified files within Prism-formatted HTML blocks.
          // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-embed-snippet
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
          },
          // Wraps iframes or objects (e.g. embedded YouTube videos) within markdown files in a
          // responsive elastic container with a fixed aspect ratio. This ensures that the iframe
          // or object will scale proportionally and to the full width of its container.
          // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-responsive-iframe
          `gatsby-remark-responsive-iframe`,
          // This plug-in adds support for generating links to popular REPLs, using code in local
          // files to populate the contents of the REPL.
          // This enables example code to be stored along side of, and revisioned with,
          // your website content.
          {
            resolve: 'gatsby-remark-code-repls',
            options: {
              defaultText: 'Try it on CodePen',
              directory: `${__dirname}/posts/`,
              redirectTemplate: `${__dirname}/src/templates/codepen-example.js`,
              target: '_blank'
            }
          }
        ]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    // Use React 16 with your Gatsby v1 site. (Gatsby v1 ships with React 15 by default)
    // It automatically includes the two recommended polyfills for ES6 map/set so adding this to
    // your site is drop-in upgrade to React 16.
    // https://www.gatsbyjs.org/packages/gatsby-plugin-react-next/
    {
      resolve: `gatsby-plugin-react-next`
    },
    // Add canonical links to HTML pages Gatsby generates.
    // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-canonical-urls
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `${metadata.websiteUrl}`
      }
    },
    // This plugin takes your configuration and generates a web manifest file so our website can
    // be added to an Android homescreen
    // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${metadata.websiteName}`,
        short_name: `${metadata.websiteShortName}`,
        start_url: `/`,
        background_color: `${metadata.backgroundColor}`,
        theme_color: `${metadata.themeColor}`,
        display: `standalone`, // minimal-ui
        icons: [
          // Everything in /static will be copied to an equivalent
          // directory in /public during development and build, so
          // assuming your favicons are in /static/favicons,
          // you can reference them here
          {
            src: '/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-offline/README.md
    //
    // must be after gatsby-plugin-manifest configuration
    `gatsby-plugin-offline`,
    // Sets up google analytics
    // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-google-analytics/README.md
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `` // TODO: add trackingId
      }
    },
    // Create an RSS feed (or multiple feeds) for your Gatsby site.
    // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-feed
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
         {
          site {
            siteMetadata {
              title: rssFeedTitle
              description: rssFeedDescription
              siteUrl
              site_url: siteUrl
            }
          }
        }`,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign(
                  {},
                  {
                    title: edge.node.frontmatter.title,
                    description: edge.node.html,
                    date: moment(edge.node.frontmatter.date).format(
                      'MMMM DD, YYYY, h:mm A'
                    ),
                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path
                  }
                )
              })
            },
            query: `
              {
                  allMarkdownRemark
                  (limit: 10,
                  ${metadata.isProduction ? metadata.draftFilter : ''}
                  sort: { order: DESC, fields: [frontmatter___date] }
                  ) {
                    edges {
                      node {
                        frontmatter {
                          date
                          title
                          path
                        }
                        html
                      }
                    }
                  }
                }
            `,
            output: '/feed.xml'
          }
        ]
      }
    },
    // Intercepts local links from markdown and other non-react pages and does a client-side
    // pushState to avoid the browser having to refresh the page.
    // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-catch-links
    `gatsby-plugin-catch-links`,
    // Automatically shows the nprogress indicator when a page is delayed in loading
    // (which Gatsby considers as one second after clicking on a link).
    // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-nprogress
    //
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `${metadata.themeColor}`,
        showSpinner: true
      }
    },
    `gatsby-plugin-sitemap`,
    // Warning: MUST be in the end of the plugins array
    // Automatically generates a _headers file and a _redirects file at the root of the public
    // folder to configure HTTP headers and redirects on Netlify.
    // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify
    `gatsby-plugin-netlify`
  ]
}
