import React from 'react'
import PropTypes from 'prop-types'

import { MuiThemeProvider } from 'material-ui/styles'

import theme from './theme'

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
)

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeProvider
