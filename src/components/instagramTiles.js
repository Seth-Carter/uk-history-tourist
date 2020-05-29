import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const InstagramTiles = () => {
  const InstagramQuery = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 4) {
        edges {
          node {
            likes
            caption
            timestamp
            localFile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            id
            username
          }
        }
      }
    }
  `)

  return (
    <div className="container-fluid px-0">
      <div className="row">
        {InstagramQuery.allInstaNode.edges.map(edge => (
          <div key={edge.node.id} className="col-md mb-2">
            <Img fluid={edge.node.localFile.childImageSharp.fluid} alt="" />
          </div>
        ))}
        <div></div>
      </div>
    </div>
  )
}
export default InstagramTiles
