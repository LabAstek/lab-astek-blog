import React from 'react'
import { withStyles } from 'material-ui/styles'
import Link from 'gatsby-link'

const styles = theme => ({
  root: {
    lineHeight: 2,
    '&:hover': {
      color: theme.colors.brand
    }
  }
})

const InternalLink = ({ children, classes, to }) => (
  <Link to={to} className={classes.root}>
    {children}
  </Link>
)

export default withStyles(styles)(InternalLink)
