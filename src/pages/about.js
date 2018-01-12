import React from 'react'

import withStyles from 'material-ui/styles/withStyles'
import Page from '../components/Page'

const styles = theme => ({
  root: {
    minHeight: '70vh',
    textAlign: 'center'
  },
  wallpaper: {
    width: '100%',
    height: 'auto',
    margin: '40px 0'
  }
})

const AboutPage = ({ classes }) => (
  <Page title="About" classes={{ root: classes.root }}>
    <img
      src="/wallpapers/logo_wallpaper.jpg"
      alt="LabAstek logo wallpaper"
      className={classes.wallpaper}
    />
  </Page>
)

export default withStyles(styles)(AboutPage)
