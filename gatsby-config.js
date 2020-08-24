module.exports = {
  siteMetadata: {
    title: `Meu blog`,
    position: `Junior Fullstack Developer`,
    description: `Um blog para aprender a usar gatsby em conjunto com outras tecnologias.`,
    author: `@Reinaldo`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Sempre que precisar ler outro tipos de arquivos, só fazer a chamada modificando os campos necessários
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pdfs`,
    //     path: `${__dirname}/src/pdfs`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
