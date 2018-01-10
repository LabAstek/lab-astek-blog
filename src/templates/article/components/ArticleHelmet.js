import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'

/**
 *  Update helmet data
 */
const ArticleHelmet = ({ frontmatter, excerpt }) => (
  <Helmet>
    <title>{frontmatter.title}</title>
    <meta name="description" content={excerpt} />
    <meta name="og:description" content={excerpt} />
    <meta property="og:type" content="article" />
    
    {/* TODO: Twitter card */}

    {/* TODO: Facebook Open graph */}

    {/* TODO: tags */}
  </Helmet>
)

ArticleHelmet.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  excerpt: PropTypes.string.isRequired,
}

export default ArticleHelmet
