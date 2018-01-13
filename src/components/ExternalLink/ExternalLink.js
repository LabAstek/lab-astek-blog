import React from 'react'
import isEmpty from 'lodash/isEmpty'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    lineHeight: 2,
    '&:hover': {
      color: theme.colors.brand
    }
  }
})

const InternalLink = ({ children, classes, href }) =>
  isEmpty(href) ? (
    children
  ) : (
    <a href={href} className={classes.root} target="_blank">
      {children}
    </a>
  )

export default withStyles(styles)(InternalLink)
