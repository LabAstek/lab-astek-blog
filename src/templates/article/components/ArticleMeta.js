import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'

import Typography from 'material-ui/Typography'

import TocView from './TocView'
import TagsList from './TagsList'
import Category from './Category'
import EditLink from './EditLink'

const styles = theme => ({
  root: {
    position: 'fixed',
    marginTop: '10px',
  }
})

const Author = ({ frontmatter, fields }) =>
  frontmatter.hasAuthor ? (
    <Typography
      style={{
        marginTop: '10px'
      }}
    >
      {frontmatter.author}
    </Typography>
  ) : null

const ArticleMeta = ({ markdownRemark, toc, classes }) => (
  <div className={classes.root}>
    {markdownRemark.frontmatter.date}

    <Author frontmatter={markdownRemark.frontmatter} />

    <Category category={markdownRemark.frontmatter.category} />

    <EditLink markdownRemark={markdownRemark} />

    <TagsList tags={markdownRemark.frontmatter.tags} />

    <TocView toc={toc} />
  </div>
)

ArticleMeta.propTypes = {
  markdownRemark: PropTypes.object.isRequired,
  toc: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ArticleMeta)
