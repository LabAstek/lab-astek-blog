import React from 'react'
import PropTypes from 'prop-types'

const CenterContent = ({ children, ...otherProps }) => (
  <div
    style={{
      maxWidth: '800px',
      margin: '0 auto',
      height: '100%',
    }}
  >
    {children}
  </div>
)

CenterContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default CenterContent
