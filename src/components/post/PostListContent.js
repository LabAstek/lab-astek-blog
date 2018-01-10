import React from 'react'
import Helmet from 'react-helmet'

import withStyles from 'material-ui/styles/withStyles'

import Typography from 'material-ui/Typography/Typography'
import CenterContent from '../CenterContent'

const styles = theme => ({
  root: {
    marginBottom: '50px'
  },
  title: {
    textAlign: 'center',
    paddingTop: '20px',
    paddingBottom: '20px'
  }
})

const PostListContent = ({ children, classes, title }) => (
  <CenterContent className={classes.root}>
    <Helmet title={title} />

    <Typography
      type="title"
      classes={{
        root: classes.title
      }}
    >
      {title}
    </Typography>

    {children}
  </CenterContent>
)

export default withStyles(styles)(PostListContent)
