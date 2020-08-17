/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import './custom.css'

const StyledDiv = styled.div`
  position: relative;
  min-height: 90vh;
  padding-bottom: 2rem;
`

const ContentContainer = styled.div`
  padding-bottom: 4rem;
`

const Layout = props => (
  <StyledDiv className="container">
    <Header />
    <ContentContainer>{props.children}</ContentContainer>
    <Footer />
  </StyledDiv>
)

export default Layout
