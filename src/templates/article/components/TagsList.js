import React from 'react'
import kebabCase from 'lodash/kebabCase'
import Link from 'gatsby-link'

const TagsList = ({ tags }) => (
  <div className="post-tag-container">
    {tags &&
      tags.map(tag => (
        <Link
          key={tag}
          style={{ textDecoration: 'none' }}
          to={`/tags/${kebabCase(tag)}`}
        >
          {tag}
        </Link>
      ))}
  </div>
)

export default TagsList
