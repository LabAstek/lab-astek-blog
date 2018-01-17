import React from 'react'
import PropTypes from 'prop-types'

import withStyles from 'material-ui/styles/withStyles'
import { formatPost } from '../../modules/post/format'

import PostItem from './PostItem'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 5,

    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },
})

const PostList = ({ posts, classes }) => (
  <div className={classes.root}>
    {posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => (
        <PostItem key={post.id} post={formatPost(post)} />
      ))}
  </div>
)

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default withStyles(styles)(PostList)
