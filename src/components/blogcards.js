import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`

const WrapperDiv = styled.div`
  .line-clamp {
    overflow: hidden;
    position: relative;
    line-height: 1.5em;
    max-height: 6em;
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

const BlogCards = () => {
  const cardQuery = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        limit: 3
        sort: { order: DESC, fields: publishDate }
      ) {
        edges {
          node {
            title
            publishDate(formatString: "MMMM Do, YYYY")
            body {
              json
            }
            slug
            id
            featuredImage {
              fluid(
                maxWidth: 658
                resizingBehavior: FILL
                cropFocus: CENTER
                maxHeight: 370
              ) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <WrapperDiv>
      <div className="container-fluid px-0">
        <div className="row row-cols-1 row-cols-lg-3">
          {cardQuery.allContentfulBlogPost.edges.map(edge => (
            <div key={edge.node.id} className="col pb-4">
              <div className="card h-100">
                <StyledLink to={`/blog/${edge.node.slug}`}>
                  <Img
                    fluid={edge.node.featuredImage.fluid}
                    className="card-img-top"
                    alt={edge.node.title}
                  />
                  <div className="card-body">
                    <h3 className="card-title text-center">
                      {edge.node.title}
                    </h3>
                    <p className="card-text line-clamp">
                      {edge.node.body.json.content[0].content[0].value}
                    </p>
                    <p className="card-text align-text-bottom text-center">
                      <small className="text-muted">
                        {edge.node.publishDate}
                      </small>
                    </p>
                    <div className="text-center">
                      <button className="btn btn-dark" type="button">
                        Read More
                      </button>
                    </div>
                  </div>
                </StyledLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperDiv>
  )
}

export default BlogCards
