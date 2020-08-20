module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'thornfieldattic',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: 'UK History Tourist',
    author: 'Christina Carter',
    description:
      'The best places and things to see for history lovers visiting the United Kingdom!',
    siteUrl: 'https://ukhistorytourist.com',
    social: [
      {
        name: 'instagram',
        url: 'https://www.instagram.com/thornfieldattic/',
      },
    ],
  },
}
