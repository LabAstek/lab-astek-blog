import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'

// Note: gatsby handle badly the reloading of the layouts/index with HMR, so all our code goes here

const Content = ({ children }) => (
  <div
    style={{
      backgroundColor: '#f9f9f9'
    }}
  >
    <Header />
    {children()}
  </div>
)

Content.propTypes = {
  children: PropTypes.func.isRequired
}

export default Content
