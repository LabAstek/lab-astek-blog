import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    lineHeight: 2,
    '&:hover': {
      color: theme.colors.brand
    }
  }
})

const InternalLink = ({ children, classes, href }) => (
  <a href={href} className={classes.root} target="_blank">
    {children}
  </a>
)

export default withStyles(styles)(InternalLink)
