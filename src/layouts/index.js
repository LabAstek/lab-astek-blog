import React from 'react'
import PropTypes from 'prop-types'

import 'typeface-roboto'
import 'normalize.css'

import Body from './Body'

// Note: gatsby handle badly the reloading of this page with HMR, so all our code goes to Content.

const TemplateWrapper = ({ children }) => (
  <div
    style={{
      height: '100%'
    }}
  >
    <Body>{children}</Body>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired
}

export default TemplateWrapper
