import React from 'react'
import PropTypes from 'prop-types'
import classeNames from 'classnames'

import withStyles from 'material-ui/styles/withStyles'

import Typography from 'material-ui/Typography'

import AvatarWithDefault from '../../../components/AvatarWithDefault'
import TwitterIcon from '../../../components/svg/TwitterIcon'
import GithubIcon from '../../../components/svg/GithubIcon'
import ExternalLink from '../../../components/ExternalLink'
import InternalLink from '../../../components/InternalLink'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottom: `1px solid ${theme.colors.divider}`
  },
  avatar: {
    display: 'flex',
    width: 54,
    height: 54
  },
  authorInfoArea: {
    fontSize: 16,
    paddingLeft: theme.spacing.unit
  },
  author: {
    fontSize: 18,
  },
  socialIcon: {
    width: 16,
    height: 16,
    color: theme.colors.lighter,
    marginRight: theme.spacing.unit,
  },
  twitter: {
    '&:hover': {
      fill: theme.colors.twitter
    }
  },
  github: {
    '&:hover': {
      fill: theme.colors.github
    }
  }
})

const Author = ({ markdownRemark, fields, classes }) =>
  markdownRemark.frontmatter.hasAuthor ? (
    <div className={classes.root}>
      <InternalLink to={markdownRemark.author.url}>
        <AvatarWithDefault
          src={markdownRemark.author.avatar}
          placeholder={markdownRemark.author.name[0]}
          classes={{ root: classes.avatar }}
        />
      </InternalLink>

      <div className={classes.authorInfoArea}>
        <InternalLink to={markdownRemark.author.url}>
          <Typography className={classes.author}>
            {markdownRemark.author.name}
          </Typography>
        </InternalLink>

        {markdownRemark.author.hasTwitter && (
          <ExternalLink href={markdownRemark.author.twitterUrl}>
            <TwitterIcon
              className={classeNames(classes.socialIcon, classes.twitter)}
            />
          </ExternalLink>
        )}

        {markdownRemark.author.hasGithub && (
          <ExternalLink href={markdownRemark.author.githubUrl}>
            <GithubIcon
              className={classeNames(classes.socialIcon, classes.github)}
            />
          </ExternalLink>
        )}
      </div>
    </div>
  ) : null

export default withStyles(styles)(Author)
