module.exports = {
  siteMetadata: {
    title: `SANSHOOTS®`,
    description: `SANSHOOTS® is an award-winning videography studio founded by Hassan Musa based in Los Angeles, CA.`,
    author: `@latimer2k`,
  },
  flags: {
    THE_FLAG: false
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        name: 'videos',
        path: `${__dirname}/src/videos`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    
      resolve: `gatsby-plugin-video-encode`,
      options: {
        src: "./src/videos/**/*.{mp4,webm}",
        dest: "./static/videos",
        formats: [
          {
            type: "mp4",
            codec: "libx264",
            options: [
              "-crf 23",
              "-preset medium",
              "-vf scale='min(1920,iw)':min'(1080,ih)':force_original_aspect_ratio=decrease",
            ],
          },
          {
            type: "webm",
            codec: "libvpx-vp9", 
            options: [
              "-crf 30",
              "-b:v 0",
              "-b:a 128k",
              "-vf scale='min(1920,iw)':min'(1080,ih)':force_original_aspect_ratio=decrease",
            ],
          },
        ],
      },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },

    // Add the gatsby-source-sanity plugin here
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'soiz6rp1',
        dataset: `production`, // Your dataset
        // a token is required to access private datasets
        // token: process.env.SANITY_TOKEN,
        
        // If you need to watch for real-time updates. Optional.
        // watchMode: true,
        
        // If you have a Sanity GraphQL API, set useCdn to `false`.
        // useCdn: false,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    }
  ],
}
