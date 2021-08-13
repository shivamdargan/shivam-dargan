module.exports = {
  // plugins: [
  //   // ...
  //   {
  //     resolve: 'gatsby-plugin-load-script',
  //     options: {
  //       src: './static/modernizr.js', // Change to the script filename
  //     },
  //   },
  //   {
  //     resolve: 'gatsby-plugin-load-script',
  //     options: {
  //       src: './static/pace.min.js', // Change to the script filename
  //     },
  //   },
  //   {
  //     resolve: 'gatsby-plugin-load-script',
  //     options: {
  //       src: './static/jquery-3.2.1.min.js', // Change to the script filename
  //     },
  //   },
  //   {
  //     resolve: 'gatsby-plugin-load-script',
  //     options: {
  //       src: './static/main.js', // Change to the script filename
  //     },
  //   },
  // ],
  
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio-website",
  },
  plugins: [new HtmlWebpackPlugin({hash: true}),
            "gatsby-plugin-gatsby-cloud",
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
  ],
};
