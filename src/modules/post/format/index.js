import isEmpty from 'lodash/isEmpty'

import { formatAuthor } from '../../author/format'

import { getWebsiteUrl } from '../../config'
  
export const formatPost = post => {
  // draft
  post.draft = post.draft || false

  //
  // `description` can be defined on the frontmatter. It replace the generated excerpt
  //
  if (!isEmpty(post.frontmatter.description)) {
    post.excerpt = post.frontmatter.description
  } else {
    post.frontmatter.description = post.excerpt
  }

  // author
  post.frontmatter.hasAuthor = !isEmpty(post.frontmatter.author)
  post.hasAuthor = !isEmpty(post.frontmatter.author)

  //
  // cover image
  //
  post.hasCoverImage = !isEmpty(post.frontmatter.coverImage)

  //
  // time to read
  //
  post.timeToReadFormatted = `${post.timeToRead} min`

  //
  //
  //
  post.author = formatAuthor(post.frontmatter.author)

  post.url = `${getWebsiteUrl()}${post.frontmatter.path}`

  return post
}
