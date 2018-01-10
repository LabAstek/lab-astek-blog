// website metadata (configuration, etc)
const metadata = require('./metadata.json')

//
// Gatsby configuration.
// Define the different plugins to use.
//
module.exports = {
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
      resolve: `gatsby-plugin-react-next`,
    },
    // Add canonical links to HTML pages Gatsby generates.
    // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-canonical-urls
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `${metadata.websiteUrl}`,
      },
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
        display: `minimal-ui`,
        icons: [
          // TODO: icons
          // {
          //   // Everything in /static will be copied to an equivalent
          //   // directory in /public during development and build, so
          //   // assuming your favicons are in /static/favicons,
          //   // you can reference them here
          //   src: `/favicons/android-chrome-192x192.png`,
          //   sizes: `192x192`,
          //   type: `image/png`,
          // },
          // {
          //   src: `/favicons/android-chrome-512x512.png`,
          //   sizes: `512x512`,
          //   type: `image/png`,
          // },
        ],
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
    }
  ]
}
