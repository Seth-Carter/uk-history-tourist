import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const currentYear = new Date().getFullYear()

const StyledFooter = styled.div`
  
  div.flex-row {
    display: flex;
    flex-direction: row;
    width: 100%
    flex-wrap: wrap;
    justify-content: center;
  }

  div.flex-column {
   
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    padding: 0 1rem .5rem 0;
    justify-content: center;
  }

  p.copyright {
    text-align: center;
  }

  h5 {
    text-align: center;
  }
`

const Footer = () => (
  <StyledFooter className="container-fluid">
    <div className="row">
      <div className="col-sm-6">
        <h5>About Us</h5>
        <p className="copyright">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore dolore magna aliqua.
        </p>
      </div>
      <div className="col-sm-6">
        <h5>Social Media</h5>
        <div className="flex-row">
          <Link className="nav-link" activeClassName="active" to="#">
            <i className="fab fa-instagram fa-2x"></i>
          </Link>
          <Link className="nav-link" activeClassName="active" to="#">
            <i className="fab fa-facebook-square fa-2x"></i>
          </Link>
        </div>
      </div>
    </div>
    <p className="copyright">COPYRIGHT © {currentYear} CHRISTINA CARTER</p>
  </StyledFooter>
)
export default Footer
