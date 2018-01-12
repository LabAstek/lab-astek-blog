import React from 'react'

import withStyles from 'material-ui/styles/withStyles'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    backgroundColor: theme.colors.dark,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    // links inehrit color from parent
    color: theme.palette.primary['400'],
    textAlign: 'center'
  }
})

const FooterBar = ({ children, classes }) => (
  <div className={classes.root}>{children}</div>
)

export default withStyles(styles)(FooterBar)
