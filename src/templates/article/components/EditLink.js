import React from 'react'

import withStyles from 'material-ui/styles/withStyles'
import ExternalLink from '../../../components/ExternalLink'

const styles = theme => ({
  root: {},
  dash: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  }
})

const EditLink = ({ markdownRemark, classes }) => (
  <div className={classes.root}>
    <span className={classes.dash}>-</span>
    <ExternalLink href={markdownRemark.fields.githubPath}>Edit</ExternalLink>
  </div>
)

export default withStyles(styles)(EditLink)
