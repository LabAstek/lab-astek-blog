import React from 'react'
import PropTypes from 'prop-types'

import isEmpty from 'lodash/isEmpty'

import Avatar from 'material-ui/Avatar'

const AvatarWithText = props => {
  const { placeholder, ...other } = props

  return <Avatar {...other}>{placeholder.toUpperCase()}</Avatar>
}

const AvatarPlaceholder = props => {
  const { placeholder, ...otherProps } = props

  // TODO: if default is url
  return (
    <AvatarWithText
      placeholder={!isEmpty(placeholder) ? placeholder[0] : ''}
      {...otherProps}
    />
  )
}

const AvatarWithDefault = props => {
  const { src, ...otherProps } = props

  if (isEmpty(src)) {
    return <AvatarPlaceholder {...otherProps} />
  }

  return <Avatar src={src} {...otherProps} />
}

AvatarWithDefault.propTypes = {
  src: PropTypes.string,

  classes: PropTypes.object,

  // Can be an url or a string.
  placeholder: PropTypes.string
}

export default AvatarWithDefault
