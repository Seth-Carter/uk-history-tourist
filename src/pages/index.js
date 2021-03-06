/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import BlogCards from '../components/blogcards'
import Layout from '../components/layout'
import img from '../images/grassy-field.jpg'
import InstagramTiles from '../components/instagramTiles'
import useSiteMetadata from '../hooks/useSiteMetadata'

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
  border-radius: 0.25rem;
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

const HomePage = ({ data, location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <Layout>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:image" content={img} />
        <meta property="og:url" content={`${siteUrl}${location.pathname}`} />
        <meta property="og:type" content="website" />
      </Helmet>
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

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default HomePage
