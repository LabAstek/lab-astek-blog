import React from 'react'
import PropTypes from 'prop-types'

import '../global.scss'
import Header from '../Header'

// Note: gatsby handle badly the reloading of the layouts/index with HMR, so all our code goes here

const Content = ({ children }) => (
  <div
    style={{
      backgroundColor: '#f9f9f9',
      height: '100%'
    }}
  >
    <Header />

    <div
      style={{
        marginTop: 80, // space for header
        height: '100%'
      }}
    >
      {children()}
    </div>
  </div>
)

Content.propTypes = {
  children: PropTypes.func.isRequired
}

export default Content
