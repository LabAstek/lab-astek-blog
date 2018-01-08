import React from 'react'
import PropTypes from 'prop-types'

import { formatPost } from '../../modules/post/format'

import PostItem from './PostItem'

const PostList = ({ posts }) => (
  <div>
    {posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => (
        <PostItem key={post.id} post={formatPost(post)} />
      ))}
  </div>
)

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList
