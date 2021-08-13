const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
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
            // {
            //   resolve: 'gatsby-plugin-load-script',
            //   options: {
            //     src: '/main.js', // Change to the script filename
            //   },
            // },
  ],
};
