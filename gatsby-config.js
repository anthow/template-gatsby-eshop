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
  siteMetadata: {
    title: `Boutique`,
    description:``,
    author:`Anthony Englebert`,
    company:`Avant conseils`,
    companyWebsite:``,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    // pour lire fichier md comme article 
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    
     
   // pour lire fichier md comme article 

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },

    // pour lire les images
    
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: 'template_ecommerce',
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        //contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`accueil`],
        queryLimit: 5000,
      },
    },
    
  ],
}