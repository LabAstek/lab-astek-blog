import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'

import Container from '../../../components/Container'
import Category from './Category'
// import EditLink from './EditLink'
import TimeToRead from './TimeToRead'
import Typography from 'material-ui/Typography'
import InternalLink from '../../../components/InternalLink'

const styles = theme => ({
  root: {
    marginTop: 30,
    paddingLeft: 0,
    paddingRight: 0,
    // end mode
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    // hideOnDesktop
    [theme.breakpoints.up('md')]: {
      // hide component on mobile.
      // Toc: will not be displayed
      // TimeToRead: displayed on top of the page
      display: 'none',
    },
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '16px',
    alignItems: 'center',
    marginTop: theme.spacing.unit,
  },
  timeToReadContainer: {
    fontSize: '10px',
  },
  author: {
    fontSize: '18px',
  },
})

const MobileMetaOnHeader = ({ markdownRemark, toc, classes }) => (
  <Container classes={{ root: classes.root }}>
    <InternalLink to={markdownRemark.author.url}>
      <Typography className={classes.author}>
        {markdownRemark.author.name}
      </Typography>
    </InternalLink>

    <div className={classNames(classes.dateContainer)}>
      {markdownRemark.frontmatter.date}

      {/* No EditLink, since we are on mobile */}
      {/* <EditLink markdownRemark={markdownRemark} /> */}
    </div>

    <div className={classNames(classes.timeToReadContainer)}>
      <TimeToRead markdownRemark={markdownRemark} />
    </div>

    <Category category={markdownRemark.frontmatter.category} />

    {/* <div
      className={classNames(classes.timeToReadContainer)}
    >
      <TagsList tags={markdownRemark.frontmatter.tags} />
    </div> */}
  </Container>
)

MobileMetaOnHeader.propTypes = {
  markdownRemark: PropTypes.object.isRequired,
  toc: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MobileMetaOnHeader)
