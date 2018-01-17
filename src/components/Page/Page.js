import React from 'react'

import isEmpty from 'lodash/isEmpty'

import withStyles from 'material-ui/styles/withStyles'
import Container from '../Container'

const styles = theme => ({
  root: {
    minHeight: '70vh',
  },
  title: {
    marginTop: '100px',
    textAlign: 'center',
  },
})

const Page = ({ classes, children, title }) => (
  <Container classes={{ root: classes.root }}>
    {!isEmpty(title) && <h1 className={classes.title}>{title}</h1>}

    {children}
  </Container>
)

export default withStyles(styles)(Page)
