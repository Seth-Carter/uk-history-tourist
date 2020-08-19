/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const SubheaderDiv = styled.div`
  text-align: center;

  h1 {
    font-weight: 800;
  }
`

const Subheader = props => (
  <SubheaderDiv className="py-3">{props.children}</SubheaderDiv>
)
export default Subheader
