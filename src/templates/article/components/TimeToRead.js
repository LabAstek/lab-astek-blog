import React from 'react'

import withStyles from 'material-ui/styles/withStyles'
import AccessTime from 'material-ui-icons/AccessTime'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    fontSize: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    // should be same as Category
    width: 20,
    height: 20
  },
  label: {
    marginLeft: theme.spacing.unit
  }
})

const TimeToRead = ({ markdownRemark, classes }) => (
  <div className={classes.root}>
    <AccessTime classes={{ root: classes.icon }} />
    <span className={classes.label}>{markdownRemark.timeToReadFormatted}</span>
  </div>
)

export default withStyles(styles)(TimeToRead)
