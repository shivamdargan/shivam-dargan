const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  siteMetadata: {
    siteUrl: "https://shivamdargan.gatsbyjs.io/",
    title: "portfolio-website",
  },
  plugins: ['html-webpack-plugin',
            {
              resolve: `gatsby-plugin-styled-components`,
              options: {
                // Add any options here
              },
            },
            "gatsby-plugin-gatsby-cloud",
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
            {
              resolve: 'gatsby-plugin-load-script',
              options: {
                src: '/modernizr.js', // Change to the script filename
              },  
            },
            {
              resolve: 'gatsby-plugin-load-script',
              options: {
                src: '/pace.min.js', // Change to the script filename
              },  
            },
            {
              resolve: 'gatsby-plugin-load-script',
              options: {
                src: '/jquery-3.2.1.min.js', // Change to the script filename
              },
            },
            {
              resolve: 'gatsby-plugin-load-script',
              options: {
                src: '/plugins.js', // Change to the script filename
              },
            },
            {
              resolve: `gatsby-plugin-manifest`,
              options: {
                name: `shivam-dargan`,
                short_name: `shivam`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`,
              }
            },
  ],
};