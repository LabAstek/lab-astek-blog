import React from 'react'
import kebabCase from 'lodash/kebabCase'
import Link from 'gatsby-link'
import { withStyles } from 'material-ui/styles'
import Chip from 'material-ui/Chip'

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
    cursor: 'pointer',
    height: '22px',
    letterSpacing: '0.04em',
    '&:hover': {
      // background: theme.colors.dark,
      color: theme.colors.brand,
    }
  },
  row: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '10px',
  }
})

const TagsList = ({ tags, classes }) => (
  <div className={classes.row}>
    {tags &&
      tags.map(tag => (
        <Link
          key={tag}
          style={{ textDecoration: 'none' }}
          to={`/tags/${kebabCase(tag)}`}
        >
          <Chip label={tag} className={classes.chip} />
        </Link>
      ))}
  </div>
)

export default withStyles(styles)(TagsList)
