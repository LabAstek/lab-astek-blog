import React from 'react'
import Link from 'gatsby-link'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import { getWebsiteTitle } from '../modules/config'

const Header = () => (
  <AppBar position="fixed" color="primary">
    <Toolbar>
      <Link
        to="/"
        style={{
          textDecoration: 'none'
        }}
      >
        <Typography
          type="title"
          style={{
            color: 'white'
          }}
        >
          {getWebsiteTitle()}
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>
)

export default Header
