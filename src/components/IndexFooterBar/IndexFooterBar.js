import React from 'react'

import { getLabAstekGithubUrl } from '../../modules/config'

import withStyles from 'material-ui/styles/withStyles'

import FooterBar from '../FooterBar'
import ExternalLink from '../ExternalLink/ExternalLink'

const styles = theme => ({
  message: {
    textTransform: 'uppercase',
    fontSize: '14pt',
    letterSpacing: '0.1em',
  }
})

const IndexFooterBar = ({ classes }) => (
  <FooterBar>
    <ExternalLink
      href={getLabAstekGithubUrl()}
      classes={{ root: classes.message }}
    >
      Join us!
    </ExternalLink>
  </FooterBar>
)

export default withStyles(styles)(IndexFooterBar)
