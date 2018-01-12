import React from 'react'

import withStyles from 'material-ui/styles/withStyles'
import InternalLink from '../../../components/InternalLink'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    backgroundColor: '#282c34',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    // links inehrit color from parent
    color: theme.palette.primary['400'],
    textAlign: 'center',
  },
  link: {
    paddingRight: 50,
    paddingLeft: 50,
  }
})

const Navigation = ({ prev, next, classes }) => (
  <div className={classes.root}>
    {prev && (
      <InternalLink classes={{ root: classes.link }} to={prev.frontmatter.path}>
        {'<'} {prev.frontmatter.title}
      </InternalLink>
    )}
    {next && (
      <InternalLink classes={{ root: classes.link }} to={next.frontmatter.path}>
        {next.frontmatter.title} {'>'}
      </InternalLink>
    )}
  </div>
)

export default withStyles(styles)(Navigation)
