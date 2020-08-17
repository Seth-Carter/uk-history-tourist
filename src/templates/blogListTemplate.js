/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const BlogHeader = styled.div`
  text-align: center;

  h1 {
    font-weight: 800;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
  }

  &:hover h2 {
    text-decoration: underline;
  }
`

const WrapperDiv = styled.div`
  .line-clamp {
    overflow: hidden;
    position: relative;
    line-height: 1.5em;
    max-height: 4.5em;
    text-align: justify;
    margin-right: -1em;
    padding-right: 1em;
  }

  .line-clamp:before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .line-clamp:after {
    content: '';
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: white;
  }
`

const BlogListTemplate = ({ data }) => (
  <Layout>
    <Helmet>
      <title>The English History Tourist Blog</title>
      <meta
        name="description"
        content="Read the English History Tourist blog for the latest on top history destinations in the UK!"
      />
    </Helmet>
    <BlogHeader className="py-3">
      <h1>Blog</h1>
      <p>Recommendations, attractions, and top historical sites</p>
    </BlogHeader>
    <WrapperDiv>
      {data.allContentfulBlogPost.edges.map(edge => (
        <div key={edge.node.id} className="card mb-3">
          <StyledLink to={`/blog/${edge.node.slug}`}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <Img
                  fluid={edge.node.featuredImage.fluid}
                  className="card-img"
                  alt={edge.node.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{edge.node.title}</h2>
                  <p className="card-text line-clamp">
                    {edge.node.body.json.content[0].content[0].value}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      {edge.node.publishDate}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </StyledLink>
        </div>
      ))}
    </WrapperDiv>
  </Layout>
)

export default BlogListTemplate

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          id
          slug
          body {
            json
          }
          publishDate(formatString: "MMMM Do, YYYY")
          title
          featuredImage {
            fluid(
              maxWidth: 658
              resizingBehavior: FILL
              maxHeight: 370
              cropFocus: CENTER
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
