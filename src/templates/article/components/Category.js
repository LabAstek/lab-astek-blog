import React from 'react'
import isEmpty from 'lodash/isEmpty'
import kebabCase from 'lodash/kebabCase'
import Link from 'gatsby-link'

const Category = ({ category }) =>
  isEmpty(category) ? null : (
    <div>
      {' '}
      <Link
        key={category}
        style={{ textDecoration: 'none' }}
        to={`/categories/${kebabCase(category)}`}
      >
        {category}
      </Link>
    </div>
  )

export default Category
