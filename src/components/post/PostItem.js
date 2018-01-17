import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import InternalLink from '../InternalLink'

import { withStyles } from 'material-ui/styles'
import Img from 'gatsby-image'
import Card, { CardHeader, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

// see https://material-ui-next.com/demos/cards/
const styles = theme => ({
  card: {
    maxWidth: 800,
    marginTop: theme.spacing.unit * 3,
  },
  media: {
    height: '200px!important',
    width: '100%!important',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  title: {
    '&:hover': {
      color: theme.colors.brand,
    },
  },
  content: {
    fontSize: '18px!important', // override 'readable' global class
  },
  cartContentRoot: {
    borderTop: `1px solid ${theme.colors.divider}`,
  },
})

const Author = ({ post }) =>
  post.hasAuthor ? (
    <span>
      {' '}
      - <InternalLink to={post.author.url}>{post.author.name}</InternalLink>
    </span>
  ) : null

const PostItem = ({ post, classes }) => (
  <Card className={classes.card}>
    {post.hasCoverImage ? (
      <Img
        className={classes.media}
        resolutions={post.frontmatter.coverImage.childImageSharp.sizes}
      />
    ) : null}

    <CardHeader
      title={
        <InternalLink to={post.frontmatter.path}>
          <Typography type="title" classes={{ root: classes.title }}>
            {post.frontmatter.title}
          </Typography>
        </InternalLink>
      }
      subheader={
        <Typography type="subheading">
          {post.frontmatter.date}

          <Author post={post} />
        </Typography>
      }
    />

    <CardContent
      classes={{
        root: classes.cartContentRoot,
      }}
    >
      <Typography
        component="p"
        className={classNames(classes.content, 'readable')}
      >
        {post.frontmatter.description}
      </Typography>
    </CardContent>
  </Card>
)

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PostItem)
