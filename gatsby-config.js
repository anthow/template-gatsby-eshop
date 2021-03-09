/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require ('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`
 })

module.exports = {
  /* Your site config here */
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: `Coccinelles et compagnies`,
    description:``,
    author:`Anthony Englebert`,
    company:`Avant conseils`,
    companyWebsite:``,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName:"anthow",
        apiKey: "717117224742135",
        apiSecret: "dUP42HRCq9YUnZ78mJKP7NC5cjg",
        uploadFolder: 'template_ecommerce',
      },
    
      
    },
    {
      resolve:`gatsby-plugin-snipcart`,
      options:{
        apiKey: `MTBmZmRmZTItMzNjZS00MmI3LTg3ZjUtNTM5N2I5ODkzMjRkNjM3NDQ4NDY4NDkwMjUyMDA2`,
        autopop:true,
        js:'https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.js',
        jquery:false,
        styles:'https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.css'
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `31646adcfc6858a0cbc4667fd6329f`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
}