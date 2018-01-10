import React from 'react'
import Link from 'gatsby-link'
import withStyles from 'material-ui/styles/withStyles'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import { getWebsiteTitle } from '../modules/config'
import Container from '../components/Container/Container'

const styles = theme => ({
  root: {
    background: theme.colors.dark
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    [theme.breakpoints.down('lg')]: {
      height: 50
    },
    [theme.breakpoints.down('sm')]: {
      height: 40
    }
  },
  brand: {
    display: 'flex',
    marginRight: 10,
    height: '100%',
    alignItems: 'center',
    color: `${theme.colors.brand}!important`,

    lineHeight: '20px',
    fontSize: '20px',

    '&:focus': {
      outline: 0,
      color: theme.colors.white
    },

    '&:hover': {
      outline: 0,
      color: theme.colors.brand
    },

    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% / 6)'
    },
    [theme.breakpoints.down('sm')]: {
      flex: '0 0 auto'
    }
  }
})

const Header = ({ classes }) => (
  <header>
    <AppBar position="fixed" color="primary" classes={{ root: classes.root }}>
      <Toolbar classes={{ root: classes.toolbar }}>
        <Container>
          <Link to="/" className={classes.brand}>
            {getWebsiteTitle()}
          </Link>
        </Container>
      </Toolbar>
    </AppBar>
  </header>
)

export default withStyles(styles)(Header)
