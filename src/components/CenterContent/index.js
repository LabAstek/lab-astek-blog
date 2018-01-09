import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    maxWidth: '800px',
    margin: '0 auto',
    height: '100%'
  }
}

const CenterContent = ({ children, classes, style, ...otherProps }) => (
  <div className={classes.root} style={style}>{children}</div>
)

CenterContent.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CenterContent)
