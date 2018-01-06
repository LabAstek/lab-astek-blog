import React from 'react'
import PropTypes from 'prop-types'

import TocView from './TocView'

const ArticleMeta = ({ frontmatter, toc }) => (
  <div>

    {frontmatter.date}

    <TocView
      toc={toc}
    />
  </div>
)

ArticleMeta.propTypes = {
  frontmatter: PropTypes.object.isRequired,
}

export default ArticleMeta
