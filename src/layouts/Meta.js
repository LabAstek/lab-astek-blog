import React from 'react'

import Helmet from 'react-helmet'

import { getWebsiteTitle, getWebsiteDescription } from '../modules/config/'

const Meta = () => (
  <Helmet
    // (optional) used as a fallback when a template exists but a title is not defined
    defaultTitle={getWebsiteTitle()}
    // (optional) Useful when you want titles to inherit from a template:
    titleTemplate={`%s - ${getWebsiteTitle()}`}
  >
    <meta name="description" content={getWebsiteDescription()} />

    {/* Note: canonical is set with gatsby-plugin-canonical-urls */}

    {/* TODO: apple-touch-icon */}
    {/* <link rel="apple-touch-icon" href="http://mysite.com/img/apple-touch-icon-57x57.png" /> */}
    {/* <link rel="apple-touch-icon" sizes-"72x72" href="http://mysite.com/img/apple-touch-icon-72x72.png" /> */}

    {/* TODO: Windows Tiles */}

    {/* TODO: RSS feed */}

    {/* TODO: Twitter card */}

    {/* TODO: Facebook Open graph */}

    <html lang="en" />
  </Helmet>
)

export default Meta
