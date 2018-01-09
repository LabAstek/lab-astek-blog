import React from 'react'
import Helmet from 'react-helmet'

import Typography from 'material-ui/Typography/Typography'
import CenterContent from '../CenterContent'

const PostListContent = ({ children, title }) => (
  <CenterContent
    style={{
      marginBottom: '50px'
    }}
  >
    <Helmet title={title} />

    <Typography
      type="title"
      style={{
        textAlign: 'center',
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      {title}
    </Typography>

    {children}
  </CenterContent>
)

export default PostListContent
