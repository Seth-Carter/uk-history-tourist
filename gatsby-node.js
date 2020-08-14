const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Create individual blog pages (posts)
  const blogTemplate = path.resolve('./src/templates/blogTemplate.js')
  const res = await graphql(`
    query {
      allContentfulBlogPost(
        limit: 1000
        sort: { fields: publishDate, order: DESC }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  // Create paginated blog lists
  const blogListTemplate = path.resolve('./src/templates/blogListTemplate.js')
  const posts = res.data.allContentfulBlogPost.edges
  const postsPerPage = 2
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
