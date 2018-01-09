import React from 'react'
import isEmpty from 'lodash/isEmpty'
import kebabCase from 'lodash/kebabCase'
import Link from 'gatsby-link'
import Typography from 'material-ui/Typography'

const Category = ({ category }) =>
  isEmpty(category) ? null : (
    <div>
      <Typography
        style={{
          marginTop: '10px'
        }}
      >
        Category:
      </Typography>

      <div style={{ marginTop: '6px' }}>
        <Link
          key={category}
          style={{ textDecoration: 'none' }}
          to={`/categories/${kebabCase(category)}`}
        >
          {category}
        </Link>
      </div>
    </div>
  )

export default Category
