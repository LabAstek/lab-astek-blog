import React from 'react'

import withStyles from 'material-ui/styles/withStyles'

import ArrowRight from 'material-ui-icons/KeyboardArrowRight'
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft'

import FooterBar from '../../../components/FooterBar'
import InternalLink from '../../../components/InternalLink'

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    paddingRight: 50,
    paddingLeft: 50
  },
  linkContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

const Navigation = ({ prev, next, classes }) => (
  <FooterBar>
    <div className={classes.container}>
      {prev && (
        <InternalLink
          classes={{ root: classes.link }}
          to={prev.frontmatter.path}
        >
          <span className={classes.linkContent}>
            {<ArrowLeft />}
            {prev.frontmatter.title}
          </span>
        </InternalLink>
      )}
      {next && (
        <InternalLink
          classes={{ root: classes.link }}
          to={next.frontmatter.path}
        >
          <span className={classes.linkContent}>
            {next.frontmatter.title}
            {<ArrowRight />}
          </span>
        </InternalLink>
      )}
    </div>
  </FooterBar>
)

export default withStyles(styles)(Navigation)
