import React from 'react'

import withStyles from 'material-ui/styles/withStyles'
import FooterBar from '../../../components/FooterBar'
import InternalLink from '../../../components/InternalLink'

const styles = theme => ({
  link: {
    paddingRight: 50,
    paddingLeft: 50
  }
})

const Navigation = ({ prev, next, classes }) => (
  <FooterBar>
    <div>
      {prev && (
        <InternalLink
          classes={{ root: classes.link }}
          to={prev.frontmatter.path}
        >
          {'<'} {prev.frontmatter.title}
        </InternalLink>
      )}
      {next && (
        <InternalLink
          classes={{ root: classes.link }}
          to={next.frontmatter.path}
        >
          {next.frontmatter.title} {'>'}
        </InternalLink>
      )}
    </div>
  </FooterBar>
)

export default withStyles(styles)(Navigation)
