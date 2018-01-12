import React from 'react'

import ExternalLink from '../../../components/ExternalLink'

const EditLink = ({ markdownRemark }) => (
  <div>
    <ExternalLink href={markdownRemark.fields.githubPath}>Edit</ExternalLink>
  </div>
)

export default EditLink
