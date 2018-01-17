import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'

import Container from '../../../components/Container'
import Author from './Author'
import TagsList from './TagsList'
import Category from './Category'
import EditLink from './EditLink'
import TimeToRead from './TimeToRead'

const styles = theme => ({
  root: {
    //
    // sticky mode
    // Keep the sidebar sticky when scrolling
    //
    position: 'sticky',
    top: 80,
    paddingLeft: 0,
    paddingRight: 0,
    // end mode
    display: 'flex',
    flexDirection: 'column',
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '13px',
    alignItems: 'center',
  },
  timeToReadContainer: {},
  tocContainer: {},
  hideOnMobile: {
    [theme.breakpoints.down('md')]: {
      // hide component on mobile.
      // Toc: will not be displayed
      // EditLink, TimeToRead: displayed on top of the page
      display: 'none',
    },
  },
})

const ArticleMeta = ({ markdownRemark, classes }) => (
  <Container classes={{ root: classes.root }}>
    <Author markdownRemark={markdownRemark} />

    <div className={classNames(classes.dateContainer, classes.hideOnMobile)}>
      {markdownRemark.frontmatter.date}

      <EditLink markdownRemark={markdownRemark} />
    </div>

    <div
      className={classNames(classes.timeToReadContainer, classes.hideOnMobile)}
    >
      <TimeToRead markdownRemark={markdownRemark} />
    </div>

    <Category category={markdownRemark.frontmatter.category} />

    <TagsList tags={markdownRemark.frontmatter.tags} />
  </Container>
)

ArticleMeta.propTypes = {
  markdownRemark: PropTypes.object.isRequired,
  toc: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ArticleMeta)
