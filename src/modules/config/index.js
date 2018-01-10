//
// This module contains getters that provides the website configuration.
//
// We use getters instead of constants since the values could be taken from configuration files,
// api, etc
//

export const getWebsiteTitle = () => 'Astek community'

export const getWebsiteDescription = () => 'TODO: description'

export const isProduction = () => process.env.NODE_ENV === 'production'
