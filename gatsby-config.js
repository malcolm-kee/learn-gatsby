module.exports = {
  siteMetadata: {
    title: 'Malcolm Kee',
    description: 'A site created with tears and love.',
    keywords: ['guy', 'gatsby', 'frontend']
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `code`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blogs`,
        path: `${__dirname}/blogs/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ]
};
