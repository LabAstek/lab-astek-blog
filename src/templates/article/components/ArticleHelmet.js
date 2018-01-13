import React from 'react'
import PropTypes from 'prop-types'

import { getTwitterUsername, getWebsiteUrl } from '../../../modules/config'

import Helmet from 'react-helmet'

// inspired by https://github.com/Vagr9K/gatsby-advanced-starter/blob/master/src/components/SEO/SEO.jsx
const getShemaOrg = ({ markdownRemark }) => {
  return [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: markdownRemark.url,
      name: markdownRemark.frontmatter.title
    },
    [
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': markdownRemark.url,
              name: markdownRemark.frontmatter.title,
              image: markdownRemark.frontmatter.coverImage
            }
          }
        ]
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: markdownRemark.url,
        name: markdownRemark.frontmatter.title,
        headline: markdownRemark.frontmatter.title,
        image: {
          '@type': 'ImageObject',
          url: markdownRemark.frontmatter.coverImage
        },
        description: markdownRemark.frontmatter.description
      }
    ]
  ]
}

/**
 *  Update helmet data
 */
const ArticleHelmet = ({ markdownRemark }) => (
  <Helmet>
    <title>{markdownRemark.frontmatter.title}</title>
    <meta name="description" content={markdownRemark.excerpt} />
    {/* OG */}
    <meta property="og:title" content={markdownRemark.frontmatter.title} />
    <meta property="og:url" content={markdownRemark.frontmatter.path} />
    {markdownRemark.hasCoverImage && (
      <meta
        property="og:image"
        content={markdownRemark.frontmatter.coverImage}
      />
    )}
    <meta name="og:description" content={markdownRemark.excerpt} />
    <meta property="og:type" content="article" />

    {/* TODO: Schema.org json-ld */}
    {/* https://developers.google.com/search/docs/data-types/article */}
    <script type="application/ld+json">
      {JSON.stringify(getShemaOrg({ markdownRemark }))}
    </script>

    {/* Twitter card */}
    {/* https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started */}
    <meta name="twitter:card" content={markdownRemark.excerpt} />
    <meta name="twitter:site" content={`@${getTwitterUsername()}`} />
    {markdownRemark.author.hasTwitter && (
      <mata
        name="twitter:creator"
        content={`@${markdownRemark.author.twitter}`}
      />
    )}
    {/* TODO: Facebook Open graph */}
    {/* TODO: tags */}
    <meta
      name="keywords"
      content={markdownRemark.frontmatter.tags.join(', ')}
    />
  </Helmet>
)

ArticleHelmet.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  excerpt: PropTypes.string.isRequired
}

export default ArticleHelmet
