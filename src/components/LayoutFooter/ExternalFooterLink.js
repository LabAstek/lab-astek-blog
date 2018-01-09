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
  rel = 'noopener'
}) => (
  <a className={classes.root} href={href} target={target} rel={rel}>
    {children}
    <ExternalLinkSvg className={classes.svg} />
  </a>
)

export default withStyles(styles)(ExternalFooterLink)
