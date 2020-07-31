/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import BlogCards from '../components/blogcards'
import Layout from '../components/layout'
import img from '../images/grassy-field.jpg'
import InstagramTiles from '../components/instagramTiles'

const Jumbotron = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5)),
    url(${img});
  background-position: center;
  background-size: cover;
  height: 300px;
  color: white;
  text-align: center;
  border-radius: calc(0.25rem - 1px);
  justify-content: center;

  h1 {
    text-transform: uppercase;
    font-weight: 800;
  }

  p {
    font-weight: 600;
    letter-spacing: 0.02rem;
  }
`

const CenteredDiv = styled.div`
  text-align: center;

  h2 {
    margin-top: 3rem;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`

export default ({ data }) => {
  useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <Jumbotron className="jumbotron jumbotron-fluid">
        <h1>{data.site.siteMetadata.title}</h1>
        <p>A Guide to the UK's Most Historical Places</p>
      </Jumbotron>
      <CenteredDiv>
        <h2>Latest Posts</h2>
      </CenteredDiv>
      <BlogCards />
      <CenteredDiv>
        <h2>Instagram Feed</h2>
      </CenteredDiv>
      <InstagramTiles />
    </Layout>
  )
}
