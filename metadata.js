module.exports = {
  isProduction: process.env.NODE_ENV === 'production',
  websiteUrl: 'https://astek.loiclefloch.fr',
  websiteName: 'LabAstek',
  websiteShortName: 'LabAstek',
  rssTitle: 'LabAstek',
  description: 'LabAstek, community about code and developers',
  backgroundColor: '#f9f9f9',
  themeColor: '#f44336', // red500
  githubArticlesRepositoryUrl: 'https://github.com/LabAstek/articles',
  labAstekGithubUrl: 'https://github.com/LabAstek',
  draftFilter: `
    filter: {
      frontmatter: { draft: { ne: true }}
    }
  `
}
