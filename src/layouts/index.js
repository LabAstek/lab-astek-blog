import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'typeface-roboto'
import 'normalize.css'

import { getWebsiteTitle, getDefaultMeta } from '../modules/config/'

import Body from './Body'

// Note: gatsby handle badly the reloading of this page with HMR, so all our code goes to Content.

const TemplateWrapper = ({ children }) => (
  <div
    style={{
      height: '100%'
    }}
  >
    <Helmet title={getWebsiteTitle()} meta={getDefaultMeta()} />

    <Body>{children}</Body>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired
}

export default TemplateWrapper
