import React from 'react'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

import Container from '../Container'
import {
  getWebsiteTitle,
  getLabAstekGithubUrl,
  getLabAstekTwitterUrl
} from '../../modules/config'

import InternalFooterLink from './InternalFooterLink'
import ExternalFooterLink from './ExternalFooterLink'

const styles = theme => ({
  root: {
    backgroundColor: theme.colors.darker,
    color: theme.colors.white,
    paddingTop: 10,
    paddingBottom: 50
  },
  sectionTitle: {
    color: theme.colors.subtleOnDark,
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '3',
    letterSpacing: '0.1em'
  },
  link: {
    color: theme.colors.white,
    '&:hover': {
      color: theme.colors.brand
    }
  },
  websiteName: {
    color: theme.colors.subtleOnDark,
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '3',
    letterSpacing: '0.1em'
  }
})

const Footer = ({ classes }) => (
  <footer className={classes.root}>
    <Container>
      <Grid container>
        <Grid item xs={12} md={5}>
          <section>
            <Typography
              type="title"
              color="inherit"
              className={classes.websiteName}
            >
              {getWebsiteTitle()}
            </Typography>
          </section>
        </Grid>

        <Grid item xs={12} md={2}>
          <section>
            <Typography type="title" color="inherit">
              <span className={classes.sectionTitle}>Links</span>
            </Typography>

            <ul>
              <li>
                <InternalFooterLink to="/" classes={{ root: classes.link }}>
                  Home
                </InternalFooterLink>
              </li>
              <li>
                <InternalFooterLink
                  to="/about"
                  classes={{ root: classes.link }}
                >
                  About
                </InternalFooterLink>
              </li>
              <li>
                <InternalFooterLink
                  to="/contributing"
                  classes={{ root: classes.link }}
                >
                  Contributing
                </InternalFooterLink>
              </li>
              <li>
                <InternalFooterLink to="/faq" classes={{ root: classes.link }}>
                  FAQ
                </InternalFooterLink>
              </li>
            </ul>
          </section>
        </Grid>

        <Grid item xs={12} md={2}>
          <section>
            <Typography type="title" color="inherit">
              <span className={classes.sectionTitle}>Channels</span>
            </Typography>

            <ul>
              <li>
                <ExternalFooterLink href={getLabAstekGithubUrl()}>
                  GitHub
                </ExternalFooterLink>
              </li>

              <li>
                <ExternalFooterLink href={getLabAstekTwitterUrl()}>
                  Twitter
                </ExternalFooterLink>
              </li>
            </ul>
          </section>
        </Grid>
      </Grid>
    </Container>
  </footer>
)

export default withStyles(styles)(Footer)
