import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'

import TocView from './TocView'
import TagsList from './TagsList'
import Category from './Category'

const styles = theme => ({
  root: {
    position: 'fixed'
  }
})

const Author = ({ frontmatter }) =>
  frontmatter.hasAuthor ? <div>{frontmatter.author}</div> : null

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
