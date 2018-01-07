import React from 'react'
import PropTypes from 'prop-types'

// -- smooth scrolling
import SmoothScroll from 'smooth-scroll'

import 'prismjs/themes/prism-solarizedlight.css'
import '../global.scss'
import Header from '../Header'
import ThemeProvider from '../../modules/theme/ThemeProvider'


// Note: gatsby handle badly the reloading of the layouts/index with HMR, so all our code goes here

// see https://cferdinandi.github.io/smooth-scroll/setup.html
// https://github.com/cferdinandi/smooth-scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
  // let a top padding
  offset: 100
})

scroll.animateScroll({
  // Node to scroll to. ex. document.querySelector( '#bazinga' )
  anchor: 'a[href*="#"]', // for all anchor
  options: {
    speed: 100
  }
})

const Content = ({ children }) => (
  <ThemeProvider>
    <div
      style={{
        backgroundColor: '#f9f9f9',
        height: '100%'
      }}
    >
      <Header />

      <div
        style={{
          marginTop: 80, // space for header
          height: '100%'
        }}
      >
        {children()}
      </div>
    </div>
  </ThemeProvider>
)

Content.propTypes = {
  children: PropTypes.func.isRequired
}

export default Content
