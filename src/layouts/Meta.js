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
    <html lang="en" />

    <meta name="description" content={getWebsiteDescription()} />

    {/* Note: canonical is set with gatsby-plugin-canonical-urls */}

    {/* 
       // 
       // apple-touch-icon 
       // https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html
       //
     */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/apple-touch-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/apple-touch-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/apple-touch-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/apple-touch-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/apple-touch-icon.png"
    />

    {/* 
       // 
       // favicon
       //
     */}
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />

    {/* 
       // 
       // safari icon
       //
     */}
    <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#e53935" />

    {/* 
       // 
       // theme
       //
     */}
    <meta name="theme-color" content="#ffffff" />

    {/* 
      // 
      // Windows Tiles 
      // https://msdn.microsoft.com/en-us/library/dn455106(v=vs.85).aspx 
     */}
    <meta name="msapplication-config" content="/browserconfig.xml" />

    {/* TODO: RSS feed */}

    {/* TODO: Twitter card */}

    {/* TODO: Facebook Open graph */}
  </Helmet>
)

export default Meta
