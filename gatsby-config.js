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
          }
        ]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
