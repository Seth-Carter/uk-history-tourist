import React from 'react'
import styled from 'styled-components'

import Subheader from '../components/subheader'
import Layout from '../components/layout'

const LineBreak = styled.hr`
  max-width: 720px;
  margin-bottom: 3rem;
`

const About = () => (
  <Layout>
    <Subheader>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet and more words</p>
    </Subheader>
    <LineBreak />
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col-sm-4">IMG</div>
        <div className="col-sm-8">
          Bootstrap’s grid includes five tiers of predefined classes for
          building complex responsive layouts. Customize the size of your
          columns on extra small, small, medium, large, or extra large devices
          however you see fit.
        </div>
      </div>
    </div>
  </Layout>
)
export default About
