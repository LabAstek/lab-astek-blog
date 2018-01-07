import { createMuiTheme } from 'material-ui/styles'

import indigo from 'material-ui/colors/indigo'
import red from 'material-ui/colors/red'

const theme = createMuiTheme({
  palette: {
    primary: {
      ...red // spread color to override if needed. Ex: A400: #ccc
    },
    secondary: {
      ...indigo
    },
    error: red
  }
})

export default theme
