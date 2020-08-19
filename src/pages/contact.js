import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Subheader from '../components/subheader'

const LineBreak = styled.hr`
  max-width: 720px;
  margin-bottom: 3rem;
`

const Contact = () => (
  <Layout>
    <Subheader>
      <h1>Contact</h1>
      <p>Need to get in touch with us?</p>
    </Subheader>
    <LineBreak />
    <div>Coming soon...</div>
  </Layout>
)
export default Contact
