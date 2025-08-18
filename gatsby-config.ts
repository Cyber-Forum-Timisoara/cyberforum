import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    author: 'CyberForumTimisoara',
    title: 'CyberForumTimisoara',
    siteUrl: 'https://cyberforum.ro/',
    description: 'CyberForumTimisoara',
    image: 'src/images/favicon.png',
    instagramUsername: 'cyberforum.tm',

  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CyberForumTimisoara',
        short_name: 'CyberForumTimisoara',
        start_url: '/',
        icon: 'src/images/favicon.png',
        background_color: '#080F21',
        theme_color: '#080F21',
        display: 'minimal-ui',
        legacy: false,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }]
};

export default config;
