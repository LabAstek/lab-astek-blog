import React from 'react'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 'auto',
    marginRight: 'auto',

    [theme.breakpoints.up('md')]: {
      width: '90%'
    },

    [theme.breakpoints.up('lg')]: {
      maxWidth: 1260
    }
  }
})

/**
 * This component wraps page content sections (eg header, footer, main).
 * It provides consistent margin and max width behavior.
 */
const Container = ({ children, classes }) => (
  <div className={classes.root}>{children}</div>
)

export default withStyles(styles)(Container)
