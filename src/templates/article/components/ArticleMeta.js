import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'

import Typography from 'material-ui/Typography'

import TocView from './TocView'
import TagsList from './TagsList'
import Category from './Category'

const styles = theme => ({
  root: {
    position: 'fixed',
    marginTop: '10px',
  }
})

const Author = ({ frontmatter }) =>
  frontmatter.hasAuthor ? (
    <Typography
      style={{
        marginTop: '10px'
      }}
    >
      {frontmatter.author}
    </Typography>
  ) : null

const ArticleMeta = ({ frontmatter, toc, classes }) => (
  <div className={classes.root}>
    {frontmatter.date}

    <Author frontmatter={frontmatter} />

    <Category category={frontmatter.category} />

    <TagsList tags={frontmatter.tags} />

    <TocView toc={toc} />
  </div>
)

ArticleMeta.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  toc: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ArticleMeta)
