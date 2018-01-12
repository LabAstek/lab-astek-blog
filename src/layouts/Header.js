import React from 'react'
import Link from 'gatsby-link'
import withStyles from 'material-ui/styles/withStyles'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Logo from '../components/svg/Logo'

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
  brandArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    marginRight: 10,
    width: 48,
    height: 48,
  },
  brand: {
    display: 'flex',
    marginRight: 10,
    height: '100%',
    alignItems: 'center',
    color: `${theme.colors.brand}!important`,
    letterSpacing: '0.08em',
    fontWeight: 400, // could be 500

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
  <header
    role="banner" // role="banner" is a good practice (https://frontendchecklist.io/)
  >
    <AppBar position="fixed" color="primary" classes={{ root: classes.root }}>
      <Toolbar classes={{ root: classes.toolbar }}>
        <Container>
          <div className={classes.brandArea}>
            <Link to="/">
              <Logo className={classes.logo} />
            </Link>

            <Link to="/">
              <span className={classes.brand}>{getWebsiteTitle()}</span>
            </Link>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  </header>
)

export default withStyles(styles)(Header)
