import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'
import getPageContext from './getPageContext'


import 'prismjs/themes/prism-tomorrow.css'
import '../../style/index.scss'

function withRoot(Component) {
  class WithRoot extends React.Component {
    componentWillMount() {
      this.pageContext = this.props.pageContext || getPageContext()
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#server-side-jss')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    componentDidCatch(error, info) {
      console.error(error, info);
    }

    pageContext = null

    render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          <div>
            {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
            {/* TODO: fix */}
            <Reboot />
            <Component {...this.props} />
          </div>
        </MuiThemeProvider>
      )
    }
  }

  WithRoot.propTypes = {
    pageContext: PropTypes.object
  }

  return WithRoot
}

export default withRoot
