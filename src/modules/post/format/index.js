import isEmpty from 'lodash/isEmpty'
  
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

  //
  // cover image
  //
  post.hasCoverImage = !isEmpty(post.frontmatter.coverImage)

  return post
}
