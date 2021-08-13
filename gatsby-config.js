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
  ],
};
