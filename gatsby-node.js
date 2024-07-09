const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityProject {
        nodes {
          slug {
            current
          }
          title
          videoUrl
          details {
            type
            content {
              heading
              text
              image
              nextProjectTitle
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const projects = result.data.allSanityProject.nodes;

  projects.forEach((project) => {
    createPage({
      path: `/work/${project.slug.current}`,
      component: path.resolve(`./src/templates/project-template.js`),
      context: {
        slug: project.slug.current,
        projectTitle: project.title,
        videoUrl: project.videoUrl,
        projectDetails: project.details,
      },
    });
  });
};
