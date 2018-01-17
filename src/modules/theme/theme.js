import { createMuiTheme } from 'material-ui/styles'

import indigo from 'material-ui/colors/indigo'
import red from 'material-ui/colors/red'

// Note: logo is red['600']

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      ...red, // spread color to override if needed. Ex: A400: #ccc
    },
    secondary: {
      ...indigo,
    },
    error: red,
  },
})

const theme = {
  ...muiTheme,
  //
  // add additionnal custom data to the theme
  //
  colors: {
    divider: '#ececec', // very light grey
    note: '#ffe564', // yellow
    error: '#ff6464', // yellow
    white: '#ffffff',
    black: '#000000',
    lighter: '#373940', // light blue
    dark: '#282c34', // dark blue
    darker: '#20232a', // really dark blue
    subtle: '#6d6d6d', // light grey for text
    subtleOnDark: '#999',
    brand: red[400],
    twitter: '#1da1f2',
    github: '#4078c0',
  },
  padding: {
    // Default paddings for a 'container'.
    // Used by the `Container` component, and by others that needs
    // to be compliant with those paddings but can't use `Container`
    // Ex: index.js
    container: {
      [muiTheme.breakpoints.down('md')]: {
        paddingLeft: 10,
        paddingRight: 10,
      },
      [muiTheme.breakpoints.up('md')]: {
        paddingLeft: 20,
        paddingRight: 20,
      },
    },
  },
}

export default theme
