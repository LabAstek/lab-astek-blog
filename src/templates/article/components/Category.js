import React from 'react'
import isEmpty from 'lodash/isEmpty'
import kebabCase from 'lodash/kebabCase'
import withStyles from 'material-ui/styles/withStyles'

import Link from 'gatsby-link'
import Class from 'material-ui-icons/Class'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.colors.lighter,
    '&:hover': {
      color: theme.colors.brand
    }
  },
  icon: {
    // should be same as TimeToRead
    width: 20,
    height: 20,
  },
  label: {
    marginLeft: theme.spacing.unit
  }
})

const Category = ({ category, classes }) =>
  isEmpty(category) ? null : (
    <div className={classes.root}>
      <Class classes={{ root: classes.icon }} />

      <Link
        key={category}
        className={classes.label}
        to={`/categories/${kebabCase(category)}`}
      >
        {category}
      </Link>
    </div>
  )

export default withStyles(styles)(Category)
