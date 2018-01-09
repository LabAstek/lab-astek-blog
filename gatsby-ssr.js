/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// see
// ssr apis with gatsby
// https://www.gatsbyjs.org/docs/ssr-apis/
//
// gatsby, material-ui and ssr
// https://github.com/mui-org/material-ui/blob/v1-beta/examples/gatsby/gatsby-ssr.js

/* eslint-disable react/no-danger */

import React from 'react'
import { renderToString } from 'react-dom/server'
import { JssProvider } from 'react-jss'
import getPageContext from './src/modules/ssr/getPageContext'

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) => {
  // Get the context of the page to collected side effects.
  const pageContext = getPageContext()

  const bodyHTML = renderToString(
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      {React.cloneElement(bodyComponent, {
        pageContext
      })}
    </JssProvider>
  )

  replaceBodyHTMLString(bodyHTML)
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{
        __html: pageContext.sheetsRegistry.toString()
      }}
    />
  ])
}
