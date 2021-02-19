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
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },*/
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
    
  ],
}