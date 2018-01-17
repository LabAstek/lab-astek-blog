import React from 'react'

import withStyles from 'material-ui/styles/withStyles'
import Img from 'gatsby-image'

const styles = theme => ({
  root: {
    height: 300,
    width: '100%',
    marginTop: theme.spacing.unit,
    textAlign: 'center',
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  media: {
    margin: '0 auto',
    height: 300,
    width: '100%',
    maxWidth: 800,
  },
})

const CoverImage = ({ frontmatter, classes }) => (
  <div className={classes.root}>
    <Img
      className={classes.media}
      resolutions={frontmatter.coverImage.childImageSharp.sizes}
    />
  </div>
)

export default withStyles(styles)(CoverImage)
