import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import InternalLink from '../InternalLink'

import { withStyles } from 'material-ui/styles'
import Card, { CardHeader, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

// see https://material-ui-next.com/demos/cards/
const styles = theme => ({
  card: {
    maxWidth: 800,
    marginTop: theme.spacing.unit * 3
  },
  media: {
    height: 194
  },
  flexGrow: {
    flex: '1 1 auto'
  },
  title: {
    '&:hover': {
      color: theme.colors.brand
    }
  },
  content: {
    fontSize: '18px!important' // override 'readable' global class
  }
})

const Author = frontmatter =>
  frontmatter.hasAuthor ? <span>- {frontmatter.author}</span> : null

const PostItem = ({ post, classes }) => (
  <Card className={classes.card}>
    <CardHeader
      title={
        <InternalLink to={post.fields.slug}>
          <Typography type="title" classes={{ root: classes.title }}>
            {post.frontmatter.title}
          </Typography>
        </InternalLink>
      }
      subheader={
        <Typography type="subheading">
          {post.frontmatter.date}

          <Author frontmatter={post.frontmatter} />
        </Typography>
      }
    />

    {post.hasCoverImage ? (
      <CardMedia
        className={classes.media}
        image={post.frontmatter.coverImage}
        title={post.frontmatter.title}
      />
    ) : null}

    <CardContent>
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
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PostItem)
