import React from 'react'
import Link from 'gatsby-link'

import withTheme from 'material-ui/styles/withTheme'

const ThemePage = ({ theme }) => (
  <div>
    <pre>{JSON.stringify(theme, null, 4)}</pre>
  </div>
)

export default withTheme()(ThemePage)
