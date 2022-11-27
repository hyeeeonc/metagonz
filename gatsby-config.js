module.exports = {
  siteMetadata: {
    title: `MetaGonz`,
    description: `METAGONZ BE A PART OF US`,
    author: `@waterprovf`,
    siteUrl: `https://metagonz.io/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout.tsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `${__dirname}/src/resources`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-node-helpers',
    {
      resolve: 'gatsby-source-google-spreadsheet',
      options: {
        spreadsheetId: '1EMVPZPHGVbm1fVaRraiMBYl0XVnI_xPeGa5sJvVfe18',
        credentials: require('./credentials.json'),
      },
    },
  ],
}
