import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'typeface-roboto'
import 'normalize.css'

import { getWebsiteTitle, getDefaultMeta } from '../../modules/config'

import Content from './Content'

// Note: gatsby handle badly the reloading of this page with HMR, so all our code goes to Content.

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title={getWebsiteTitle()} meta={getDefaultMeta()} />

    <Content>{children}</Content>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired
}

export default TemplateWrapper
