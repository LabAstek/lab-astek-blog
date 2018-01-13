import React from 'react'
import PropTypes from 'prop-types'
import classeNames from 'classnames'

import withStyles from 'material-ui/styles/withStyles'

import Typography from 'material-ui/Typography'

import AvatarWithDefault from '../../../components/AvatarWithDefault'
import TwitterIcon from '../../../components/svg/TwitterIcon'
import GithubIcon from '../../../components/svg/GithubIcon'
import ExternalLink from '../../../components/ExternalLink/ExternalLink'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    width: '100%'
  },
  avatar: {
    display: 'flex',
    width: 108,
    height: 108
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingBottom: theme.spacing.unit * 3,
    borderBottom: `1px solid ${theme.colors.divider}`
  },
  authorInfoArea: {
    fontSize: 16,
    paddingLeft: theme.spacing.unit
  },
  author: {
    marginTop: theme.spacing.unit * 2,
    fontSize: 24
  },
  socialMediaArea: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottom: `1px solid ${theme.colors.divider}`,
  },
  socialMedia: {
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  socialMediaLabel: {},
  socialIcon: {
    width: 48,
    height: 48,
    color: theme.colors.lighter,
    marginRight: theme.spacing.unit
  },
  twitter: {
    '&:hover': {
      fill: theme.colors.twitter,
      color: theme.colors.twitter
    }
  },
  github: {
    '&:hover': {
      fill: theme.colors.github,
      color: theme.colors.github
    }
  }
})

const AuthorView = ({ author, classes }) => (
  <div className={classes.root}>
    <div className={classes.header}>
      <AvatarWithDefault
        src={author.avatar}
        placeholder={author.name[0]}
        classes={{ root: classes.avatar }}
      />

      <div className={classes.authorInfoArea}>
        <Typography component="h1" className={classes.author}>
          {author.name}
        </Typography>
      </div>
    </div>

    <div className={classes.socialMediaArea}>
      {author.hasTwitter && (
        <div className={classes.socialMedia}>
          <ExternalLink
            href={author.twitterUrl}
            classes={{ root: classes.twitter }}
          >
            <TwitterIcon
              className={classeNames(classes.socialIcon, classes.twitter)}
            />
            <div
              className={classeNames(classes.twitter, classes.socialMediaLabel)}
            >
              @{author.twitter}
            </div>
          </ExternalLink>
        </div>
      )}

      {author.hasGithub && (
        <div className={classes.socialMedia}>
          <ExternalLink
            href={author.githubUrl}
            classes={{ root: classes.github }}
          >
            <GithubIcon
              className={classeNames(classes.socialIcon, classes.github)}
            />
            <div
              className={classeNames(classes.twitter, classes.socialMediaLabel)}
            >
              @{author.github}
            </div>
          </ExternalLink>
        </div>
      )}
    </div>
  </div>
)

export default withStyles(styles)(AuthorView)
