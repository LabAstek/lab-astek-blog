import React from 'react'

import { withStyles } from 'material-ui/styles' 
import ExternalLinkSvg from '../svg/ExternalLinkSvg'

const styles = theme => ({
  root: {
    lineHeight: 2,
    '&:hover': {
      color: theme.colors.brand
    }
  },
  svg: {
    verticalAlign: -2,
    display: 'inline-block',
    marginLeft: 5,
    color: theme.colors.subtle,
  }
})

const ExternalFooterLink = ({
  children,
  classes,
  href,
  target = '_blank',
  // In case you are using external links with target="_blank", your link should have a 
  // rel="noopener" attribute to prevent tab nabbing. If you need to support older versions of 
  // Firefox, use rel="noopener noreferrer"
  // https://frontendchecklist.io/
  rel = 'noopener noreferrer'
}) => (
  <a className={classes.root} href={href} target={target} rel={rel}>
    {children}
    <ExternalLinkSvg className={classes.svg} />
  </a>
)

export default withStyles(styles)(ExternalFooterLink)
