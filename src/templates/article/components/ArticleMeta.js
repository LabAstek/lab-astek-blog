import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'

import Container from '../../../components/Container'
import Author from './Author'
import TocView from './TocView'
import TagsList from './TagsList'
import Category from './Category'
import EditLink from './EditLink'
import TimeToRead from './TimeToRead'

const styles = theme => ({
  root: {
    // position: 'fixed',
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '13px',
    alignItems: 'center'
  }
})

const ArticleMeta = ({ markdownRemark, toc, classes }) => (
  <Container classes={{ root: classes.root }}>
    <Author markdownRemark={markdownRemark} />

    <div className={classes.dateContainer}>
      {markdownRemark.frontmatter.date}

      <EditLink markdownRemark={markdownRemark} />
    </div>

    <TimeToRead markdownRemark={markdownRemark} />

    <Category category={markdownRemark.frontmatter.category} />

    <TagsList tags={markdownRemark.frontmatter.tags} />

    <TocView toc={toc} />
  </Container>
)

ArticleMeta.propTypes = {
  markdownRemark: PropTypes.object.isRequired,
  toc: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ArticleMeta)
