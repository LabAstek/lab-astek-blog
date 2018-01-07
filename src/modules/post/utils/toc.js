import map from 'lodash/map'

export const generateToc = content => {
  const div = document.createElement('div')
  div.innerHTML = content

  // get all titles in order
  const titles = div.querySelectorAll('h1, h2, h3, h4, h5, h6')

  // count of each different tag.
  const countForTag = {
    H1: 0,
    H2: 0,
    H3: 0,
    H4: 0,
    H5: 0,
    h5: 0
  }

  console.log(titles)
  let toc = map(titles, titleElem => {
    const type = titleElem.nodeName.toUpperCase()

    countForTag[type] += 1

    return {
      id: titleElem.getAttribute('id'),
      title: titleElem.innerText || titleElem.textContent,
      type // H1, H2, H3, etc
    }
  })

  // Remove tags that are found less than 2 times
  toc = toc.filter(elem => {
    return countForTag[elem.type] >= 2
  })

  return toc
}
