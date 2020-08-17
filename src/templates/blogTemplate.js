/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Helmet from 'react-helmet'

import useSiteMetadata from '../hooks/useSiteMetadata'
import Layout from '../components/layout'

const MaxWidthLimit = styled.div`
  max-width: 720px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }

  h2 {
    font-size: 1.65rem;
    margin-top: 30px;
    padding-bottom: 5px;
  }

  p.publish-date {
    text-align: center;
    font-style: italic;
  }

  p.author {
    text-align: center;
    margin-bottom: 5px;
  }
`

const StyledParagraph = styled.div`
  padding-top: 1.5rem;
  line-height: 2;
  font-size: 1.15rem;
  margin-bottom: 20px;

  p:first-of-type:first-letter {
    float: left;
    font-family: Georgia, serif;
    font-size: 75px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
  }
`
const StyledH1 = styled.h1`
  margin-top: 30px;
`
const StyledFeaturedImage = styled.img`
  padding-bottom: 2rem;
  max-width: 100%;
  height: auto;
`

const BlogTemplate = ({ data, location }) => {
  const options = {
    renderNode: {
      // eslint-disable-next-line react/display-name
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = `https:${node.data.target.fields.file['en-US'].url}`

        return <img alt={alt} src={url} />
      },
    },
  }

  const { siteUrl } = useSiteMetadata()

  return (
    <Layout>
      <Helmet>
        <title>{data.contentfulBlogPost.title}</title>
        <meta
          name="description"
          content={data.contentfulBlogPost.description}
        />
        <meta property="og:title" content={data.contentfulBlogPost.title} />
        <meta
          property="og:description"
          content={data.contentfulBlogPost.description}
        />
        <meta
          property="og:image"
          content={data.contentfulBlogPost.featuredImage.fluid.src}
        />
        <meta property="og:url" content={`${siteUrl}${location.pathname}`} />
        <meta property="og:type" content="article" />
      </Helmet>
      <MaxWidthLimit>
        <StyledH1>{data.contentfulBlogPost.title}</StyledH1>
        <p className="author">{data.contentfulBlogPost.author.authorName}</p>
        <p className="publish-date">{data.contentfulBlogPost.publishDate}</p>
        <StyledFeaturedImage
          src={data.contentfulBlogPost.featuredImage.fluid.src}
          alt={data.contentfulBlogPost.title}
        />
        <hr />
        <StyledParagraph className="blog-content">
          {documentToReactComponents(
            data.contentfulBlogPost.body.json,
            options
          )}
        </StyledParagraph>
      </MaxWidthLimit>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      publishDate(formatString: "MMMM Do, YYYY")
      title
      body {
        json
      }
      featuredImage {
        fluid(maxWidth: 720) {
          src
        }
      }
      author {
        authorName
      }
      description
    }
  }
`
