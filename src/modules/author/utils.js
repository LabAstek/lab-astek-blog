import find from 'lodash/find'
import authorsList from './authorsList'

export const getAuthorForUsername = username => {
  const author = find(authorsList, obj => obj.username === username)

  if (author) {
    return author
  }

  // Author not registered on authorsList, we create the default data.
  return {
    username,
    name: username,
    github: null,
    twitter: null,
  }
}
