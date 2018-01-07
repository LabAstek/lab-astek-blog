import React from 'react'
import isEmpty from 'lodash/isEmpty'

const styles = {
  H1: {
    display: 'inline-block',
    paddingLeft: '10px',
    paddingTop: '5px'
  },
  H2: {
    display: 'inline-block',
    paddingLeft: '10px',
    paddingTop: '5px'
  },
  H3: {
    display: 'inline-block',
    paddingLeft: '20px',
    paddingTop: '5px'
  },
  H4: {
    display: 'inline-block',
    paddingLeft: '30px',
    paddingTop: '5px'
  },
  H5: {
    display: 'inline-block',
    paddingLeft: '40px',
    paddingTop: '5px'
  },
  h5: {
    display: 'inline-block',
    paddingLeft: '50px',
    paddingTop: '5px'
  },
  link: {
    color: '#444',
    fontSize: '13px',
    lineHeight: 'initial'
  }
}

const TocView = ({ toc }) => (
  // TODO: take remaining space
  <div
    className="u-zIndexFloating u-maxHeight300 u-borderLeft4 borderPrimary"
    style={{
      overflowX: 'hidden',
      overflowY: 'auto',
      minWidth: '160px',
      marginTop: 20,
      height: '100%'
    }}
  >
    <ul>
      <li key="0">
        <a
          href="#"
          className="link hoverPrimary u-marginBottom4"
          style={{ ...styles.H1, ...styles.link }}
        >
          Top
        </a>
      </li>
      {toc.map(elem => (
        <li key={elem.id || elem.title}>
          <a
            href={`#${elem.id}`}
            className="link hoverPrimary u-marginBottom4"
            style={{ ...styles[elem.type], ...styles.link }}
          >
            {elem.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default TocView
