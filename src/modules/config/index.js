//
// This module contains getters that provides the website configuration.
//
// We use getters instead of constants since the values could be taken from configuration files,
// api, etc
//

import metadata from '../../../metadata'

export const getWebsiteTitle = () => metadata.websiteName

export const getWebsiteDescription = () => metadata.description

export const isProduction = () => process.env.NODE_ENV === 'production'

export const getLabAstekGithubUrl = () => metadata.labAstekGithubUrl
