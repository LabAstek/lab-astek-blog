import React from 'react'
import PropTypes from 'prop-types'

// -- smooth scrolling
// using require because smooth-scroll require ``, that is not available when building for prod
// const SmoothScroll = require('smooth-scroll')

import withRoot from '../modules/ssr/withRoot'
import Header from './Header'
import LayoutFooter from '../components/LayoutFooter'

// Note: gatsby handle badly the reloading of the layouts/index with HMR, so all our code goes here

// see https://cferdinandi.github.io/smooth-scroll/setup.html
// https://github.com/cferdinandi/smooth-scroll
// const scroll = new SmoothScroll('a[href*="#"]', {
//   // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
//   // let a top padding
//   offset: 100
// })

// scroll.animateScroll({
//   // Node to scroll to. ex. document.querySelector( '#bazinga' )
//   anchor: 'a[href*="#"]', // for all anchor
//   options: {
//     speed: 100
//   }
// })

// Note: previously named 'Content' but gatsby could have some issue with
// https://github.com/gatsbyjs/gatsby/issues/1499
const Body = ({ children }) => (
  <div
    style={{
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

    <LayoutFooter />
  </div>
)

Body.propTypes = {
  children: PropTypes.func.isRequired
}

export default withRoot(Body)
